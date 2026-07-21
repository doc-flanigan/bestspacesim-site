'use client';
import { useState, useEffect, useRef } from 'react';
import { getRotatedReferralUrl, FALLBACK_REFERRAL_URL } from '@/lib/referral-rotator';

const CTA_VARIANT_KEY = 'cta_variant';

/**
 * Sticky visitor-level A/B assignment. Reads localStorage; if unset, assigns
 * 'a' or 'b' at random and persists so the same visitor sees the same variant
 * on every button and every visit. Client-only — call from an effect.
 */
export function getCtaVariant(): 'a' | 'b' {
  if (typeof window === 'undefined') return 'a';
  try {
    const stored = window.localStorage.getItem(CTA_VARIANT_KEY);
    if (stored === 'a' || stored === 'b') return stored;
    const assigned = Math.random() < 0.5 ? 'a' : 'b';
    window.localStorage.setItem(CTA_VARIANT_KEY, assigned);
    return assigned;
  } catch {
    return 'a'; // localStorage unavailable (private mode etc.)
  }
}

type Props = {
  children?: React.ReactNode;
  className?: string;
  size?: 'md' | 'lg';
  trackingLabel?: string;
  /** A/B copy test: two button-text variants. Assignment is sticky per visitor. */
  variants?: { a: string; b: string };
};

export function CTAButton({
  children = 'Try Star Citizen Free During Free Fly',
  className = '',
  size = 'md',
  trackingLabel,
  variants,
}: Props) {
  const [href, setHref] = useState(FALLBACK_REFERRAL_URL);
  const [abVariant, setAbVariant] = useState<'a' | 'b'>('a');
  useEffect(() => {
    setHref(getRotatedReferralUrl());
    if (variants) setAbVariant(getCtaVariant());
  }, [variants]);

  const variantSuffix = variants ? `~${abVariant}` : '';

  const linkRef = useRef<HTMLAnchorElement>(null);
  const hrefRef = useRef(href);
  hrefRef.current = href;
  const impressionFired = useRef(false);

  useEffect(() => {
    const el = linkRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (impressionFired.current) return;
        if (!entries.some((entry) => entry.isIntersecting)) return;
        impressionFired.current = true;
        observer.disconnect();
        const code = hrefRef.current.split('referral=')[1] ?? '';
        fetch('/api/log', {
          method: 'POST',
          keepalive: true,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            label: `impression:${trackingLabel ?? 'unknown'}${variantSuffix}`,
            referralCode: code,
            page: window.location.pathname,
            site: window.location.hostname,
          }),
        }).catch(() => {})
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [trackingLabel, variantSuffix]);

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
        label: `${trackingLabel ?? 'unknown'}${variantSuffix}`,
        referralCode: code,
        page: window.location.pathname,
        site: window.location.hostname,
      }),
    }).catch(() => {})
  }

  return (
    <a
      ref={linkRef}
      href={href}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className={`group inline-flex items-center justify-center gap-2 rounded-full bg-purple ${sizeCls} font-semibold text-white shadow-glow transition hover:bg-purple-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-purple focus-visible:ring-offset-2 focus-visible:ring-offset-deepGreen ${className}`}
      onClick={handleClick}
    >
      <span>{variants ? variants[abVariant] : children}</span>
      <span aria-hidden className="transition group-hover:translate-x-0.5">
        →
      </span>
    </a>
  );
}
