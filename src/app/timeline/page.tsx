import { TimelineList } from "@/components/TimelineList";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Timeline",
  description: "Follow the machines NASA left on the Moon and Mars, from Apollo 11 to the rovers still driving in 2026.",
};

export default function TimelinePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <header className="text-card rounded-[2rem] border border-white/10 p-6 md:p-8">
        <p className="text-xs tracking-[0.18em] text-cyan uppercase">1969 to 2026</p>
        <h1 className="mt-3 font-display text-5xl">Exploration timeline</h1>
        <p className="mt-4 max-w-2xl leading-7 text-silver">
          Open an event to see the mission, the equipment, and what scientists learned. Opening events also counts toward the Space Historian badge.
        </p>
      </header>
      <div className="mt-8">
        <TimelineList />
      </div>
    </div>
  );
}
