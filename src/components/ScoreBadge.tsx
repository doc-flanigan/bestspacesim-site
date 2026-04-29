type Props = {
  score: number;
  rank?: number;
  className?: string;
};

export function ScoreBadge({ score, rank, className = '' }: Props) {
  const tone =
    score >= 9
      ? 'from-purple to-purple-dark text-white'
      : score >= 8
        ? 'from-purple/60 to-purple-dark/60 text-white'
        : 'from-greenMid to-greenMid text-offwhite';
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border border-purple/30 bg-gradient-to-r ${tone} px-3 py-1 text-xs font-semibold ${className}`}
    >
      {typeof rank === 'number' && (
        <span className="rounded-full bg-black/20 px-1.5 py-0.5 text-[10px] uppercase tracking-wider">
          #{rank}
        </span>
      )}
      <span>{score.toFixed(1)} / 10</span>
    </div>
  );
}
