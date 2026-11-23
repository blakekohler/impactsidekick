/* Harbor Fund mock-ups: shared content and behaviour.
   Every fact below comes from harbor-fund.org or Variety (July 2, 2026). */
window.HF = {
  proof: [
    { n: '$15M', l: 'raised from donors' },
    { n: '82', l: 'donors and patrons' },
    { n: '22', l: 'projects funded' },
    { n: '3', l: 'Harbor Film Forums' }
  ],
  proofNote: 'Figures as reported by Variety, July 2026.',
  goal: 'Working toward $100 million over the next two years.',
  steps: [
    { t: 'Source', d: 'We find film, television and documentary projects from the world’s best storytellers that promote the public good.' },
    { t: 'Raise', d: 'Philanthropists who share each project’s mission give grants to the fund.' },
    { t: 'Invest', d: 'We invest in equity and debt with filmmakers to launch the production and its social cause.' },
    { t: 'Return', d: 'Proceeds flow back into an evergreen fund and are reinvested in the next film, in perpetuity.' }
  ],
  films: [
    { slug: 'evicted', t: 'Evicted', k: 'Documentary', d: 'Chris Pine’s documentary.' },
    { slug: 'by-any-means', t: 'By Any Means', k: 'Feature', d: 'A civil-rights era crime thriller starring Mark Wahlberg, released by Paramount Pictures.' },
    { slug: 'valley-of-the-heart', t: 'Valley of the Heart', k: 'Feature', d: 'Written by Luis Valdez and directed by Edward James Olmos: two lovers torn apart by Pearl Harbor.' },
    { slug: 'wool-kings', t: 'Wool Kings', k: 'Comedy', d: 'Two feuding New Zealand sheep farmers vie for the country’s top sheep station.' },
    { slug: 'gordons-girl', t: 'Gordon’s Girl', k: 'In development', d: 'Pitched at the 2026 Harbor Film Forum.' },
    { slug: 'space-junkies', t: 'Space Junkies', k: 'On the slate', d: '' },
    { slug: 'defiant', t: 'Defiant', k: 'On the slate', d: 'The story of Robert Smalls.' },
    { slug: 'newborn', t: 'Newborn', k: 'On the slate', d: '' },
    { slug: 'hershey', t: 'Hershey', k: 'On the slate', d: '' },
    { slug: 'fight-song', t: 'Fight Song', k: 'On the slate', d: '' },
    { slug: 'lili', t: 'Lili', k: 'On the slate', d: '' },
    { slug: 'the-lake', t: 'The Lake', k: 'On the slate', d: '' }
  ],
  forums: [
    { y: 'February 2025', p: 'Necker Island, British Virgin Islands', d: 'Our inaugural Forum: artists and leaders united by the belief that stories can move the world forward.', img: 'necker-island' },
    { y: 'September 2025', p: 'Crazy Mountain Ranch, Montana', d: 'Building on Necker: new voices, deeper conversations and bolder visions for impact.', img: 'montana-town' },
    { y: 'June 2026', p: 'Sundance Mountain Resort, Utah', d: 'Four invitation-only days of pitches to patrons, with the State of Utah as title sponsor.', img: 'hero-mountain' }
  ],
  press: [
    { o: 'Variety', h: 'Is Harbor Fund Participant 2.0? Hollywood A-Listers Hope So', d: 'July 2, 2026', u: 'https://variety.com/2026/film/news/harbor-fund-participant-social-impact-1236800942/', q: '“We want to hijack the most powerful PR engine in the world.” — Lindsay Hadley' },
    { o: 'Forbes', h: 'Inside Harbor Fund’s $100M Bet On Social Impact Films In Hollywood', d: 'August 31, 2026', u: 'https://www.forbes.com/sites/eshachhabra/2026/08/31/inside-harbor-funds-100m-bet-on-social-impact-films-in-hollywood/', q: '' }
  ],
  team: [
    { n: 'Lindsay Hadley', r: 'Co-founder & CEO' },
    { n: 'Matt Peterson', r: 'Co-founder & Director of Finance' },
    { n: 'Phil Webb', r: 'Co-founder & COO' },
    { n: 'Freddy Bosche', r: 'Co-founder & Board Member' }
  ],
  advisors: ['Patty Jenkins', 'Katie Couric', 'Gerard Butler', 'Mark Burnett', 'Mark Cuban', 'Geralyn Dreyfous', 'Amy Redford', 'Maria Breese', 'Nadja Bellan White', 'Shannon Sedgwick Davis', 'Sally Hopkins Conner', 'Jeff Hoffman', 'Jim Pitofsky', 'Krista Sorenson', 'Holly Parker', 'Marc Roman', 'Dan Cooper'],
  quote: { q: 'The movies are like a machine that generates empathy.', a: 'Roger Ebert' },
  address: ['3865 S. Wasatch Blvd, Suite 130', 'Salt Lake City, UT 84109'],
  social: [
    { n: 'Instagram', u: 'https://www.instagram.com/harborfund/' },
    { n: 'YouTube', u: 'https://www.youtube.com/@HarborFund' }
  ],
  interests: [
    { v: 'give', t: 'Give to the fund', d: 'Support the slate with a grant.' },
    { v: 'forum', t: 'Attend a Film Forum', d: 'Hear pitches and meet the filmmakers.' },
    { v: 'coinvest', t: 'Back a specific film', d: 'Put philanthropic capital behind one project.' }
  ],
  faq: [
    { q: 'Is my gift tax-deductible?', a: 'Harbor Fund is a nonprofit. Grants are made to the fund, and our team will walk you through how your gift is received.' },
    { q: 'What happens to the returns?', a: 'Any proceeds go back into the evergreen fund and are reinvested in new social impact films.' },
    { q: 'Can I support one film in particular?', a: 'Yes. Many patrons align a grant with a specific production’s cause. Tell us which films interest you.' },
    { q: 'How do I get invited to a Forum?', a: 'Forum guests are curated. Choose “Attend a Film Forum” below and our team will be in touch.' }
  ]
};

