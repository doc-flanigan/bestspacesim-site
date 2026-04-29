import { CTAButton } from '@/components/CTAButton';
import { SecondaryButton } from '@/components/SecondaryButton';
import { REFERRAL_URL, FREE_FLY_URL } from '@/lib/links';

export const metadata = {
  title: 'Star Citizen Free Fly 2026 — Play the Live Game Free During Events',
  description:
    "Star Citizen Free Fly events open the live game to anyone with a free RSI account during scheduled windows — typically a loaner ship plus a daily ship rotation. Here's what to expect, when they happen, and how to make the most of yours.",
  alternates: { canonical: '/free-fly' },
};

const points = [
  {
    h: 'What a Free Fly actually is',
    p: "It is the live game, opened to anyone with a free RSI account during a scheduled event window. Not a demo, not a time-limited tutorial — you log into the same persistent universe paying players are in. Outside an event window, flight is gated to a starter pack.",
  },
  {
    h: 'How often they run',
    p: 'A few times a year, not constantly. Cloud Imperium anchors two annual events — Invictus Launch Week in May and the Intergalactic Aerospace Expo in November — and slots in shorter promo windows around them. Check freeflyevent.com for the live schedule.',
  },
  {
    h: 'How long each one lasts',
    p: 'Most Free Fly windows run between one and two weeks. The annual IAE typically runs the longest — close to two weeks of free access plus a rotating ship roster.',
  },
  {
    h: 'What ships you can fly',
    p: 'Cloud Imperium provides one loaner ship for the duration of the event, plus a daily rotating manufacturer schedule of additional ships you can test fly. The full ship roster is not all unlocked at once.',
  },
  {
    h: 'How to make the most of yours',
    p: 'Read a 5-minute beginner primer first. Bring a friend if you can — hauling, mining, and salvage are dramatically more fun in a group. Save your first frustrations for the second day, after the controls click.',
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
          Star Citizen Free Fly — try the live game during a scheduled event
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
            STAR-GCQJ-N6NC = 50,000 aUEC enlistment bonus
          </h2>
          <p className="mt-3 text-offwhite/80">
            Free Fly accounts can apply the referral code on day one for the
            standard 50,000 aUEC enlistment bonus — the in-game starter
            currency. Cloud Imperium also runs occasional referral bonus
            promotions (free ships or vehicles layered on top); those are
            event-specific and not guaranteed.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <CTAButton />
            <SecondaryButton href={FREE_FLY_URL}>
              See upcoming Free Fly events
            </SecondaryButton>
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
