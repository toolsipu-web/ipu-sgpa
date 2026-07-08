"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const FAQS = [
  {
    q: "What is SGPA in GGSIPU?",
    a: "SGPA (Semester Grade Point Average) reflects your academic performance in a single semester at Guru Gobind Singh Indraprastha University, calculated from the credits and grade points of each subject.",
  },
  {
    q: "How is SGPA different from CGPA?",
    a: "SGPA is calculated for one semester only, while CGPA (Cumulative Grade Point Average) is the weighted average of SGPA across all completed semesters.",
  },
  {
    q: "What is the minimum passing grade in GGSIPU?",
    a: "A 'P' grade (4 grade points) is generally the minimum passing grade for a subject, while an 'F' grade means the subject was not cleared.",
  },
  {
    q: "Is this calculator accurate for all IPU courses?",
    a: "Yes, the calculator uses the standard university-wide grade point scale. Always cross-check with your official result if you notice a discrepancy for your specific program.",
  },
  {
    q: "Can I calculate SGPA for more than one semester at once?",
    a: "This tool calculates SGPA for a single semester. Add all the subjects from that semester, and repeat the process separately for each semester to track your CGPA manually.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="px-5 py-16">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8 text-center">
          <h2 className="font-display text-3xl font-bold">
            Frequently Asked <span className="text-brand-400">Questions</span>
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {FAQS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.q}
                className="glass-card overflow-hidden rounded-xl"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-2.5 font-medium">
                    <HelpCircle size={16} className="shrink-0 text-brand-400" />
                    {item.q}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-muted transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="px-5 pb-4 text-sm leading-relaxed text-muted">
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
