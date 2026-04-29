import { HUB_URL } from '@/lib/links';

type Props = {
  children?: React.ReactNode;
  href?: string;
  external?: boolean;
  className?: string;
  size?: 'md' | 'lg';
};

export function SecondaryButton({
  children = "Star Citizen Beginner's Guide",
  href = HUB_URL,
  external = true,
  className = '',
  size = 'md',
}: Props) {
  const sizeCls =
    size === 'lg'
      ? 'px-7 py-4 text-base sm:text-lg'
      : 'px-5 py-3 text-sm sm:text-base';
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
      className={`inline-flex items-center justify-center gap-2 rounded-full border border-purple/50 ${sizeCls} font-semibold text-offwhite transition hover:border-purple hover:bg-purple/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple focus-visible:ring-offset-2 focus-visible:ring-offset-deepGreen ${className}`}
    >
      {children}
    </a>
  );
}