/* Inline Harbor mark: circle with two bars, from the logo on harbor-fund.org. */
HF.mark = (fg, bg) => `<svg viewBox="0 0 40 40" width="32" height="32" aria-hidden="true"><circle cx="20" cy="20" r="19" fill="${fg}"/><rect x="13.2" y="11" width="4.6" height="18" rx="1.2" fill="${bg}"/><rect x="22.2" y="11" width="4.6" height="18" rx="1.2" fill="${bg}"/></svg>`;

/* Two views on one page: home and the patron page, switched by #patron. */
HF.route = () => {
  const patron = location.hash === '#patron';
  document.querySelectorAll('[data-view]').forEach(v => { v.hidden = (v.dataset.view === 'patron') !== patron; });
  document.querySelectorAll('[data-nav=patron]').forEach(a => a.setAttribute('aria-current', patron ? 'page' : 'false'));
  if (patron || location.hash === '' || location.hash === '#top') { window.scrollTo(0, 0); return; }
  const t = document.getElementById(location.hash.slice(1));
  if (t) requestAnimationFrame(() => t.scrollIntoView());
};
HF.form = (root) => {
  const f = root.querySelector('form'); if (!f) return;
  f.addEventListener('submit', e => {
    e.preventDefault();
    const name = f.querySelector('[name=name]'), email = f.querySelector('[name=email]');
    const err = root.querySelector('.form-err');
    if (!name.value.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value)) {
      if (err) err.textContent = 'Please add your name and a valid email.';
      (!name.value.trim() ? name : email).focus(); return;
    }
    const first = name.value.trim().split(/\s+/)[0];
    f.hidden = true;
    const ok = root.querySelector('.form-ok');
    if (ok) { ok.hidden = false; ok.querySelector('[data-first]').textContent = first; ok.focus(); }
  });
};
HF.boot = () => {
  window.addEventListener('hashchange', HF.route);
  HF.route();
  document.querySelectorAll('[data-patron-form]').forEach(HF.form);
  const y = document.querySelectorAll('[data-year]'); y.forEach(e => e.textContent = new Date().getFullYear());
};
