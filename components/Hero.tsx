import { ShieldCheck, ArrowRight, Sparkles, TrendingUp } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-radial px-5 pb-20 pt-14 sm:pt-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div className="animate-fadeUp">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-xs font-semibold text-emerald-400">
            <ShieldCheck size={14} />
            100% Accurate • Latest IPU Pattern
          </span>

          <h1 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            GGSIPU
            <br />
            <span className="bg-brand-gradient bg-clip-text text-transparent">SGPA</span>
            <br />
            Calculator
          </h1>

          <p className="mt-5 max-w-md text-base text-muted sm:text-lg">
            Calculate your semester SGPA in seconds. Fast, accurate and
            updated for the latest GGSIPU grading scheme.
          </p>

          <a
            href="#calculator"
            className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-brand-gradient px-6 py-3.5 font-semibold text-white shadow-glow transition hover:brightness-110"
          >
            Start Calculating
            <ArrowRight size={18} className="transition group-hover:translate-x-1" />
          </a>
        </div>

        <div className="relative mx-auto w-full max-w-xs animate-float lg:max-w-sm">
          <Sparkles
            className="absolute -left-6 top-6 text-brand-300 animate-sparkle"
            size={22}
          />
          <Sparkles
            className="absolute -right-4 bottom-24 text-brand-300 animate-sparkle"
            size={16}
            style={{ animationDelay: "1.2s" }}
          />

          <div className="glass-card rounded-[2rem] p-6 shadow-card">
            <div className="mb-6 flex justify-center">
              <div className="h-3 w-16 rounded-full bg-brand-400/40" />
            </div>
            <p className="text-center text-sm text-muted">Your SGPA</p>
            <p className="mt-1 text-center font-display text-5xl font-bold text-brand-400">
              9.23
            </p>
            <p className="mt-1 text-center text-sm text-muted">Excellent 🎉</p>

            <div className="mt-6 flex items-end gap-1.5 rounded-xl bg-white/5 p-4">
              {[40, 55, 48, 70, 62, 85].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-md bg-brand-gradient"
                  style={{ height: `${h}px` }}
                />
              ))}
            </div>

            <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-emerald-400">
              <TrendingUp size={14} />
              Trending upward this semester
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
