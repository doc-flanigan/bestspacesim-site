import Link from 'next/link';
import { HeroCarousel } from '@/components/HeroCarousel';
import { GameComparisonCard } from '@/components/GameComparisonCard';
import { ComparisonTable } from '@/components/ComparisonTable';
import { CTAButton } from '@/components/CTAButton';
import { SecondaryButton } from '@/components/SecondaryButton';
import { GAMES } from '@/data/games';
import { SITE_URL, FREE_FLY_URL } from '@/lib/links';

export const metadata = {
  title: 'Best Space Sim Games 2026 — Top Picks for New & Veteran Players',
  description:
    "Looking for the best space simulation game? We rank the top space sims of 2026 including Star Citizen, Elite Dangerous, No Man's Sky, and more.",
  alternates: { canonical: '/' },
};

const topPick = GAMES[0];

export default function HomePage() {
  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Best Space Sim Games 2026',
    itemListOrder: 'https://schema.org/ItemListOrderDescending',
    numberOfItems: GAMES.length,
    itemListElement: GAMES.map((g) => ({
      '@type': 'ListItem',
      position: g.rank,
      url: `${SITE_URL}/comparison#${g.id}`,
      name: g.title,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />

      <section className="mx-auto max-w-6xl px-4 pt-10 sm:px-6 sm:pt-14">
        <div className="mb-8 flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-purple">
              Updated {new Date().toLocaleString('en-US', { month: 'long', year: 'numeric' })}
            </p>
            <h1 className="mt-3 text-balance font-display text-4xl font-semibold leading-tight text-offwhite sm:text-5xl md:text-6xl">
              The Best Space Sim Games in 2026
            </h1>
            <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-offwhite/80 sm:text-lg">
              We tested the heavyweights — Star Citizen, Elite Dangerous, No
              Man's Sky, EVE Online, X4: Foundations, and Starfield — and
              ranked them honestly. One stands above the rest if you want a
              real living universe.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <CTAButton size="lg" />
              <SecondaryButton size="lg" />
            </div>
          </div>
        </div>

        <HeroCarousel />
      </section>

      <TopPick />

      <Rankings />

      <FullTable />

      <WhyStarCitizen />

      {/* Getting Started with Star Citizen */}
      <section className="py-16 px-4" style={{ backgroundColor: '#0d1f16' }}>
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold mb-4" style={{ color: '#eef2ee' }}>
            Ready to try it? Here&apos;s where to start.
          </h2>
          <p className="mb-4" style={{ color: '#7a8f7d' }}>
            The cheapest way in is a{' '}
            <strong style={{ color: '#eef2ee' }}>starter package (~$45–$55)</strong>.
            For most new players, the{' '}
            <strong style={{ color: '#eef2ee' }}>Avenger Titan (~$55)</strong> is the best
            first ship — versatile enough for every beginner mission type, good cargo
            capacity, and comfortable to fly. The Aurora Mk II (~$45) works if you want
            the absolute minimum to get in the door.
          </p>
          <p className="mb-6" style={{ color: '#7a8f7d' }}>
            Before you buy: use a referral code when you create your account and you&apos;ll
            get{' '}
            <strong style={{ color: '#eef2ee' }}>50,000 bonus UEC</strong>{' '}
            added automatically. Use code{' '}
            <strong style={{ color: '#eef2ee' }}>STAR-GCQJ-N6NC</strong>.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 items-start">
            <CTAButton trackingLabel="Getting Started Section">
              Enlist with Referral Code
            </CTAButton>
            <a
              href="https://dayonecitizen.com/day-one-citizen/starter-package"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm underline underline-offset-4 hover:opacity-80 transition-opacity"
              style={{ color: '#7a8f7d' }}
            >
              Compare all starter ships →
            </a>
          </div>
        </div>
      </section>

      <FreeFlyCTA />
    </>
  );
}

function TopPick() {
  return (
    <section className="mx-auto mt-20 max-w-6xl px-4 sm:px-6">
      <div className="grid items-center gap-8 rounded-3xl border border-purple/40 bg-gradient-to-br from-greenMid/80 to-deepGreen p-8 shadow-glow md:grid-cols-[1.1fr_0.9fr] md:p-12">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-purple/50 bg-purple/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-purple">
            <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-purple" />
            Our top pick · 2026
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold text-offwhite sm:text-4xl">
            {topPick.title}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-offwhite/85 sm:text-lg">
            {topPick.tagline}
          </p>
          <ul className="mt-5 grid gap-2 text-sm text-offwhite/85 sm:grid-cols-2">
            {topPick.pros.map((p) => (
              <li key={p} className="flex gap-2">
                <span aria-hidden className="text-purple">+</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <div className="mt-7 flex flex-wrap gap-3">
            <CTAButton>Try Star Citizen Free</CTAButton>
            <SecondaryButton href="/star-citizen" external={false}>
              Read full review
            </SecondaryButton>
          </div>
        </div>
        <aside className="rounded-2xl border border-greenMid bg-deepGreen/60 p-6">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-muted">
            Why it wins
          </p>
          <dl className="mt-3 space-y-3 text-sm">
            <div className="flex justify-between gap-4">
              <dt className="text-offwhite/70">Score</dt>
              <dd className="font-semibold text-purple">{topPick.score.toFixed(1)} / 10</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-offwhite/70">Best for</dt>
              <dd className="text-right text-offwhite/90">Living universe fans</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-offwhite/70">Free to try</dt>
              <dd className="text-right text-offwhite/90">During Free Fly events</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-offwhite/70">Player count</dt>
              <dd className="text-right text-offwhite/90">Persistent multiplayer</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-offwhite/70">Status</dt>
              <dd className="text-right text-offwhite/90">Alpha · ongoing</dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  );
}

function Rankings() {
  return (
    <section className="mx-auto mt-20 max-w-6xl px-4 sm:px-6">
      <header className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="font-display text-3xl font-semibold text-offwhite sm:text-4xl">
            The 2026 rankings
          </h2>
          <p className="mt-2 max-w-xl text-offwhite/75">
            Six space sims, ranked. Click into any title to compare features
            head-to-head.
          </p>
        </div>
        <Link
          href="/comparison"
          className="text-sm font-semibold text-purple hover:text-purple-dark"
        >
          See full comparison →
        </Link>
      </header>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {GAMES.map((g) => (
          <GameComparisonCard
            key={g.id}
            game={g}
            highlight={g.id === 'star-citizen'}
          />
        ))}
      </div>
    </section>
  );
}

function FullTable() {
  return (
    <section className="mx-auto mt-20 max-w-6xl px-4 sm:px-6">
      <header className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="font-display text-3xl font-semibold text-offwhite sm:text-4xl">
            Feature-by-feature comparison
          </h2>
          <p className="mt-2 max-w-xl text-offwhite/75">
            What each space sim actually delivers — not what the trailers
            promise.
          </p>
        </div>
      </header>
      <div className="mt-8">
        <ComparisonTable games={GAMES} />
      </div>
      <div className="mt-10">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-purple">
          Head-to-head matchups
        </h3>
        <div className="mt-3 flex flex-wrap gap-3">
          {GAMES.filter((g) => g.id !== 'star-citizen').map((g) => (
            <Link
              key={g.id}
              href={`/star-citizen-vs/${g.id}`}
              className="rounded-full border border-purple/40 px-4 py-2 text-sm text-offwhite/85 transition hover:border-purple hover:bg-purple/10"
            >
              Star Citizen vs {g.title} →
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyStarCitizen() {
  const reasons = [
    {
      title: 'A persistent, connected universe',
      body: "Star Citizen runs on static server meshing — multiple servers stitched into a shared region of space, so far more players share the same world than in a traditional instanced game. The fully unified single-shard universe is still in development, but what is live already dwarfs the genre.",
    },
    {
      title: 'Seamless atmospheric flight',
      body: 'You can fly from quantum travel through atmospheric entry to a city street or a moon cave without leaving your cockpit. Cloud Imperium calls this seamless transition a core design goal of the game — and it works in the live alpha.',
    },
    {
      title: 'Real careers, not just missions',
      body: 'Mining, hauling, salvage, medical, and racing each ship as live career loops in the alpha — with their own ships, gear, and skill curves.',
    },
    {
      title: 'A genuinely free trial — when an event is on',
      body: "Cloud Imperium runs Free Fly events a few times a year — typically Invictus Launch Week in May and the IAE in November, plus shorter promo windows. During an event, anyone with a free RSI account gets a loaner ship plus a daily rotating ship roster to try.",
    },
  ];
  return (
    <section className="mx-auto mt-24 max-w-6xl px-4 sm:px-6">
      <header className="max-w-3xl">
        <h2 className="font-display text-3xl font-semibold text-offwhite sm:text-4xl">
          Why Star Citizen stands alone
        </h2>
        <p className="mt-3 text-pretty text-offwhite/80">
          Other sims do parts of this well. Star Citizen is the only one
          building all of it in one persistent simulation — and the only one
          where you can drop in for free during a Free Fly to verify that
          claim yourself.
        </p>
      </header>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {reasons.map((r) => (
          <div
            key={r.title}
            className="rounded-2xl border border-greenMid bg-greenMid/30 p-6 transition hover:border-purple/40"
          >
            <h3 className="font-display text-lg font-semibold text-offwhite">
              {r.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-offwhite/80">
              {r.body}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-6 text-sm text-offwhite/80">
        Star Citizen runs Free Fly events where you can play for free for a limited time before committing. Check{' '}
        <a
          href="https://dayonecitizen.com"
          className="text-purple underline hover:opacity-80"
          target="_blank"
          rel="noopener noreferrer"
        >
          dayonecitizen.com
        </a>{' '}
        for the latest schedule and new player guides.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <SecondaryButton href="/star-citizen" external={false}>
          Read the full Star Citizen review
        </SecondaryButton>
      </div>

      <p className="mt-4 text-sm text-offwhite/80">
        Ready to try it?{' '}
        <a
          href="https://dayonecitizen.com"
          className="text-purple underline hover:opacity-80"
          target="_blank"
          rel="noopener"
        >
          DayOneCitizen.com
        </a>{' '}
        is the plain-English getting-started guide for new players.
      </p>
    </section>
  );
}

function FreeFlyCTA() {
  return (
    <section className="mx-auto mt-24 max-w-6xl px-4 sm:px-6">
      <div className="relative overflow-hidden rounded-3xl border border-purple/50 bg-gradient-to-br from-purple/15 via-greenMid to-deepGreen p-10 text-center sm:p-14">
        <div
          aria-hidden
          className="absolute -top-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-purple/30 blur-3xl"
        />
        <div className="relative">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-purple">
            Try it · No purchase required during a Free Fly event
          </p>
          <h2 className="mx-auto mt-3 max-w-2xl text-balance font-display text-3xl font-semibold text-offwhite sm:text-4xl">
            The fastest way to see if Star Citizen is for you is to fly it
            during a Free Fly.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-offwhite/80">
            Free Fly events run a few times a year — anyone with a free
            account gets a loaner ship plus a daily rotation of ships to test.
            Use the referral code{' '}
            <code className="rounded bg-deepGreen/60 px-2 py-0.5 text-purple">
              STAR-GCQJ-N6NC
            </code>{' '}
            on signup for the standard 50,000 aUEC enlistment bonus.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <CTAButton size="lg" />
            <SecondaryButton size="lg" href={FREE_FLY_URL}>
              See upcoming Free Fly events
            </SecondaryButton>
          </div>
          <p className="mt-5 text-xs text-muted">
            robertsspaceindustries.com/enlist?referral=STAR-GCQJ-N6NC
          </p>
        </div>
      </div>
    </section>
  );
}
