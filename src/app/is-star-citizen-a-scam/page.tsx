import Link from 'next/link';
import { CTAButton } from '@/components/CTAButton';
import { SecondaryButton } from '@/components/SecondaryButton';
import { FREE_FLY_URL, SITE_URL } from '@/lib/links';
import { BreadcrumbsJsonLd } from '@/components/BreadcrumbsJsonLd';
import { PageSources } from '@/components/PageSources';
import { ScreenshotGrid, type Screenshot } from '@/components/ScreenshotFigure';

export const metadata = {
  title: 'Is Star Citizen a Scam? An Honest 2026 Answer',
  description:
    'No — Star Citizen is not a scam. It is a real, playable game with $1B in disclosed funding. But 13 years in alpha earns fair criticism. The honest breakdown.',
  alternates: { canonical: '/is-star-citizen-a-scam' },
};

type SectionBlock = string | { images: Screenshot[] };

const skepticCase: { heading: string; body: SectionBlock[] }[] = [
  {
    heading: 'The case for the skeptics — steelmanned',
    body: [
      'Development started with a Kickstarter in 2012. Fourteen years later the game is still in alpha — the live build is Alpha 4.9 — and along the way CIG has missed publicly floated dates, including early ones for Squadron 42. If your definition of a finished product is "shipped 1.0," Star Citizen has not met it, and no amount of enthusiasm changes that.',
      'The spending model invites suspicion too. The pledge store sells ships for real money, some for hundreds of dollars, and the project has raised over $1 billion doing it. People have spent serious money on a game with no announced finish line. Those are the facts the "scam" argument is built on, and they are real facts — we are not going to pretend otherwise.',
    ],
  },
  {
    heading: 'The case against "scam"',
    body: [
      'A scam takes your money and gives you nothing. Star Citizen takes your money and gives you a playable game, today: Alpha 4.9 has been live since July 15, 2026. The funding is not hidden either — the RSI funding tracker publicly discloses money raised in real time, and it crossed $1 billion on May 24, 2026, from over 6.5 million backer accounts. Whatever you think of the pace, the books are open.',
      {
        images: [
          {
            src: '/images/screenshots/rsi-launcher-live-build.jpg',
            alt: 'The RSI Launcher with a live build of Star Citizen installed and ready to launch',
            caption:
              'The RSI Launcher on a live build — the game downloads, installs, and launches today.',
            width: 1071,
            height: 766,
          },
        ],
      },
      'Squadron 42, the single-player campaign skeptics long called vaporware, is content complete — per the May 2026 Letter From The Chairman, all chapters are fully playable from beginning to end at over forty hours, with polish and bug fixing remaining, and the stated goal is to "push Squadron 42 toward Beta and release in 2026." That 2026 window was first announced at CitizenCon 2954 in October 2024.',
      'The honest asterisk: Star Citizen 1.0 — the finished persistent universe — has no official release date. The 2027-2028 figures you may have read come from press interviews, not from an official CIG announcement. Slow and open is not the same thing as fraudulent, but "when is 1.0" genuinely has no answer yet.',
    ],
  },
  {
    heading: 'Is it pay-to-win?',
    body: [
      'Partly a fair worry, so here it is straight. Yes, ships are buyable with real money on the pledge store, including big ones. But all flyable ships are also earnable in-game with aUEC, the currency you make by playing — buying with cash purchases time, not exclusive power, and in most encounters skill matters more than hull size.',
      'The record is not spotless, though. In the 2025-26 "flight blades" controversy, CIG sold a performance-affecting item that at launch was available for cash only, and the community pushed back hard — gaming press including TechSpot covered the backlash. If cash-only advantage items became the norm, the pay-to-win criticism would land. It is a real tension in the funding model, and pretending it does not exist is how you end up sounding like a sales page.',
    ],
  },
  {
    heading: 'What $45 actually gets you',
    body: [
      'The minimum entry is the $45 Citizen Starter Pack: an Aurora Mk II starter ship, 10,000 starting aUEC, and access to the live game — a one-time purchase with no subscription. Everything beyond that is optional. Nobody needs a $600 ship to play; the whales fund the development, and the $45 player flies in the same universe.',
      {
        images: [
          {
            src: '/images/screenshots/getting-started-game-package-starter-packs-list.jpg',
            alt: 'RSI store list of starter Game Packages showing the $45 Citizen Starter Pack alongside other packs',
            caption:
              'The starter Game Packages on the RSI store — entry starts at $45, one-time, no subscription.',
            width: 1200,
            height: 561,
          },
        ],
      },
      'One distinction worth knowing: aUEC is the in-game money you earn and spend in the alpha. The separate 50,000 UEC referral signup bonus is credited when you create your account with any referral code — no purchase required. And before spending anything, you can try the full game free during a Free Fly event.',
    ],
  },
];

const faqs = [
  {
    q: 'Is Star Citizen a scam?',
    a: 'No. Star Citizen is a real, playable game — Alpha 4.9 has been live since July 15, 2026 — with over $1 billion in publicly disclosed funding on the RSI tracker and a content-complete single-player campaign in Squadron 42. It is also a project that has been in alpha for roughly 13 years, and criticisms about pace, missed dates, and ship prices are fair. Slow and expensive is not the same as fraudulent.',
  },
  {
    q: 'Will Star Citizen ever be finished?',
    a: 'Squadron 42, the single-player campaign, is content complete — all chapters playable at over forty hours — with an official goal to push toward Beta and release in 2026. Star Citizen 1.0, the finished persistent universe, has no official release date; CIG has not announced one. Skepticism about the timeline is reasonable; the claim that nothing will ever ship is contradicted by the playable game that exists today.',
  },
  {
    q: 'When is Star Citizen 1.0 coming out?',
    a: 'There is no official release date for Star Citizen 1.0. The 2027-2028 estimates circulating online come from press interviews, not from an official CIG announcement, and should be treated as informal remarks rather than commitments.',
  },
  {
    q: 'Is Star Citizen pay-to-win?',
    a: 'Ships can be bought with real money, but all flyable ships are also earnable in-game with aUEC, so cash buys time rather than exclusive power. The fair counterpoint: the 2025-26 flight-blades controversy involved a performance item sold cash-only at launch, which drew significant community backlash and press coverage. It is a real tension in the funding model, not a settled question.',
  },
  {
    q: 'How much money has Star Citizen raised?',
    a: 'Star Citizen crossed $1 billion in total funding on May 24, 2026, from over 6.5 million backer accounts, per the public RSI funding tracker. Note that backers means registered RSI accounts, not unique paying customers — and no official active-player count exists.',
  },
];

