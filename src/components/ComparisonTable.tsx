import type { Game } from '@/data/games';

const FEATURE_ROWS: Array<{ key: keyof Game['features']; label: string }> = [
  { key: 'livingUniverse', label: 'Persistent living universe' },
  { key: 'shipCombat', label: 'Cockpit-perspective ship combat' },
  { key: 'fpsCombat', label: 'On-foot FPS combat' },
  { key: 'planetaryLanding', label: 'Seamless planetary landings' },
  { key: 'economy', label: 'Player-driven economy' },
  { key: 'coop', label: 'Co-op / multiplayer' },
  { key: 'modSupport', label: 'Mod support' },
];

function Cell({ value }: { value: 'yes' | 'partial' | 'no' }) {
  if (value === 'yes')
    return (
      <span className="inline-flex items-center gap-1.5 text-purple">
        <span
          aria-hidden
          className="inline-block h-1.5 w-1.5 rounded-full bg-purple shadow-[0_0_10px_rgba(155,89,255,0.8)]"
        />
        <span className="text-xs font-semibold uppercase tracking-wider">Yes</span>
      </span>
    );
  if (value === 'partial')
    return (
      <span className="inline-flex items-center gap-1.5 text-offwhite/70">
        <span
          aria-hidden
          className="inline-block h-1.5 w-1.5 rounded-full bg-offwhite/50"
        />
        <span className="text-xs font-semibold uppercase tracking-wider">Partial</span>
      </span>
    );
  return (
    <span className="inline-flex items-center gap-1.5 text-muted/80">
      <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-muted/50" />
      <span className="text-xs font-semibold uppercase tracking-wider">No</span>
    </span>
  );
}

export function ComparisonTable({ games }: { games: Game[] }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-greenMid bg-greenMid/30">
      <table className="min-w-[760px] w-full text-left">
        <thead>
          <tr className="border-b border-greenMid bg-deepGreen/50">
            <th className="sticky left-0 z-10 bg-deepGreen/80 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-muted">
              Feature
            </th>
            {games.map((g) => (
              <th
                key={g.id}
                className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-offwhite"
              >
                <div className="flex flex-col">
                  <span>{g.title}</span>
                  <span className="mt-0.5 text-[10px] font-normal text-muted">
                    {g.priceLabel}
                  </span>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-greenMid">
          {FEATURE_ROWS.map((row) => (
            <tr key={row.key} className="hover:bg-deepGreen/30">
              <th
                scope="row"
                className="sticky left-0 z-10 bg-deepGreen/70 px-4 py-3 text-sm font-medium text-offwhite/90"
              >
                {row.label}
              </th>
              {games.map((g) => (
                <td key={g.id} className="px-4 py-3 text-sm">
                  <Cell value={g.features[row.key]} />
                </td>
              ))}
            </tr>
          ))}
          <tr className="border-t border-greenMid bg-deepGreen/40">
            <th
              scope="row"
              className="sticky left-0 z-10 bg-deepGreen/70 px-4 py-3 text-sm font-medium text-offwhite/90"
            >
              Score
            </th>
            {games.map((g) => (
              <td
                key={g.id}
                className="px-4 py-3 text-sm font-semibold text-purple"
              >
                {g.score.toFixed(1)} / 10
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
