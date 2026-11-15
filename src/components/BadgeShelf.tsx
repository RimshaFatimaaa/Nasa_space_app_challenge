"use client";

import { badges } from "@/data/quizzes";
import { allHardware } from "@/data/catalog";
import { loadProgress, type ProgressState } from "@/lib/progress";
import { Award } from "lucide-react";
import { useEffect, useState } from "react";

export function BadgeShelf() {
  const [progress, setProgress] = useState<ProgressState | null>(null);

  useEffect(() => {
    const refresh = () => setProgress(loadProgress());
    refresh();
    window.addEventListener("beyond-earth-progress", refresh);
    window.addEventListener("storage", refresh);
    return () => {
      window.removeEventListener("beyond-earth-progress", refresh);
      window.removeEventListener("storage", refresh);
    };
  }, []);

  const moonTotal = allHardware.filter((item) => item.destination === "Moon").length;
  const marsTotal = allHardware.filter((item) => item.destination === "Mars").length;
  const moonSeen = progress?.visited.filter((id) => id && allHardware.find((item) => item.id === id)?.destination === "Moon").length ?? 0;
  const marsSeen = progress?.visited.filter((id) => allHardware.find((item) => item.id === id)?.destination === "Mars").length ?? 0;

  return (
    <section aria-labelledby="badges-heading" className="text-card space-y-4 rounded-[2rem] border border-white/10 p-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <h2 id="badges-heading" className="font-display text-3xl">Exploration badges</h2>
        <p className="text-sm text-silver">Saved only in this browser. No account needed.</p>
      </div>
      <p className="text-sm text-silver">
        Moon machines visited: {progress ? moonSeen : "–"}/{moonTotal}. Mars rovers visited: {progress ? marsSeen : "–"}/{marsTotal}.
        Timeline events opened: {progress ? progress.timelineOpens.length : "–"}.
      </p>
      <ul className="grid gap-3 sm:grid-cols-2">
        {badges.map((badge) => {
          const earned = progress?.earned.includes(badge.id) ?? false;
          return (
            <li key={badge.id} className={`rounded-2xl border p-4 ${earned ? "border-sand/50 bg-sand/10" : "border-white/10 bg-white/5"}`}>
              <p className="flex items-center gap-2 font-display text-lg">
                <Award aria-hidden="true" size={18} className={earned ? "text-sand" : "text-silver"} />
                {badge.name}
              </p>
              <p className="mt-1 text-sm leading-6 text-silver">{badge.description}</p>
              <p className="mt-2 text-xs tracking-wide uppercase">{earned ? "Earned" : "Not yet"}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
