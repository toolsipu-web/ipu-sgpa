import Link from "next/link";
import { GraduationCap, Zap, ShieldCheck, Smartphone, Lock } from "lucide-react";

const FEATURES = [
  { icon: Zap, title: "Fast & Accurate", desc: "Instant Result" },
  { icon: ShieldCheck, title: "100% Reliable", desc: "Latest IPU Pattern" },
  { icon: Smartphone, title: "Mobile Friendly", desc: "Perfect on Mobile" },
  { icon: Lock, title: "Privacy First", desc: "Your Data Safe" },
];

export default function Footer() {
  return (
    <footer id="about" className="border-t border-white/10 px-5 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="glass-card rounded-xl p-4 text-center"
            >
              <f.icon size={20} className="mx-auto mb-2 text-brand-400" />
              <p className="text-sm font-semibold">{f.title}</p>
              <p className="text-xs text-muted">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <Link href="/" className="flex items-center gap-2 font-display font-bold">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-gradient text-white">
              <GraduationCap size={16} />
            </span>
            IPU SGPA
          </Link>
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} IPU SGPA Calculator. Not officially
            affiliated with GGSIPU. Built for students, by students.
          </p>
        </div>
      </div>
    </footer>
  );
}
