// utils/calculateSGPA.ts

export type Grade = "O" | "A+" | "A" | "B+" | "B" | "C" | "P" | "F";

export interface Subject {
  id: string;
  name: string;
  credits: number;
  grade: Grade;
}

// Official GGSIPU (Guru Gobind Singh Indraprastha University) grade point scale
export const GRADE_POINTS: Record<Grade, number> = {
  "O": 10,
  "A+": 9,
  "A": 8,
  "B+": 7,
  "B": 6,
  "C": 5,
  "P": 4,
  "F": 0,
};

export const GRADE_LABELS: Record<Grade, string> = {
  "O": "O (Outstanding)",
  "A+": "A+ (Excellent)",
  "A": "A (Very Good)",
  "B+": "B+ (Good)",
  "B": "B (Above Average)",
  "C": "C (Average)",
  "P": "P (Pass)",
  "F": "F (Fail)",
};

export const GRADE_OPTIONS: Grade[] = ["O", "A+", "A", "B+", "B", "C", "P", "F"];

export interface SGPAResult {
  sgpa: number;
  totalCredits: number;
  totalGradePoints: number;
}

/**
 * Calculates SGPA using the standard formula:
 * SGPA = (Σ Credits_i × GradePoint_i) / (Σ Credits_i)
 */
export function calculateSGPA(subjects: Subject[]): SGPAResult {
  const validSubjects = subjects.filter((s) => s.credits > 0);

  const totalCredits = validSubjects.reduce((sum, s) => sum + s.credits, 0);
  const totalGradePoints = validSubjects.reduce(
    (sum, s) => sum + s.credits * GRADE_POINTS[s.grade],
    0
  );

  if (totalCredits === 0) {
    return { sgpa: 0, totalCredits: 0, totalGradePoints: 0 };
  }

  const sgpa = totalGradePoints / totalCredits;

  return {
    sgpa: Math.round(sgpa * 100) / 100,
    totalCredits,
    totalGradePoints: Math.round(totalGradePoints * 100) / 100,
  };
}

export function getPerformanceLabel(sgpa: number): { label: string; emoji: string } {
  if (sgpa >= 9) return { label: "Excellent Performance!", emoji: "🎉" };
  if (sgpa >= 8) return { label: "Very Good Performance!", emoji: "👏" };
  if (sgpa >= 7) return { label: "Good Performance!", emoji: "👍" };
  if (sgpa >= 6) return { label: "Above Average", emoji: "🙂" };
  if (sgpa >= 5) return { label: "Average Performance", emoji: "😐" };
  if (sgpa > 0) return { label: "Needs Improvement", emoji: "📚" };
  return { label: "Add subjects to see your SGPA", emoji: "✍️" };
}

export function createEmptySubject(index: number): Subject {
  return {
    id: `subject-${Date.now()}-${index}`,
    name: "",
    credits: 4,
    grade: "A",
  };
}
