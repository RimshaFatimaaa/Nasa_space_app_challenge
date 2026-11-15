import { ComparisonExplorer } from "@/components/ComparisonExplorer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compare",
  description: "Compare Mars rovers and Apollo hardware side by side, using figures from the NASA sources linked on each machine.",
};

export default function ComparePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <header className="text-card rounded-[2rem] border border-white/10 p-6 md:p-8">
        <p className="text-xs tracking-[0.18em] text-cyan uppercase">Generations of hardware</p>
        <h1 className="mt-3 font-display text-5xl">Compare the explorers</h1>
        <p className="mt-4 max-w-3xl leading-7 text-silver">
          The same facts used on the machine pages are lined up here. Highlighted cells are teaching points, not scores. A longer drive is not a better rover. It is a clue about power, software, and luck.
        </p>
      </header>
      <div className="mt-8">
        <ComparisonExplorer />
      </div>
    </div>
  );
}
