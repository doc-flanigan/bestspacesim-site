import Link from 'next/link';
import { SecondaryButton } from '@/components/SecondaryButton';
import { FREE_FLY_URL, SITE_URL } from '@/lib/links';
import { BreadcrumbsJsonLd } from '@/components/BreadcrumbsJsonLd';
import { PageSources } from '@/components/PageSources';

export const metadata = {
  title: 'Star Citizen Player Count 2026, Explained',
  description:
    'There is no official Star Citizen player count. We explain what the 6.5M accounts figure really is, why estimates disagree 5x, and the signals you can verify.',
  alternates: { canonical: '/star-citizen-player-count' },
};

const sections = [
  {
    heading: 'What the 6.5 million number actually is',
    body: [
      'The figure most often quoted as a "player count" is the "Star Citizens" counter on the official RSI funding tracker — over 6.5 million as of mid-2026. That number is all-time registered accounts: every RSI account ever created since crowdfunding launched in 2012, including free accounts that never bought a game package and accounts that have not logged in for years.',
      'Those 6.5 million backer accounts are real — they are the accounts behind the $1 billion in funding the project crossed on May 24, 2026. But backers means accounts, not unique paying customers, and certainly not active players. Any article that presents 6.5 million as "people playing Star Citizen" is misreading the tracker.',
    ],
  },
  {
    heading: 'Why third-party estimates disagree by 5x',
    body: [
      'Because CIG publishes no active-player statistic, a cottage industry of "live player count" sites fills the void with estimates. The problem: they disagree with each other by roughly five times — one popular tracker suggests around 13,000 daily players while another puts concurrent players near 63,000 — and none of them disclose a methodology. Star Citizen does not run on Steam, so there is no public concurrency feed to sample.',
      'We cite those numbers only as examples of how far apart the guesses are, not as data. When two sources claim to measure the same thing and land 5x apart with no stated method, the honest conclusion is that neither one knows.',
    ],
  },
  {
    heading: 'The signals you can actually verify',
    body: [
      'Three population signals are real and checkable. First, registered accounts: the RSI funding tracker publishes the all-time account count, live. Second, funding rate: the same tracker discloses money raised over time, and people do not keep funding a game nobody plays — the project crossed $1 billion in May 2026. Third, server capacity: each server shard holds a fixed number of players, so you can observe how full shards are when you play — though that measures density, not a total.',
      'None of these gives you "how many people play Star Citizen." That is the point of this page: no verifiable total exists, and anyone quoting one with confidence is guessing.',
    ],
  },
  {
    heading: 'What this means if you are deciding whether to buy',
    body: [
      'The practical question behind "how many people play" is usually "will the universe feel alive, and is this game safe to invest in?" On the first part: community consensus is that servers feel healthy and populated — landing zones are busy, distress beacons get answered, and org play is active. We share that impression, but it is a felt experience, not a provable number, and we will not dress it up as one.',
      'On the second part, the honest signals are elsewhere: the public funding tracker, the state of the live alpha, and what the game actually does today. Our full Star Citizen review and worth-it verdict cover exactly that — and the best possible evidence is checking a server yourself during a Free Fly event, which costs nothing.',
    ],
  },
];

const faqs = [
  {
    q: 'How many people play Star Citizen?',
    a: 'Nobody outside CIG knows, because CIG publishes no active-player or concurrent-player statistic. The often-quoted 6.5 million figure is all-time registered RSI accounts from the official funding tracker — not active players. Third-party estimates disagree by roughly 5x and disclose no methodology.',
  },
  {
    q: 'What does the 6.5 million "Star Citizens" number mean?',
    a: 'It is the all-time count of registered RSI accounts since crowdfunding launched in 2012, as reported on the official funding tracker. It includes free accounts and long-inactive accounts. It is an accounts number, not a count of unique paying customers or active players.',
  },
  {
    q: 'Are third-party Star Citizen player-count sites accurate?',
    a: 'There is no way to know, which is the problem: they disagree with each other by roughly five times — around 13,000 daily players on one versus around 63,000 concurrent on another — and none disclose how they arrive at their numbers. Star Citizen is not on Steam, so no public concurrency data exists to check them against.',
  },
  {
    q: 'Is Star Citizen dead or dying in 2026?',
    a: 'The verifiable signals say no: the public funding tracker crossed $1 billion on May 24, 2026, from over 6.5 million backer accounts, and the live alpha continues to ship patches. Community consensus is that servers feel populated. But no official player count exists, so no one can prove a population figure in either direction.',
  },
];

