import { anatomyDiagrams } from "@/data/anatomy";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Anatomy",
  description: "Click through simplified diagrams of a Mars rover and an Apollo lunar module.",
};

export default function AnatomyIndexPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <header className="text-card rounded-[2rem] border border-white/10 p-6 md:p-8">
        <p className="text-xs tracking-[0.18em] text-cyan uppercase">How the machines work</p>
        <h1 className="mt-3 font-display text-5xl">Interactive anatomy</h1>
        <p className="mt-4 max-w-2xl leading-7 text-silver">
          These are teaching sketches. An AI coding assistant wrote the SVG code that draws them. They are not photographs and not pictures from an image generator. NASA photographs live on the machine pages. The same note is on Sources.
        </p>
      </header>
      <ul className="mt-8 grid gap-4 md:grid-cols-2">
        {anatomyDiagrams.map((diagram) => (
          <li key={diagram.id}>
            <Link href={`/anatomy/${diagram.id}`} className="exhibit-card block rounded-3xl border border-white/10 p-6">
              <p className="text-xs tracking-[0.16em] text-cyan uppercase">{diagram.kicker}</p>
              <h2 className="mt-2 font-display text-3xl">{diagram.title}</h2>
              <p className="mt-3 text-sm leading-6 text-silver">{diagram.intro}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
