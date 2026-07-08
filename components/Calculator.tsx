"use client";

import { useMemo, useState } from "react";
import { Plus, Minus, Trash2, BookOpen } from "lucide-react";
import {
  Subject,
  Grade,
  GRADE_OPTIONS,
  calculateSGPA,
  createEmptySubject,
} from "@/utils/calculateSGPA";
import Result from "./Result";

const INITIAL_SUBJECTS: Subject[] = [
  { id: "s1", name: "Data Structures", credits: 4, grade: "A" },
  { id: "s2", name: "Database Management Systems", credits: 4, grade: "A+" },
  { id: "s3", name: "Operating Systems", credits: 3, grade: "B+" },
  { id: "s4", name: "Discrete Mathematics", credits: 3, grade: "A" },
];

export default function Calculator() {
  const [subjects, setSubjects] = useState<Subject[]>(INITIAL_SUBJECTS);

  const result = useMemo(() => calculateSGPA(subjects), [subjects]);

  function addSubject() {
    setSubjects((prev) => [...prev, createEmptySubject(prev.length)]);
  }

  function removeSubject(id: string) {
    setSubjects((prev) => prev.filter((s) => s.id !== id));
  }

  function updateSubject(id: string, patch: Partial<Subject>) {
    setSubjects((prev) =>
      prev.map((s) => (s.id === id ? { ...s, ...patch } : s))
    );
  }

  function changeCredits(id: string, delta: number) {
    setSubjects((prev) =>
      prev.map((s) =>
        s.id === id
          ? { ...s, credits: Math.min(6, Math.max(1, s.credits + delta)) }
          : s
      )
    );
  }

  return (
    <section id="calculator" className="px-5 py-16">
      <div className="mx-auto max-w-3xl">
        <div className="glass-card rounded-2xl p-5 shadow-card sm:p-8">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <h2 className="flex items-center gap-2 font-display text-xl font-bold">
              <BookOpen size={20} className="text-brand-400" />
              Add Your Subjects
            </h2>
            <button
              onClick={addSubject}
              className="inline-flex items-center gap-1.5 rounded-lg bg-brand-gradient px-4 py-2 text-sm font-semibold text-white shadow-glow transition hover:brightness-110"
            >
              <Plus size={16} />
              Add Subject
            </button>
          </div>

          {/* Column headers (desktop) */}
          <div className="mb-2 hidden grid-cols-[1fr_auto_auto_auto] gap-4 px-1 text-xs font-medium text-muted sm:grid">
            <span>Subject</span>
            <span>Credits</span>
            <span>Grade</span>
            <span></span>
          </div>

          <div className="flex flex-col gap-3">
            {subjects.map((subject) => (
              <div
                key={subject.id}
                className="flex flex-col gap-3 rounded-xl border border-white/10 bg-white/5 p-3 sm:flex-row sm:items-center sm:gap-4"
              >
                <input
                  type="text"
                  value={subject.name}
                  onChange={(e) =>
                    updateSubject(subject.id, { name: e.target.value })
                  }
                  placeholder="Subject name"
                  className="w-full flex-1 rounded-lg border border-white/10 bg-transparent px-3 py-2 text-sm outline-none placeholder:text-muted/60 focus:border-brand-400"
                />

                <div className="flex items-center justify-between gap-4 sm:justify-start">
                  <div className="flex items-center gap-2">
                    <button
                      aria-label="Decrease credits"
                      onClick={() => changeCredits(subject.id, -1)}
                      className="flex h-8 w-8 items-center justify-center rounded-md border border-white/10 text-muted hover:text-brand-400"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="w-6 text-center font-semibold">
                      {subject.credits}
                    </span>
                    <button
                      aria-label="Increase credits"
                      onClick={() => changeCredits(subject.id, 1)}
                      className="flex h-8 w-8 items-center justify-center rounded-md border border-white/10 text-muted hover:text-brand-400"
                    >
                      <Plus size={14} />
                    </button>
                  </div>

                  <select
                    value={subject.grade}
                    onChange={(e) =>
                      updateSubject(subject.id, {
                        grade: e.target.value as Grade,
                      })
                    }
                    className="rounded-lg border border-white/10 bg-[var(--bg-soft)] px-3 py-2 text-sm outline-none focus:border-brand-400"
                  >
                    {GRADE_OPTIONS.map((g) => (
                      <option key={g} value={g}>
                        {g}
                      </option>
                    ))}
                  </select>

                  <button
                    aria-label="Remove subject"
                    onClick={() => removeSubject(subject.id)}
                    className="flex h-8 w-8 items-center justify-center rounded-md text-red-400/80 transition hover:bg-red-400/10 hover:text-red-400"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}

            {subjects.length === 0 && (
              <p className="rounded-xl border border-dashed border-white/15 py-8 text-center text-sm text-muted">
                No subjects added yet. Tap "Add Subject" to get started.
              </p>
            )}
          </div>
        </div>

        <Result result={result} />
      </div>
    </section>
  );
}
