import { AnatomyExplorer } from "@/components/AnatomyExplorer";
import { getAnatomy } from "@/data/anatomy";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return [{ id: "mars-rover" }, { id: "lunar-module" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const diagram = getAnatomy(id);
  return { title: diagram?.title ?? "Anatomy" };
}

export default async function AnatomyDetailPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ power?: string }>;
}) {
  const { id } = await params;
  const { power } = await searchParams;
  if (id !== "mars-rover" && id !== "lunar-module") notFound();
  const diagram = getAnatomy(id);
  if (!diagram) notFound();

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <header className="text-card rounded-[2rem] border border-white/10 p-6 md:p-8">
        <Link href="/anatomy" className="text-sm text-cyan">All diagrams</Link>
        <p className="mt-4 text-xs tracking-[0.18em] text-cyan uppercase">{diagram.kicker}</p>
        <h1 className="mt-3 font-display text-5xl">{diagram.title}</h1>
        <p className="mt-4 max-w-3xl leading-7 text-silver">{diagram.intro}</p>
      </header>
      <div className="mt-8">
        <AnatomyExplorer id={id} initialPower={power === "nuclear" ? "nuclear" : "solar"} />
      </div>
    </div>
  );
}