export default function ScamPage() {
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Is Star Citizen a Scam? An Honest 2026 Answer',
    description:
      'Not a scam — a real, playable game with $1B in publicly disclosed funding and a content-complete SQ42 — but 13 years in alpha with real, fair criticisms.',
    author: { '@type': 'Person', name: 'Doc_Flanigan' },
    mainEntityOfPage: `${SITE_URL}/is-star-citizen-a-scam`,
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
          { name: 'Is Star Citizen a Scam?', url: '/is-star-citizen-a-scam' },
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
          Skeptic&apos;s guide · 2026
        </p>
        <h1 className="mt-3 text-balance font-display text-4xl font-semibold leading-tight text-offwhite sm:text-5xl md:text-6xl">
          Is Star Citizen a scam?
        </h1>
        <p className="mt-4 text-sm text-muted">
          By <span className="text-offwhite/80">Doc_Flanigan</span> · Every figure sourced
          against official CIG publications below
        </p>
        <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-offwhite/85 sm:text-lg">
          <strong className="text-offwhite">
            No — Star Citizen is not a scam. It is a real, playable game with $1 billion
            in publicly disclosed funding and a content-complete single-player campaign.
            It is also a project that has been in alpha for roughly 13 years, and the
            skeptics have real, fair criticisms.
          </strong>{' '}
          This page makes both cases properly — the strongest version of the scam
          argument, then the evidence against it — with every figure sourced.
        </p>
      </section>

      <section className="mx-auto mt-12 grid max-w-4xl gap-10 px-4 sm:px-6">
        {skepticCase.map((s) => (
          <article key={s.heading}>
            <h2 className="font-display text-2xl font-semibold text-offwhite sm:text-3xl">
              {s.heading}
            </h2>
            <div className="mt-3 space-y-4 text-base leading-relaxed text-offwhite/85">
              {s.body.map((block, i) =>
                typeof block === 'string' ? (
                  <p key={i}>{block}</p>
                ) : (
                  <ScreenshotGrid key={i} images={block.images} />
                )
              )}
            </div>
          </article>
        ))}
      </section>

      <section className="mx-auto mt-12 max-w-4xl px-4 sm:px-6">
        <div className="rounded-2xl border border-purple/40 bg-greenMid/40 p-6 sm:p-8">
          <h2 className="font-display text-2xl font-semibold text-offwhite sm:text-3xl">
            Who runs this site
          </h2>
          <div className="mt-3 space-y-4 text-base leading-relaxed text-offwhite/85">
            <p>
              A page about scams should name its author, so: this site is run by{' '}
              <strong className="text-offwhite">Doc_Flanigan</strong>, a Star Citizen
              community member — not an anonymous content farm, and not a gold seller.
              There is nothing for sale here: no in-game currency, no accounts, no
              "boosting" services.
            </p>
            <p>
              The one interest to disclose: this site carries the owner&apos;s referral
              code, <span className="font-mono text-offwhite">STAR-GCQJ-N6NC</span>. If
              you use it when creating an RSI account, the site owner receives an in-game
              reward from CIG, and you receive the standard 50,000 UEC signup bonus you
              would get with any referral code — it costs you nothing and requires no
              purchase. That code is verified live monthly with dated receipts, and it is
              the only referral code used anywhere on this network.
            </p>
          </div>
        </div>
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
            Verify it yourself — for free
          </h2>
          <p className="mt-3 max-w-2xl text-offwhite/80">
            The strongest answer to "is it a scam" is playing it without spending a
            dollar.{' '}
            <a href={FREE_FLY_URL} className="text-purple hover:text-purple-dark">
              freeflyevent.com tracks the next Free Fly window
            </a>
            , when the live game is open on a free account. If you have already decided,
            our{' '}
            <Link
              href="/is-star-citizen-worth-it"
              className="text-purple hover:text-purple-dark"
            >
              worth-it verdict
            </Link>{' '}
            and{' '}
            <Link href="/star-citizen" className="text-purple hover:text-purple-dark">
              full review
            </Link>{' '}
            cover who should buy and who should wait.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <CTAButton trackingLabel="scam-page-cta">Try Star Citizen Free</CTAButton>
            <SecondaryButton>Star Citizen Beginner&apos;s Guide</SecondaryButton>
          </div>
          <p className="mt-3 text-xs text-muted">
            robertsspaceindustries.com/enlist?referral=STAR-GCQJ-N6NC
          </p>
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-4xl px-4 pb-4 text-sm text-muted sm:px-6">
        <p>
          Wondering how many people actually play?{' '}
          <Link
            href="/star-citizen-player-count"
            className="text-purple hover:text-purple-dark"
          >
            There is no official player count — here is what the real numbers say →
          </Link>
        </p>
      </section>

      <PageSources route="/is-star-citizen-a-scam" />
    </>
  );
}
