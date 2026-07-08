import { Calculator as CalcIcon } from "lucide-react";
import { GRADE_POINTS } from "@/utils/calculateSGPA";

export default function Formula() {
  return (
    <section id="formula" className="px-5 py-16">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8 text-center">
          <h2 className="font-display text-3xl font-bold">
            How is <span className="text-brand-400">SGPA</span> Calculated?
          </h2>
          <p className="mt-2 text-sm text-muted">
            The official GGSIPU formula, explained step by step.
          </p>
        </div>

        <div className="glass-card rounded-2xl p-6 shadow-card sm:p-8">
          <div className="flex items-center gap-3 rounded-xl bg-brand-gradient/10 p-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-gradient text-white">
              <CalcIcon size={18} />
            </span>
            <p className="font-mono text-sm sm:text-base">
              SGPA = Σ (Credit × Grade Point) ÷ Σ Credit
            </p>
          </div>

          <p className="mt-5 text-sm leading-relaxed text-muted">
            For every subject, multiply the credits assigned to it by the
            grade point earned. Add these values across all subjects, then
            divide by the total number of credits for the semester.
          </p>

          <h3 className="mt-6 mb-3 font-display text-lg font-semibold">
            GGSIPU Grade Point Scale
          </h3>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {Object.entries(GRADE_POINTS).map(([grade, points]) => (
              <div
                key={grade}
                className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-center"
              >
                <p className="font-display text-lg font-bold text-brand-400">
                  {grade}
                </p>
                <p className="text-xs text-muted">{points} points</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
