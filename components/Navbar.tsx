"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { GraduationCap, Sun, Moon, Eye, Menu, X } from "lucide-react";

type Theme = "light" | "dark" | "eye-comfort";

const NAV_LINKS = [
  { href: "/#calculator", label: "Home" },
  { href: "/#formula", label: "Formula" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#about", label: "About" },
];

export default function Navbar() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const stored = (typeof window !== "undefined" &&
      (localStorage.getItem("ipu-sgpa-theme") as Theme)) || "dark";
    applyTheme(stored);
  }, []);

  function applyTheme(next: Theme) {
    setTheme(next);
    const root = document.documentElement;
    root.classList.remove("light", "eye-comfort");
    if (next === "light") root.classList.add("light");
    if (next === "eye-comfort") root.classList.add("eye-comfort");
    localStorage.setItem("ipu-sgpa-theme", next);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[var(--bg)]/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="flex items-center gap-2 font-display text-lg font-bold">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-glow">
            <GraduationCap size={20} />
          </span>
          <span>
            IPU <span className="text-brand-400">SGPA</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition hover:text-brand-400"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 sm:flex">
            <ThemeButton active={theme === "light"} onClick={() => applyTheme("light")} label="Light mode">
              <Sun size={16} />
            </ThemeButton>
            <ThemeButton active={theme === "dark"} onClick={() => applyTheme("dark")} label="Dark mode">
              <Moon size={16} />
            </ThemeButton>
            <ThemeButton active={theme === "eye-comfort"} onClick={() => applyTheme("eye-comfort")} label="Eye comfort mode">
              <Eye size={16} />
            </ThemeButton>
          </div>

          <button
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((o) => !o)}
            className="rounded-lg border border-white/10 p-2 text-muted md:hidden"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-white/10 px-5 py-4 md:hidden">
          <div className="mb-4 flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 w-fit">
            <ThemeButton active={theme === "light"} onClick={() => applyTheme("light")} label="Light mode">
              <Sun size={16} />
            </ThemeButton>
            <ThemeButton active={theme === "dark"} onClick={() => applyTheme("dark")} label="Dark mode">
              <Moon size={16} />
            </ThemeButton>
            <ThemeButton active={theme === "eye-comfort"} onClick={() => applyTheme("eye-comfort")} label="Eye comfort mode">
              <Eye size={16} />
            </ThemeButton>
          </div>
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-muted transition hover:text-brand-400"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function ThemeButton({
  active,
  onClick,
  label,
  children,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <button
      aria-label={label}
      onClick={onClick}
      className={`rounded-full p-1.5 transition ${
        active ? "bg-brand-gradient text-white" : "text-muted hover:text-brand-400"
      }`}
    >
      {children}
    </button>
  );
}
