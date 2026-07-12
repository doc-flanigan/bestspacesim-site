import Link from 'next/link';
import Image from 'next/image';
import { CTAButton } from '@/components/CTAButton';
import { SecondaryButton } from '@/components/SecondaryButton';
import { ScoreBadge } from '@/components/ScoreBadge';
import { GAMES } from '@/data/games';
import { HUB_URL, FREE_FLY_URL } from '@/lib/links';
import { BreadcrumbsJsonLd } from '@/components/BreadcrumbsJsonLd';
import { PageSources } from '@/components/PageSources';

const sc = GAMES.find((g) => g.id === 'star-citizen')!;

export const metadata = {
  title: 'Star Citizen Review 2026 — Scored 9.4/10, Alpha Caveats Included',
  description:
    'Our full Star Citizen review for 2026: what the simulation actually does, what is still rough, who it is for — scored 9.4/10, with every alpha caveat stated plainly.',
  alternates: { canonical: '/star-citizen' },
};

const sections = [
  {
    heading: 'What is Star Citizen, really?',
    body: [
      "Star Citizen is a first-person space simulation built around a shared persistent universe. Cloud Imperium has rolled out static server meshing, which lets many more players share the same region of space than traditional instanced games allow — so when you fly a ship out of a hangar, take it to orbit, jump to another planet, and walk into a bar, the human you meet there flew there themselves.",
      'Crowdfunding launched in October 2012, and the game has been in open development since — public alpha testing began in 2014. On May 24, 2026, it crossed $1 billion raised; no other crowdfunded project comes close. The current live build is Alpha 4.8 — that matters, and we will not pretend otherwise.',
    ],
  },
  {
    heading: 'What the simulation actually does',
    body: [
      "The headline feature is seamless atmospheric flight. Quantum travel, atmospheric entry, city flyovers, surface driving — Cloud Imperium describes it as a single uninterrupted flight, and that flight is live in the current alpha.",
      "Underneath that, careers do real work. Mining is a full minigame with prospecting, extraction, and refining. Hauling involves contracts, physicalised cargo, and risk of pirate interception by other players. Salvage strips ships down piece by piece. Medical players run rescue ops with dedicated medical ships. Time-trial racing has its own circuits and ships.",
    ],
  },
  {
    heading: 'What is rough',
    body: [
      "It is alpha software. You will hit bugs. Server performance can dip in busy zones. Some careers are still half-built. Quality-of-life features that other games take for granted are missing or in flux.",
      "If those things would ruin your week, wait. If you can roll with a game that improves every patch, the rough edges are part of the deal — and the upside is being inside the simulation while it is being built.",
    ],
  },
  {
    heading: 'Who it is for',
    body: [
      "Players who want a real living universe over a polished singleplayer arc. Players who like flight sims, EVE-style economies, and immersive sims. Players who would rather learn a complex game than be hand-held through a simple one.",
      "It is not for players who want a tight 30-hour story, or who quit if a server hiccups. There is no shame in that — it just means Starfield or No Man's Sky may suit you better.",
    ],
  },
  {
    heading: 'Try it free during a Free Fly event',
    body: [
      "Cloud Imperium runs Free Fly events a few times a year — typically Invictus Launch Week in May and the Intergalactic Aerospace Expo in November, plus shorter promo windows in between. During an event, anyone with a free RSI account can play the game's online world: a loaner ship for the duration of the event, plus a daily rotation of additional ships to test fly.",
      "If the idea of Star Citizen interests you at all, wait for the next Free Fly and try it. No demo, no time-gated tutorial. Outside an event window, you can still create a free account and look around the website — but actual flight is gated to a starter pack purchase or a Free Fly window.",
    ],
  },
];

const faqs = [
  {
    q: 'Is Star Citizen worth it in 2026?',
    a: 'Yes for players who want a living universe and can tolerate alpha bugs; no for players who want a polished, finished story. We score it 9.4/10 — the highest of the six space sims we rank — with the alpha caveats stated plainly in this review.',
  },
  {
    q: 'Is Star Citizen pay-to-win?',
    a: 'CIG’s stated policy is that ships bought with real money are also earnable in-game with aUEC, though not every pledge ship is purchasable in-game yet — and skill matters more than hull size in most encounters. The store sells time, not exclusive power, though the line is a fair debate in the community.',
  },
  {
    q: 'Can I play Star Citizen for free?',
    a: 'During a Free Fly event, yes — anyone with a free RSI account can play the live game at no cost. Cloud Imperium runs these several times a year, typically around Invictus in May and IAE in November.',
  },
];