export default function PlayerCountPage() {
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Star Citizen Player Count 2026 — Why No Official Number Exists',
    description:
      'There is no official Star Citizen player count. What the 6.5M accounts figure actually is, why third-party estimates disagree 5x, and the signals you can verify.',
    author: { '@type': 'Person', name: 'Doc_Flanigan' },
    mainEntityOfPage: `${SITE_URL}/star-citizen-player-count`,
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <BreadcrumbsJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Star Citizen Player Count', url: '/star-citizen-player-count' },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="mx-auto max-w-4xl px-4 pt-12 sm:px-6 sm:pt-16">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-purple">
          Player count · 2026
        </p>
        <h1 className="mt-3 text-balance font-display text-4xl font-semibold leading-tight text-offwhite sm:text-5xl md:text-6xl">
          How many people play Star Citizen?
        </h1>
        <p className="mt-4 text-sm text-muted">
          By <span className="text-offwhite/80">Doc_Flanigan</span> · Verified against the
          official RSI funding tracker
        </p>
        <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-offwhite/85 sm:text-lg">
          <strong className="text-offwhite">
            There is no official Star Citizen player count. Cloud Imperium Games does not
            publish active-player or concurrent-player statistics — every specific number
            you have seen is either the all-time registered-accounts figure or a
            third-party guess.
          </strong>{' '}
          This page explains what the real numbers are, why the estimate sites disagree by
          5x, and which population signals you can actually verify.
        </p>
      </section>

      <section className="mx-auto mt-12 grid max-w-4xl gap-10 px-4 sm:px-6">
        {sections.map((s) => (
          <article key={s.heading}>
            <h2 className="font-display text-2xl font-semibold text-offwhite sm:text-3xl">
              {s.heading}
            </h2>
            <div className="mt-3 space-y-4 text-base leading-relaxed text-offwhite/85">
              {s.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="mx-auto mt-12 max-w-4xl px-4 sm:px-6">
        <h2 className="font-display text-2xl font-semibold text-offwhite sm:text-3xl">
          Common questions
        </h2>
        <div className="mt-4 space-y-6">
          {faqs.map((f) => (
            <article key={f.q}>
              <h3 className="font-display text-lg font-semibold text-offwhite">{f.q}</h3>
              <p className="mt-2 text-base leading-relaxed text-offwhite/85">{f.a}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-14 max-w-4xl px-4 sm:px-6">
        <div className="rounded-3xl border border-purple/40 bg-gradient-to-br from-greenMid/80 to-deepGreen p-8 shadow-glow">
          <h2 className="font-display text-2xl font-semibold text-offwhite sm:text-3xl">
            The only player count that matters is your own session
          </h2>
          <p className="mt-3 max-w-2xl text-offwhite/80">
            During a Free Fly event you can log into the live universe on a free account
            and see how populated the servers feel — no purchase, no estimate site
            required.{' '}
            <a href={FREE_FLY_URL} className="text-purple hover:text-purple-dark">
              freeflyevent.com tracks the next Free Fly window
            </a>
            . For whether the game itself is worth your money, read our{' '}
            <Link
              href="/is-star-citizen-worth-it"
              className="text-purple hover:text-purple-dark"
            >
              honest worth-it verdict
            </Link>{' '}
            or the{' '}
            <Link href="/star-citizen" className="text-purple hover:text-purple-dark">
              full Star Citizen review
            </Link>
            .
          </p>
          <div className="mt-5">
            <SecondaryButton>Star Citizen Beginner&apos;s Guide</SecondaryButton>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-4xl px-4 pb-4 text-sm text-muted sm:px-6">
        <p>
          Skeptical about more than the player numbers?{' '}
          <Link
            href="/is-star-citizen-a-scam"
            className="text-purple hover:text-purple-dark"
          >
            Is Star Citizen a scam? We answer that one straight, too →
          </Link>
        </p>
      </section>

      <PageSources route="/star-citizen-player-count" />
    </>
  );
}
