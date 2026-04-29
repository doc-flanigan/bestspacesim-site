import { CTAButton } from '@/components/CTAButton';
import { SecondaryButton } from '@/components/SecondaryButton';
import { REFERRAL_URL } from '@/lib/links';

export const metadata = {
  title: 'Star Citizen Free Fly 2026 — Play the Full Game Free',
  description:
    'Star Citizen Free Fly events let anyone play the full game with multiple ships at no cost. Here is what to expect, when they happen, and how to get the most from yours.',
  alternates: { canonical: '/free-fly' },
};

const points = [
  {
    h: 'What a Free Fly actually is',
    p: "It is the full game, opened to anyone with a free RSI account. Not a demo. Not a time-limited tutorial. You log into the same simulation paying players are in.",
  },
  {
    h: 'How long they last',
    p: 'Free Fly events run for roughly one to two weeks at a time. Cloud Imperium typically schedules several per year — Invictus, IAE, anniversary events, and shorter promo windows.',
  },
  {
    h: 'What ships you can fly',
    p: 'Each Free Fly rotates a fleet of free-to-fly ships. Recent events have unlocked everything from starter ships up through capital-class haulers and combat ships.',
  },
  {
    h: 'How to make the most of yours',
    p: 'Read a 5-minute beginner primer first. Bring a friend if you can — hauling, mining, and bounty hunting are dramatically more fun in a group. Save your first frustrations for the second day, after the controls click.',
  },
];

export default function FreeFlyPage() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-4 pt-12 sm:px-6 sm:pt-16">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-purple">
          Free Fly · 2026
        </p>
        <h1 className="mt-3 text-balance font-display text-4xl font-semibold leading-tight text-offwhite sm:text-5xl md:text-6xl">
          Star Citizen Free Fly — try the full game free
        </h1>
        <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-offwhite/80 sm:text-lg">
          The fastest way to know if Star Citizen is your kind of game is to
          actually play it. Free Fly events open the full simulation to
          anyone — no purchase, no demo cliff. Here is what to know.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <CTAButton size="lg" />
          <SecondaryButton size="lg" />
        </div>
      </section>

      <section className="mx-auto mt-12 grid max-w-4xl gap-4 px-4 sm:grid-cols-2 sm:px-6">
        {points.map((pt) => (
          <article
            key={pt.h}
            className="rounded-2xl border border-greenMid bg-greenMid/30 p-6"
          >
            <h2 className="font-display text-lg font-semibold text-offwhite">
              {pt.h}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-offwhite/80">
              {pt.p}
            </p>
          </article>
        ))}
      </section>

      <section className="mx-auto mt-16 max-w-4xl px-4 sm:px-6">
        <div className="rounded-3xl border border-purple/40 bg-gradient-to-br from-greenMid/80 to-deepGreen p-8 shadow-glow sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-purple">
            Use referral on signup
          </p>
          <h2 className="mt-2 font-display text-2xl font-semibold text-offwhite sm:text-3xl">
            STAR-GCQJ-N6NC = 5,000 in-game UEC starter wallet
          </h2>
          <p className="mt-3 text-offwhite/80">
            Free Fly accounts can apply the referral code on day one. It is a
            small but meaningful head start.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <CTAButton />
            <SecondaryButton />
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
      </section>
    </>
  );
}
