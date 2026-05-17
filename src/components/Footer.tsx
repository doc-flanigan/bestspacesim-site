import Link from 'next/link';
import { HUB_URL, REFERRAL_URL } from '@/lib/links';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-greenMid/60 bg-deepGreen/60">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span
              aria-hidden
              className="inline-block h-2.5 w-2.5 rounded-full bg-purple shadow-[0_0_12px_rgba(155,89,255,0.9)]"
            />
            <span className="font-display text-lg font-semibold">
              bestspacesim<span className="text-purple">.com</span>
            </span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-muted">
            Independent rankings of the best space simulation games of 2026.
            Part of the dayonecitizen.com fan-site network.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-offwhite/80">
            Explore
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>
              <Link href="/" className="hover:text-offwhite">
                Top picks
              </Link>
            </li>
            <li>
              <Link href="/comparison" className="hover:text-offwhite">
                Full comparison
              </Link>
            </li>
            <li>
              <Link href="/star-citizen" className="hover:text-offwhite">
                Star Citizen review
              </Link>
            </li>
            <li>
              <Link href="/free-fly" className="hover:text-offwhite">
                Free Fly events
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-offwhite/80">
            New to Star Citizen?
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>
              <a
                href={HUB_URL}
                target="_blank"
                rel="noreferrer"
                className="hover:text-offwhite"
              >
                Plain-English beginner guide → dayonecitizen.com
              </a>
            </li>
            <li>
              <a
                href={REFERRAL_URL}
                target="_blank"
                rel="noreferrer"
                className="hover:text-offwhite"
              >
                Sign up with referral STAR-GCQJ-N6NC
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-greenMid/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © {year} bestspacesim.com · An unofficial Star Citizen fan site by
            Doc_Flanigan.
          </p>
          <p className="max-w-md text-right">
            Not affiliated with Cloud Imperium Games or any other studio. All
            game names and trademarks belong to their respective owners.{' '}
            Affiliate disclosure: This site uses Star Citizen referral links.
            Referral code owners may receive an in-game bonus if you sign up.
            Your rewards are not affected.
          </p>
        </div>
      </div>
    </footer>
  );
}
