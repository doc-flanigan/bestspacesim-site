import Link from 'next/link';
import { CTAButton } from '@/components/CTAButton';
import { SecondaryButton } from '@/components/SecondaryButton';
import { GAMES } from '@/data/games';
import { FREE_FLY_URL } from '@/lib/links';
import { BreadcrumbsJsonLd } from '@/components/BreadcrumbsJsonLd';
import { PageSources } from '@/components/PageSources';

const sc = GAMES.find((g) => g.id === 'star-citizen')!;

export const metadata = {
  title: 'Is Star Citizen Worth It in 2026? An Honest Verdict',
  description:
    'Yes — if you want a living universe and can tolerate alpha bugs. No — if you want a polished 30-hour story. Costs, who should buy, who should wait, and how to try it free.',
  alternates: { canonical: '/is-star-citizen-worth-it' },
};

const faqs = [
  {
    q: 'Is Star Citizen worth it in 2026?',
    a: 'Yes, for players who want the deepest living-universe sim available and can tolerate alpha-stage bugs. Star Citizen scores 9.4/10 in our rankings — the highest of any space sim we review — because of its seamless atmospheric flight, single-shard persistent universe, and working careers like mining, hauling, salvage, and medical rescue. It is not worth it if you want a polished, finished game: the current live build is Alpha 4.8, and server hiccups and missing quality-of-life features are part of the deal.',
  },
  {
    q: 'How much does Star Citizen cost to start?',
    a: 'A starter Game Package from $45 is the minimum purchase, and it is a one-time payment — no subscription is required to play. Signing up with a referral code (like STAR-GCQJ-N6NC) adds a 50,000 UEC enlistment bonus to your account.',
  },
  {
    q: 'Can I try Star Citizen for free before buying?',
    a: 'Yes. Cloud Imperium runs Free Fly events several times a year — typically around Invictus Launch Week in May and the Intergalactic Aerospace Expo in November — during which anyone with a free RSI account can play the live game at no cost, no purchase required. Between events, actual flight is gated to a Game Package purchase.',
  },
  {
    q: 'Is Star Citizen still in alpha?',
    a: 'Yes. Crowdfunding launched in October 2012 and the game has been in open development since, with public alpha testing beginning in 2014. On May 24, 2026 it crossed $1 billion raised — no other crowdfunded project comes close. The current live build is Alpha 4.8.',
  },
  {
    q: 'Is Star Citizen worth it for solo players?',
    a: 'Partially. There is no dedicated single-player mode in the live game — Squadron 42, the story campaign, is a separate title. Solo players can run missions, mine, haul, and explore alone in the shared universe, but the game is designed around a multiplayer world. If you want a pure single-player space game, Starfield, X4: Foundations, or No Man\'s Sky may suit you better.',
  },
];

const worthIt = [
  'You want a living, persistent universe over a scripted campaign',
  'You enjoy flight sims, EVE-style economies, or immersive sims',
  'You can roll with alpha bugs because the game improves every patch',
  'You have a mid-to-high-end PC',
];

const notWorthIt = [
  'You want a tight, polished 30-hour story — look at Starfield instead',
  'A crashed server or lost cargo run would ruin your week',
  'You expect every career and feature to be finished today',
  'You are on older hardware — the sim is demanding',
];