export default function StarCitizenPage() {
  const reviewJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'VideoGame',
      name: 'Star Citizen',
      applicationCategory: 'Game',
      operatingSystem: 'Windows',
      publisher: 'Cloud Imperium Games',
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: sc.score,
      bestRating: 10,
      worstRating: 0,
    },
    author: { '@type': 'Person', name: 'Doc_Flanigan' },
    name: 'Star Citizen Review 2026 — Scored 9.4/10, Alpha Caveats Included',
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
          { name: 'Star Citizen', url: '/star-citizen' },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="mx-auto max-w-4xl px-4 pt-12 sm:px-6 sm:pt-16">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-purple">
          Star Citizen · 2026 review
        </p>
        <h1 className="mt-3 text-balance font-display text-4xl font-semibold leading-tight text-offwhite sm:text-5xl md:text-6xl">
          Star Citizen Review 2026 — is it worth it?
        </h1>
        <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-offwhite/80 sm:text-lg">
          <strong className="text-offwhite">Verdict: 9.4/10.</strong> Star
          Citizen is the deepest living-universe space sim available in 2026 —
          seamless planet-to-space flight, a single-shard persistent world, and
          careers that do real work — and it is still alpha software with the
          bugs to match. This review covers what it actually does, what is
          rough, and who it is for.{' '}
          <Link
            href="/is-star-citizen-worth-it"
            className="text-purple hover:text-purple-dark"
          >
            Want the short worth-it answer? Start here →
          </Link>
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-3">
          <ScoreBadge score={sc.score} rank={sc.rank} />
          <span className="text-xs text-muted">
            {sc.developer} · {sc.released}
          </span>
        </div>

        <div className="relative mt-8 aspect-[16/8] overflow-hidden rounded-3xl border border-greenMid shadow-glow">
          <Image
            src="/images/hero/hero-01.jpg"
            alt="Star Citizen — a capital ship in orbit above a planet"
            fill
            sizes="(max-width: 1024px) 100vw, 1100px"
            className="object-cover"
            priority
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-deepGreen via-deepGreen/20 to-transparent" />
        </div>
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
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-purple/40 bg-greenMid/40 p-6">
            <h3 className="text-[11px] font-semibold uppercase tracking-wider text-purple">
              Strengths
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-offwhite/90">
              {sc.pros.map((p) => (
                <li key={p} className="flex gap-2">
                  <span aria-hidden className="text-purple">+</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-greenMid bg-greenMid/30 p-6">
            <h3 className="text-[11px] font-semibold uppercase tracking-wider text-muted">
              Caveats
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-offwhite/85">
              {sc.cons.map((c) => (
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

      <section className="mx-auto mt-16 max-w-4xl px-4 sm:px-6">
        <div className="grid gap-6 rounded-3xl border border-purple/40 bg-gradient-to-br from-greenMid/80 to-deepGreen p-8 shadow-glow md:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-purple">
              New to the game?
            </p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-offwhite sm:text-3xl">
              Start with the plain-English beginner guide
            </h2>
            <p className="mt-3 text-offwhite/80">
              Our sister site dayonecitizen.com walks new players through their
              first hour — controls, careers, where to start, and how to ask
              for help without getting flamed.
            </p>
            <div className="mt-5">
              <SecondaryButton>
                Open the beginner's guide → dayonecitizen.com
              </SecondaryButton>
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-purple">
              Already convinced?
            </p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-offwhite sm:text-3xl">
              Sign up with referral STAR-GCQJ-N6NC
            </h2>
            <p className="mt-3 text-offwhite/80">
              Use the referral code on signup for the standard 50,000 UEC
              enlistment bonus — a meaningful starter wallet. Free accounts
              work too; you can add the code on day one.
            </p>
            <div className="mt-5">
              <CTAButton trackingLabel="star-citizen-signup">Try Star Citizen Free</CTAButton>
            </div>
            <p className="mt-3 text-xs text-muted">
              robertsspaceindustries.com/enlist?referral=STAR-GCQJ-N6NC
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-4xl px-4 pb-4 text-sm text-muted sm:px-6">
        <p>
          Want to compare Star Citizen against the rest of the genre?{' '}
          <Link href="/comparison" className="text-purple hover:text-purple-dark">
            See the full feature-by-feature comparison →
          </Link>
        </p>
        <p className="mt-2">
          Want to try it before you buy?{' '}
          <a
            href={FREE_FLY_URL}
            className="text-purple hover:text-purple-dark"
          >
            freeflyevent.com
          </a>{' '}
          tracks the next Free Fly window, when the live game is playable free.
        </p>
        <p className="mt-2">
          Heard it called a scam, or wondering how many people actually play?
          We answer both without flinching:{' '}
          <Link
            href="/is-star-citizen-a-scam"
            className="text-purple hover:text-purple-dark"
          >
            is Star Citizen a scam?
          </Link>{' '}
          and{' '}
          <Link
            href="/star-citizen-player-count"
            className="text-purple hover:text-purple-dark"
          >
            the truth about the player count
          </Link>
          .
        </p>
        <p className="mt-2">
          Brand new to the game?{' '}
          <a
            href={HUB_URL}
            target="_blank"
            rel="noreferrer"
            className="text-purple hover:text-purple-dark"
          >
            dayonecitizen.com
          </a>{' '}
          walks you through your first hour in plain English.
        </p>
      </section>

      <PageSources route="/star-citizen" />
    </>
  );
}
