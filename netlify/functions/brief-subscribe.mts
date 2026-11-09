// Adds a Sidekick Academy resources visitor to The Sidekick Brief (beehiiv)
// in exchange for the Word downloads on /academy/resources/ (soft gate).
// Needs BEEHIIV_API_KEY (scope: Functions) set in Netlify. Without it the
// page still records the email in the Netlify form "brief-gate" and unlocks
// the downloads, so no signup is lost; import those into beehiiv by hand.
import type { Context } from "@netlify/functions"

const PUBLICATION_ID = "pub_bfd19633-83a3-4994-b85a-c7a3e3a7eecd"
const RESOURCES = new Set(["prompt-library", "ai-policy"])

export default async (req: Request, _context: Context) => {
  if (req.method !== "POST") {
    return Response.json({ ok: false, error: "method" }, { status: 405 })
  }

  let body: { email?: string; resource?: string; website?: string }
  try {
    body = await req.json()
  } catch {
    return Response.json({ ok: false, error: "bad_json" }, { status: 400 })
  }

  // Honeypot: bots fill the hidden "website" field.
  if (body.website) return Response.json({ ok: true })

  const email = (body.email || "").trim().toLowerCase()
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) || email.length > 254) {
    return Response.json({ ok: false, error: "invalid_email" }, { status: 400 })
  }
  const resource = RESOURCES.has(body.resource || "") ? body.resource! : "resources"

  const apiKey = Netlify.env.get("BEEHIIV_API_KEY") || Netlify.env.get("Beehiiv_API_KEY")
  if (!apiKey) {
    return Response.json({ ok: false, error: "not_configured" }, { status: 503 })
  }

  const res = await fetch(
    `https://api.beehiiv.com/v2/publications/${PUBLICATION_ID}/subscriptions`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${apiKey}` },
      body: JSON.stringify({
        email,
        reactivate_existing: false,
        send_welcome_email: true,
        utm_source: "impactsidekick.com",
        utm_medium: "resource-gate",
        utm_campaign: resource,
        referring_site: "https://impactsidekick.com/academy/resources/",
      }),
    },
  )

  if (!res.ok) {
    console.error("beehiiv subscribe failed", res.status, await res.text())
    return Response.json({ ok: false, error: "beehiiv" }, { status: 502 })
  }
  return Response.json({ ok: true })
}
