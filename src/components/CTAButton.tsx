import { REFERRAL_URL } from '@/lib/links';

type Props = {
  children?: React.ReactNode;
  className?: string;
  size?: 'md' | 'lg';
};

export function CTAButton({
  children = 'Try Star Citizen Free During Free Fly',
  className = '',
  size = 'md',
}: Props) {
  const sizeCls =
    size === 'lg'
      ? 'px-7 py-4 text-base sm:text-lg'
      : 'px-5 py-3 text-sm sm:text-base';
  return (
    <a
      href={REFERRAL_URL}
      target="_blank"
      rel="noreferrer"
      className={`group inline-flex items-center justify-center gap-2 rounded-full bg-purple ${sizeCls} font-semibold text-white shadow-glow transition hover:bg-purple-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-purple focus-visible:ring-offset-2 focus-visible:ring-offset-deepGreen ${className}`}
    >
      <span>{children}</span>
      <span aria-hidden className="transition group-hover:translate-x-0.5">
        →
      </span>
    </a>
  );
}
