'use client';

// Foundation Festival 2026 Free Fly (RSI comm-link 21211). CIG published no
// end-of-day time — end-of-day Aug 10 UTC used. Update both dates when the
// next Free Fly is announced; the banner hides itself outside the window.
const EVENT_START = new Date('2026-07-29T16:00:00Z');
const EVENT_END = new Date('2026-08-10T23:59:00Z');

const END_LABEL = EVENT_END.toLocaleDateString('en-US', {
  month: 'long',
  day: 'numeric',
  timeZone: 'UTC',
});

export function FreeFlyBanner() {
  const now = new Date();
  if (now < EVENT_START || now >= EVENT_END) return null;

  return (
    <div style={{ backgroundColor: '#ff5500' }} className="text-white">
      <a
        href="https://freeflyevent.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 px-4 py-2 text-center text-xs font-semibold tracking-wide hover:underline sm:text-sm"
        data-track="free-fly-banner"
      >
        <span aria-hidden>🚀</span>
        <span>
          <span className="hidden sm:inline">
            Star Citizen Free Fly is live — play free until {END_LABEL}, no purchase needed.{' '}
          </span>
          <span className="sm:hidden">Free Fly live — play Star Citizen free until {END_LABEL}. </span>
          Details at freeflyevent.com
        </span>
        <span aria-hidden>↗</span>
      </a>
    </div>
  );
}
