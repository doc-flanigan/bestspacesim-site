import Link from 'next/link';
import Image from 'next/image';
import { CTAButton } from '@/components/CTAButton';
import { SecondaryButton } from '@/components/SecondaryButton';
import { ScoreBadge } from '@/components/ScoreBadge';
import { GAMES } from '@/data/games';
import { HUB_URL, REFERRAL_URL } from '@/lib/links';

const sc = GAMES.find((g) => g.id === 'star-citizen')!;

export const metadata = {
  title: 'Star Citizen Review 2026 — Is It Worth It?',
  description:
    'A plain-English Star Citizen review for 2026. What works, what is rough, who it is for — and how to try the full game free during Free Fly.',
  alternates: { canonical: '/star-citizen' },
};

const sections = [
  {
    heading: 'What is Star Citizen, really?',
    body: [
      "Star Citizen is a first-person space simulation built around a single, shared universe. There is no separate matchmaking lobby — every player is in the same simulated solar system. You can fly a ship out of a hangar, take it to orbit, jump to another planet, land in a city, walk into a bar, and meet another human player who flew there themselves.",
      'It has been in open development since 2012 and is funded by player pledges, which is why it is the highest-funded crowdfunded game in history. It is still officially in alpha — that matters, and we will not pretend otherwise.',
    ],
  },
  {
    heading: 'What the simulation actually does',
    body: [
      "The headline feature is seamless flight. Other space sims load you into a planet. Star Citizen does not. Quantum travel, atmospheric entry, city flyovers, surface driving — it all happens without a loading screen.",
      "Underneath that, careers do real work. Mining is a full minigame with prospecting, extraction, and refining. Hauling involves contracts, cargo manifests, and risk of pirate interception by other players. Salvage strips ships down piece by piece. Medical players run rescue ops. Bounty hunters earn off the same target list as everyone else.",
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
    heading: 'Try it free before you spend a dollar',
    body: [
      "The most important thing to know in 2026: Cloud Imperium runs Free Fly events several times a year. During a Free Fly the entire game is open to anyone with an account — multiple ships, full servers, the whole simulation.",
      "If the idea of Star Citizen interests you at all, wait for a Free Fly and try it. No demo, no time-gated tutorial. You either fall in love with it or you do not.",
    ],
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
    name: 'Star Citizen Review 2026 — Is It Worth It?',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewJsonLd) }}
      />

      <section className="mx-auto max-w-4xl px-4 pt-12 sm:px-6 sm:pt-16">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-purple">
          Star Citizen · 2026 review
        </p>
        <h1 className="mt-3 text-balance font-display text-4xl font-semibold leading-tight text-offwhite sm:text-5xl md:text-6xl">
          Star Citizen Review 2026 — is it worth it?
        </h1>
        <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-offwhite/80 sm:text-lg">
          A plain-English review for the people Googling "is Star Citizen
          worth it" in 2026. We cover what it actually does, what is still
          rough, who it is for — and how to play the full game free during a
          Free Fly event.
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
            alt="Star Citizen — wide shot of a ship over a planet's atmosphere"
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
              Our sister site o7citizen.com walks new players through their
              first hour — controls, careers, where to start, and how to ask
              for help without getting flamed.
            </p>
            <div className="mt-5">
              <SecondaryButton>
                Open the beginner's guide → o7citizen.com
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
              Use the referral code on signup for 5,000 in-game UEC — a
              meaningful starter wallet. Free Fly accounts work too; you can
              add the code on day one.
            </p>
            <div className="mt-5">
              <CTAButton>Try Star Citizen Free</CTAButton>
            </div>
            <p className="mt-3 text-xs text-muted">
              <a
                href={REFERRAL_URL}
                target="_blank"
                rel="noreferrer"
                className="underline-offset-4 hover:underline"
              >
                robertsspaceindustries.com/enlist?referral=STAR-GCQJ-N6NC
              </a>
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
          Heading to{' '}
          <a
            href={HUB_URL}
            target="_blank"
            rel="noreferrer"
            className="text-purple hover:text-purple-dark"
          >
            o7citizen.com
          </a>{' '}
          for the beginner network instead.
        </p>
      </section>
    </>
  );
}
