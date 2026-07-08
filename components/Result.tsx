import { Trophy, Info } from "lucide-react";
import { SGPAResult, getPerformanceLabel } from "@/utils/calculateSGPA";

interface ResultProps {
  result: SGPAResult;
  onShowFormula?: () => void;
}

export default function Result({ result, onShowFormula }: ResultProps) {
  const { label, emoji } = getPerformanceLabel(result.sgpa);

  return (
    <div className="glass-card mt-6 rounded-2xl p-6 shadow-card sm:p-8">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-amber-400/15 text-amber-400">
            <Trophy size={26} />
          </span>
          <div>
            <p className="text-sm text-muted">Your SGPA</p>
            <p className="font-display text-5xl font-bold text-brand-400">
              {result.sgpa.toFixed(2)}
            </p>
            <p className="mt-1 text-sm font-medium text-muted">
              {label} {emoji}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2 sm:items-end sm:text-right">
          <button
            onClick={onShowFormula}
            className="inline-flex items-center gap-1.5 self-start rounded-full border border-white/10 px-3 py-1.5 text-xs text-muted transition hover:text-brand-400 sm:self-end"
          >
            <Info size={13} />
            How is SGPA Calculated?
          </button>
          <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-sm">
            <span className="text-muted">Total Credits</span>
            <span className="text-right font-semibold">{result.totalCredits}</span>
            <span className="text-muted">Total Grade Points</span>
            <span className="text-right font-semibold">
              {result.totalGradePoints.toFixed(2)}
            </span>
            <span className="text-muted">SGPA</span>
            <span className="text-right font-bold text-brand-400">
              {result.sgpa.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
