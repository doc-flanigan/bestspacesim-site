import Link from 'next/link';
import type { Game } from '@/data/games';
import { ScoreBadge } from './ScoreBadge';

type Props = {
  game: Game;
  highlight?: boolean;
};

export function GameComparisonCard({ game, highlight = false }: Props) {
  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-greenMid/40 p-6 transition hover:-translate-y-0.5 hover:border-purple/60 hover:bg-greenMid/70 ${
        highlight
          ? 'border-purple/60 shadow-glow'
          : 'border-greenMid'
      }`}
    >
      {highlight && (
        <span className="absolute right-4 top-4 rounded-full bg-purple px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white">
          Top pick
        </span>
      )}

      <div
        aria-hidden
        className="relative mb-5 flex aspect-[16/9] items-center justify-center overflow-hidden rounded-xl border border-greenMid bg-gradient-to-br from-purple/25 via-greenMid/40 to-deepGreen"
      >
        <div className="absolute -right-6 -top-8 h-24 w-24 rounded-full bg-purple/20 blur-2xl" />
        <div className="absolute -bottom-10 -left-6 h-24 w-24 rounded-full bg-purple/10 blur-2xl" />
        <span className="relative px-4 text-center font-display text-lg font-semibold text-offwhite/95 sm:text-xl">
          {game.title}
        </span>
      </div>

      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-xl font-semibold text-offwhite">
            <Link
              href={game.id === 'star-citizen' ? '/star-citizen' : `/comparison#${game.id}`}
              className="transition group-hover:text-purple"
            >
              {game.title}
            </Link>
          </h3>
          <p className="mt-0.5 text-xs text-muted">
            {game.developer} · {game.released}
          </p>
        </div>
        <ScoreBadge score={game.score} rank={game.rank} />
      </div>

      <p className="mt-3 text-sm leading-relaxed text-offwhite/80">
        {game.tagline}
      </p>

      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <h4 className="text-[11px] font-semibold uppercase tracking-wider text-purple/90">
            Pros
          </h4>
          <ul className="mt-2 space-y-1 text-sm text-offwhite/85">
            {game.pros.slice(0, 3).map((p) => (
              <li key={p} className="flex gap-2">
                <span aria-hidden className="text-purple">+</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-[11px] font-semibold uppercase tracking-wider text-muted">
            Cons
          </h4>
          <ul className="mt-2 space-y-1 text-sm text-offwhite/75">
            {game.cons.slice(0, 3).map((c) => (
              <li key={c} className="flex gap-2">
                <span aria-hidden className="text-muted">–</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-5 rounded-xl border border-greenMid bg-deepGreen/40 p-4 text-sm">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-muted">
          Best for
        </p>
        <p className="mt-1 text-offwhite/90">{game.bestFor}</p>
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-2 border-t border-greenMid pt-4 text-xs text-muted">
        <span>{game.priceLabel}</span>
        <span>
          {game.multiplayer ? 'Multiplayer' : 'Singleplayer'}
          {game.freeToTry ? ' · Free to try' : ''}
        </span>
      </div>
    </article>
  );
}
