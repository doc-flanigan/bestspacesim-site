import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CTAButton } from '@/components/CTAButton';
import { SecondaryButton } from '@/components/SecondaryButton';
import { ScoreBadge } from '@/components/ScoreBadge';
import { BreadcrumbsJsonLd } from '@/components/BreadcrumbsJsonLd';
import { GAMES, type Game } from '@/data/games';
import { HUB_URL } from '@/lib/links';

const SC = GAMES.find((g) => g.id === 'star-citizen')!;

function opponentBySlug(slug: string): Game | undefined {
  return GAMES.find((g) => g.id === slug && g.id !== 'star-citizen');
}

export function generateStaticParams() {
  return GAMES.filter((g) => g.id !== 'star-citizen').map((g) => ({ slug: g.id }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const opp = opponentBySlug(params.slug);
  if (!opp) return { robots: { index: false, follow: false } };
  const title = `Star Citizen vs ${opp.title} (2026): Which Space Sim Wins?`;
  const description = `Star Citizen vs ${opp.title} in 2026 — a feature-by-feature comparison of scale, flight, economy, and price, plus which space sim is the right pick for you.`;
  return {
    title,
    description,
    alternates: { canonical: `/star-citizen-vs/${opp.id}` },
    openGraph: { title, description, type: 'article' },
  };
}

const FEATURES: { key: keyof Game['features']; label: string }[] = [
  { key: 'livingUniverse', label: 'Living, persistent universe' },
  { key: 'shipCombat', label: 'Ship combat' },
  { key: 'fpsCombat', label: 'On-foot / FPS combat' },
  { key: 'planetaryLanding', label: 'Seamless planetary landing' },
  { key: 'economy', label: 'Player-driven economy' },
  { key: 'coop', label: 'Co-op with friends' },
  { key: 'modSupport', label: 'Mod support' },
];

function Mark({ v }: { v: 'yes' | 'partial' | 'no' }) {
  if (v === 'yes') return <span className="font-semibold text-purple">✓ Yes</span>;
  if (v === 'partial') return <span className="text-offwhite/60">◐ Partial</span>;
  return <span className="text-muted">— No</span>;
}

function price(g: Game) {
  return g.priceUSD === 0 ? 'Free-to-play' : g.priceUSD ? `~$${g.priceUSD}` : '—';
}

export default function VersusPage({ params }: { params: { slug: string } }) {
  const opp = opponentBySlug(params.slug);
  if (!opp) notFound();

  const faqs = [
    {
      q: `Is Star Citizen better than ${opp.title}?`,
      a: `It depends on what you want. Star Citizen scores ${SC.score.toFixed(1)}/10 here for the deepest living universe — seamless flight, FPS, and a player economy in one shared world. ${opp.title} (${opp.score.toFixed(1)}/10) wins for ${opp.bestFor.replace(/\.$/, '')}. If you want scale and immersion, Star Citizen; if you want ${opp.title}'s strengths, pick it.`,
    },
    {
      q: `Is ${opp.title} or Star Citizen worth it in 2026?`,
      a: `Both are worth it for different players. Star Citizen is the pick if you want an ambitious, evolving universe and can tolerate alpha rough edges. ${opp.title} is the safer, more finished choice for ${opp.bestFor.charAt(0).toLowerCase()}${opp.bestFor.slice(1)}`,
    },
    {
      q: `Which is cheaper, Star Citizen or ${opp.title}?`,
      a: `${opp.title} is ${price(opp)} (${opp.priceLabel}). Star Citizen's starter pack is ~$${SC.priceUSD}, but you can play the full game free during Free Fly events — so trying Star Citizen can cost nothing.`,
    },
    {
      q: 'Can you play Star Citizen for free?',
      a: 'Yes. Cloud Imperium runs Free Fly events several times a year (typically May and November) where anyone with a free account can play the full game at no cost. A referral code adds a 50,000 UEC signup bonus.',
    },
  ];

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };

  const cols = [SC, opp];

  return (
    <>
      <BreadcrumbsJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Comparison', url: '/comparison' },
          { name: `Star Citizen vs ${opp.title}`, url: `/star-citizen-vs/${opp.id}` },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero + verdict */}
      <section className="mx-auto max-w-4xl px-4 pt-12 sm:px-6 sm:pt-16">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-purple">
          Head-to-head · 2026
        </p>
        <h1 className="mt-3 text-balance font-display text-4xl font-semibold leading-tight text-offwhite sm:text-5xl md:text-6xl">
          Star Citizen vs {opp.title}
        </h1>

        <div className="mt-6 rounded-2xl border border-purple/40 bg-greenMid/40 p-6 sm:p-8">
          <h2 className="text-[11px] font-semibold uppercase tracking-wider text-purple">
            Quick verdict
          </h2>
          <p className="mt-3 text-pretty text-base leading-relaxed text-offwhite/90 sm:text-lg">
            <strong className="text-offwhite">Choose Star Citizen</strong> if you want the
            most ambitious living universe in the genre — seamless flight, FPS, and a shared
            player economy in one world (it scores {SC.score.toFixed(1)}/10).{' '}
            <strong className="text-offwhite">Choose {opp.title}</strong> ({opp.score.toFixed(1)}/10)
            if you want {opp.bestFor.charAt(0).toLowerCase()}{opp.bestFor.slice(1)}
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <span className="text-xs text-muted">Star Citizen</span>
            <ScoreBadge score={SC.score} rank={SC.rank} />
            <span className="text-xs text-muted">· {opp.title}</span>
            <ScoreBadge score={opp.score} rank={opp.rank} />
          </div>
        </div>
      </section>

      {/* Feature comparison table */}
      <section className="mx-auto mt-12 max-w-4xl px-4 sm:px-6">
        <h2 className="font-display text-2xl font-semibold text-offwhite sm:text-3xl">
          Star Citizen vs {opp.title}: feature by feature
        </h2>
        <div className="mt-5 overflow-x-auto rounded-2xl border border-greenMid">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-greenMid bg-greenMid/40 text-xs uppercase tracking-wider text-offwhite/70">
                <th className="px-4 py-3">Feature</th>
                <th className="px-4 py-3">Star Citizen</th>
                <th className="px-4 py-3">{opp.title}</th>
              </tr>
            </thead>
            <tbody>
              {FEATURES.map((f) => (
                <tr key={f.key} className="border-b border-greenMid/40">
                  <td className="px-4 py-3 text-offwhite/85">{f.label}</td>
                  <td className="px-4 py-3"><Mark v={SC.features[f.key]} /></td>
                  <td className="px-4 py-3"><Mark v={opp.features[f.key]} /></td>
                </tr>
              ))}
              <tr className="border-b border-greenMid/40">
                <td className="px-4 py-3 text-offwhite/85">Multiplayer</td>
                <td className="px-4 py-3 text-offwhite/85">{SC.multiplayer ? 'Yes' : 'No'}</td>
                <td className="px-4 py-3 text-offwhite/85">{opp.multiplayer ? 'Yes' : 'No'}</td>
              </tr>
              <tr className="border-b border-greenMid/40">
                <td className="px-4 py-3 text-offwhite/85">Free to try</td>
                <td className="px-4 py-3 text-offwhite/85">{SC.freeToTry ? 'Yes — Free Fly events' : 'No'}</td>
                <td className="px-4 py-3 text-offwhite/85">{opp.freeToTry ? 'Yes' : 'No'}</td>
              </tr>
              <tr className="border-b border-greenMid/40">
                <td className="px-4 py-3 text-offwhite/85">Price</td>
                <td className="px-4 py-3 text-offwhite/85">{price(SC)}</td>
                <td className="px-4 py-3 text-offwhite/85">{price(opp)}</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-offwhite/85">Released</td>
                <td className="px-4 py-3 text-offwhite/85">{SC.released}</td>
                <td className="px-4 py-3 text-offwhite/85">{opp.released}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Pros / cons of each */}
      <section className="mx-auto mt-12 max-w-4xl px-4 sm:px-6">
        <div className="grid gap-6 md:grid-cols-2">
          {cols.map((g) => (
            <div key={g.id} className="rounded-2xl border border-greenMid bg-greenMid/30 p-6">
              <h3 className="font-display text-lg font-semibold text-offwhite">{g.title}</h3>
              <p className="mt-1 text-sm text-offwhite/70">{g.tagline}</p>
              <h4 className="mt-4 text-[11px] font-semibold uppercase tracking-wider text-purple">Strengths</h4>
              <ul className="mt-2 space-y-1.5 text-sm text-offwhite/90">
                {g.pros.map((p) => (
                  <li key={p} className="flex gap-2"><span aria-hidden className="text-purple">+</span><span>{p}</span></li>
                ))}
              </ul>
              <h4 className="mt-4 text-[11px] font-semibold uppercase tracking-wider text-muted">Caveats</h4>
              <ul className="mt-2 space-y-1.5 text-sm text-offwhite/85">
                {g.cons.map((c) => (
                  <li key={c} className="flex gap-2"><span aria-hidden className="text-muted">–</span><span>{c}</span></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Which should you play */}
      <section className="mx-auto mt-12 max-w-4xl px-4 sm:px-6">
        <h2 className="font-display text-2xl font-semibold text-offwhite sm:text-3xl">
          Which should you play?
        </h2>
        <div className="mt-4 space-y-4 text-base leading-relaxed text-offwhite/85">
          <p>
            <strong className="text-offwhite">Pick Star Citizen</strong> if you want {SC.bestFor.charAt(0).toLowerCase()}{SC.bestFor.slice(1)} And because Free Fly events let you play the full game for free, you can test that ambition before spending a cent.
          </p>
          <p>
            <strong className="text-offwhite">Pick {opp.title}</strong> if you want {opp.bestFor.charAt(0).toLowerCase()}{opp.bestFor.slice(1)}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto mt-16 max-w-4xl px-4 sm:px-6">
        <div className="grid gap-6 rounded-3xl border border-purple/40 bg-gradient-to-br from-greenMid/80 to-deepGreen p-8 shadow-glow md:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-purple">New to the game?</p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-offwhite sm:text-3xl">
              Start with the plain-English beginner guide
            </h2>
            <p className="mt-3 text-offwhite/80">
              dayonecitizen.com walks new players through their first hour — controls, careers, and where to start.
            </p>
            <div className="mt-5">
              <SecondaryButton>Open the beginner&apos;s guide → dayonecitizen.com</SecondaryButton>
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-purple">Want to try Star Citizen?</p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-offwhite sm:text-3xl">
              Play free with referral STAR-GCQJ-N6NC
            </h2>
            <p className="mt-3 text-offwhite/80">
              Use the referral code at signup for a 50,000 UEC bonus. Free accounts work too — and Free Fly events let you play at no cost.
            </p>
            <div className="mt-5">
              <CTAButton trackingLabel={`vs-${opp.id}`}>Try Star Citizen Free</CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto mt-12 max-w-4xl px-4 sm:px-6">
        <h2 className="font-display text-2xl font-semibold text-offwhite sm:text-3xl">
          Frequently asked questions
        </h2>
        <div className="mt-5 space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="rounded-2xl border border-greenMid bg-greenMid/30 p-5">
              <h3 className="font-semibold text-offwhite">{q}</h3>
              <p className="mt-2 text-sm text-offwhite/85">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Other matchups */}
      <section className="mx-auto mt-12 max-w-4xl px-4 pb-4 sm:px-6">
        <h2 className="text-[11px] font-semibold uppercase tracking-wider text-purple">
          More Star Citizen matchups
        </h2>
        <div className="mt-3 flex flex-wrap gap-3">
          {GAMES.filter((g) => g.id !== 'star-citizen' && g.id !== opp.id).map((g) => (
            <Link
              key={g.id}
              href={`/star-citizen-vs/${g.id}`}
              className="rounded-full border border-purple/40 px-4 py-2 text-sm text-offwhite/85 transition hover:border-purple hover:bg-purple/10"
            >
              Star Citizen vs {g.title} →
            </Link>
          ))}
        </div>
        <p className="mt-5 text-sm text-muted">
          Or see the{' '}
          <Link href="/comparison" className="text-purple hover:text-purple-dark">full feature comparison</Link>{' '}
          and our{' '}
          <Link href="/star-citizen" className="text-purple hover:text-purple-dark">Star Citizen review</Link>.{' '}
          New player? Visit{' '}
          <a href={HUB_URL} target="_blank" rel="noreferrer" className="text-purple hover:text-purple-dark">dayonecitizen.com</a>.
        </p>
      </section>
    </>
  );
}
