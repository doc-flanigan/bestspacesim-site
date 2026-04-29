'use client';

import { useMemo, useState } from 'react';
import { ComparisonTable } from './ComparisonTable';
import { GameComparisonCard } from './GameComparisonCard';
import type { Game } from '@/data/games';

type Filters = {
  multiplayer: boolean;
  singleplayer: boolean;
  freeToTry: boolean;
  maxPrice: number;
};

const DEFAULTS: Filters = {
  multiplayer: false,
  singleplayer: false,
  freeToTry: false,
  maxPrice: 100,
};

export function ComparisonExplorer({ games }: { games: Game[] }) {
  const [filters, setFilters] = useState<Filters>(DEFAULTS);

  const filtered = useMemo(() => {
    return games.filter((g) => {
      if (filters.multiplayer && !g.multiplayer) return false;
      if (filters.singleplayer && !g.singleplayer) return false;
      if (filters.freeToTry && !g.freeToTry) return false;
      const price = g.priceUSD ?? 0;
      if (price > filters.maxPrice) return false;
      return true;
    });
  }, [games, filters]);

  const reset = () => setFilters(DEFAULTS);
  const activeCount =
    Number(filters.multiplayer) +
    Number(filters.singleplayer) +
    Number(filters.freeToTry) +
    (filters.maxPrice < 100 ? 1 : 0);

  return (
    <div>
      <div className="rounded-2xl border border-greenMid bg-greenMid/30 p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="font-display text-lg font-semibold text-offwhite">
            Filter the field
          </h2>
          <button
            type="button"
            onClick={reset}
            className="text-xs font-semibold uppercase tracking-wider text-muted transition hover:text-purple disabled:opacity-50"
            disabled={activeCount === 0}
          >
            Reset
          </button>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Toggle
            label="Multiplayer"
            value={filters.multiplayer}
            onChange={(v) => setFilters((f) => ({ ...f, multiplayer: v }))}
          />
          <Toggle
            label="Singleplayer"
            value={filters.singleplayer}
            onChange={(v) => setFilters((f) => ({ ...f, singleplayer: v }))}
          />
          <Toggle
            label="Free to try"
            value={filters.freeToTry}
            onChange={(v) => setFilters((f) => ({ ...f, freeToTry: v }))}
          />
          <PriceSlider
            value={filters.maxPrice}
            onChange={(v) => setFilters((f) => ({ ...f, maxPrice: v }))}
          />
        </div>
      </div>

      <div className="mt-3 text-xs text-muted">
        {filtered.length} of {games.length} space sims match your filters.
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {filtered.map((g) => (
          <div key={g.id} id={g.id} className="scroll-mt-24">
            <GameComparisonCard game={g} highlight={g.id === 'star-citizen'} />
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="mt-8 rounded-2xl border border-dashed border-greenMid p-10 text-center text-muted">
          No matches. Try loosening the filters.
        </div>
      )}

      {filtered.length > 0 && (
        <div className="mt-12">
          <h3 className="font-display text-2xl font-semibold text-offwhite">
            Feature matrix
          </h3>
          <p className="mt-2 max-w-xl text-sm text-offwhite/75">
            Same filters applied. Scroll horizontally if needed.
          </p>
          <div className="mt-5">
            <ComparisonTable games={filtered} />
          </div>
        </div>
      )}
    </div>
  );
}

function Toggle({
  label,
  value,
  onChange,
}: {
  label: string;
  value: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <label
      className={`flex cursor-pointer items-center justify-between gap-3 rounded-xl border px-4 py-3 transition ${
        value
          ? 'border-purple/60 bg-purple/10 text-offwhite'
          : 'border-greenMid bg-deepGreen/40 text-offwhite/80 hover:border-purple/30'
      }`}
    >
      <span className="text-sm font-medium">{label}</span>
      <span
        role="switch"
        aria-checked={value}
        onClick={(e) => {
          e.preventDefault();
          onChange(!value);
        }}
        className={`relative inline-flex h-5 w-9 flex-shrink-0 items-center rounded-full transition ${
          value ? 'bg-purple' : 'bg-greenMid'
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-offwhite transition ${
            value ? 'translate-x-4' : 'translate-x-0.5'
          }`}
        />
      </span>
      <input
        type="checkbox"
        className="sr-only"
        checked={value}
        onChange={(e) => onChange(e.target.checked)}
      />
    </label>
  );
}

function PriceSlider({
  value,
  onChange,
}: {
  value: number;
  onChange: (v: number) => void;
}) {
  return (
    <div className="rounded-xl border border-greenMid bg-deepGreen/40 px-4 py-3">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium text-offwhite/80">Max price</span>
        <span className="font-semibold text-purple">
          {value >= 100 ? 'Any' : `$${value}`}
        </span>
      </div>
      <input
        type="range"
        min={0}
        max={100}
        step={5}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-3 w-full accent-purple"
        aria-label="Maximum price"
      />
    </div>
  );
}