export default function WorthItPage() {
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
          { name: 'Is Star Citizen Worth It?', url: '/is-star-citizen-worth-it' },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="mx-auto max-w-4xl px-4 pt-12 sm:px-6 sm:pt-16">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-purple">
          Honest verdict · 2026
        </p>
        <h1 className="mt-3 text-balance font-display text-4xl font-semibold leading-tight text-offwhite sm:text-5xl md:text-6xl">
          Is Star Citizen worth it in 2026?
        </h1>
        <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-offwhite/85 sm:text-lg">
          <strong className="text-offwhite">Short answer: yes — if you want the deepest living
          universe in gaming and can tolerate alpha bugs; no — if you want a
          polished, finished story.</strong> Star Citizen scores {sc.score}/10 in our
          rankings, the highest of the six space sims we review. It is also,
          plainly, alpha software. This page tells you which side of that line
          you are on before you spend a dollar.
        </p>
      </section>

      <section className="mx-auto mt-12 max-w-4xl px-4 sm:px-6">
        <h2 className="font-display text-2xl font-semibold text-offwhite sm:text-3xl">
          What it actually costs
        </h2>
        <div className="mt-3 space-y-4 text-base leading-relaxed text-offwhite/85">
          <p>
            The minimum buy-in is a starter Game Package from $45 — a one-time
            purchase, no subscription. Everything flyable can eventually be
            earned in-game with aUEC, so the hundred-dollar ships on the store
            are optional pledges, not requirements. Signing up with referral
            code STAR-GCQJ-N6NC adds a 50,000 UEC enlistment bonus — a
            meaningful starter wallet for gear, ammo, and rentals. If the
            funding model itself makes you suspicious, we take that question
            head-on in{' '}
            <Link
              href="/is-star-citizen-a-scam"
              className="text-purple hover:text-purple-dark"
            >
              is Star Citizen a scam?
            </Link>
          </p>
          <p>
            Better yet: you may not need to spend anything to find out.
            Cloud Imperium runs Free Fly events several times a year where the
            full live game is playable on a free account —{' '}
            <a
              href={FREE_FLY_URL}
              className="text-purple hover:text-purple-dark"
            >
              freeflyevent.com tracks the next Free Fly window
            </a>{' '}
            and explains how to join one.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-4xl px-4 sm:px-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-purple/40 bg-greenMid/40 p-6">
            <h2 className="text-[11px] font-semibold uppercase tracking-wider text-purple">
              Worth it if…
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-offwhite/90">
              {worthIt.map((p) => (
                <li key={p} className="flex gap-2">
                  <span aria-hidden className="text-purple">+</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-greenMid bg-greenMid/30 p-6">
            <h2 className="text-[11px] font-semibold uppercase tracking-wider text-muted">
              Not worth it if…
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-offwhite/85">
              {notWorthIt.map((c) => (
                <li key={c} className="flex gap-2">
                  <span aria-hidden className="text-muted">–</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-4xl px-4 sm:px-6">
        <h2 className="font-display text-2xl font-semibold text-offwhite sm:text-3xl">
          Frequently asked questions
        </h2>
        <div className="mt-4 space-y-6">
          {faqs.map((f) => (
            <article key={f.q}>
              <h3 className="font-display text-lg font-semibold text-offwhite">
                {f.q}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-offwhite/85">
                {f.a}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-14 max-w-4xl px-4 sm:px-6">
        <div className="rounded-3xl border border-purple/40 bg-gradient-to-br from-greenMid/80 to-deepGreen p-8 shadow-glow">
          <h2 className="font-display text-2xl font-semibold text-offwhite sm:text-3xl">
            Decided? Or still weighing it?
          </h2>
          <p className="mt-3 max-w-2xl text-offwhite/80">
            If you are in, sign up with the referral code for the 50,000 UEC
            bonus. If you want the full breakdown first, read our{' '}
            <Link href="/star-citizen" className="text-purple hover:text-purple-dark">
              Star Citizen review
            </Link>{' '}
            or see{' '}
            <Link href="/comparison" className="text-purple hover:text-purple-dark">
              how it compares to the rest of the genre
            </Link>
            . Wondering whether the universe will feel populated? See{' '}
            <Link
              href="/star-citizen-player-count"
              className="text-purple hover:text-purple-dark"
            >
              what the player-count numbers actually show
            </Link>
            .
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <CTAButton trackingLabel="worth-it-cta">Try Star Citizen Free</CTAButton>
            <SecondaryButton>Star Citizen Beginner&apos;s Guide</SecondaryButton>
          </div>
        </div>
      </section>

      <PageSources route="/is-star-citizen-worth-it" />
    </>
  );
}
