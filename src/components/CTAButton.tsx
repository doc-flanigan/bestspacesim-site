'use client';
import { useState, useEffect } from 'react';
import { getRotatedReferralUrl, FALLBACK_REFERRAL_URL } from '@/lib/referral-rotator';

type Props = {
  children?: React.ReactNode;
  className?: string;
  size?: 'md' | 'lg';
  trackingLabel?: string;
};

export function CTAButton({
  children = 'Try Star Citizen Free During Free Fly',
  className = '',
  size = 'md',
  trackingLabel,
}: Props) {
  const [href, setHref] = useState(FALLBACK_REFERRAL_URL);
  useEffect(() => { setHref(getRotatedReferralUrl()); }, []);

  const sizeCls =
    size === 'lg'
      ? 'px-7 py-4 text-base sm:text-lg'
      : 'px-5 py-3 text-sm sm:text-base';

  const handleClick = () => {
    const code = href.split('referral=')[1] ?? ''
    fetch('/api/log', {
      method: 'POST',
      keepalive: true,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        label: trackingLabel ?? 'unknown',
        referralCode: code,
        page: window.location.pathname,
        site: window.location.hostname,
      }),
    }).catch(() => {})
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`group inline-flex items-center justify-center gap-2 rounded-full bg-purple ${sizeCls} font-semibold text-white shadow-glow transition hover:bg-purple-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-purple focus-visible:ring-offset-2 focus-visible:ring-offset-deepGreen ${className}`}
      onClick={handleClick}
    >
      <span>{children}</span>
      <span aria-hidden className="transition group-hover:translate-x-0.5">
        →
      </span>
    </a>
  );
}
