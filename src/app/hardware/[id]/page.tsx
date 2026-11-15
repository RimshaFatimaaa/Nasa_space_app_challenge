import { ImageGallery } from "@/components/ImageGallery";
import { HardwareCard } from "@/components/HardwareCard";
import { MoreNasaImages } from "@/components/MoreNasaImages";
import { ShareButton } from "@/components/ShareButton";
import { StatusBadge } from "@/components/StatusBadge";
import { VisitTracker } from "@/components/VisitTracker";
import { allHardware, getHardware } from "@/data/catalog";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return allHardware.map((item) => ({ id: item.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const hardware = getHardware(id);
  if (!hardware) return { title: "Machine not found" };
  return { title: hardware.name, description: hardware.overview };
}

const jumps = [
  ["overview", "Overview"],
  ["body", "The machine"],
  ["instruments", "Instruments"],
  ["story", "Story"],
  ["science", "Discoveries"],
  ["status", "Status"],
  ["gallery", "Gallery"],
  ["facts", "Did you know?"],
  ["sources", "Sources"],
];

export default async function HardwarePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const hardware = getHardware(id);
  if (!hardware) notFound();
  const related = hardware.relatedIds
    .map((relatedId) => getHardware(relatedId))
    .filter((item) => item !== undefined);
  const anatomyHref =
    hardware.anatomyId === "mars-rover"
      ? `/anatomy/mars-rover?power=${hardware.powerSource.toLowerCase().includes("solar") ? "solar" : "nuclear"}`
      : hardware.anatomyId
        ? `/anatomy/${hardware.anatomyId}`
        : undefined;

  const specs = [
    ["Mission", hardware.mission],
    ["Launch", hardware.launchDate],
    ["Landing or deployment", hardware.landingDate],
    ["End of mission", hardware.missionEndDate],
    ["Location", hardware.location],
    ["Type", hardware.category],
    ["Mass", hardware.mass],
    ["Dimensions", hardware.dimensions],
    ["Power", hardware.powerSource],
    ["Mobility", hardware.mobility],
    ["Time at work", hardware.duration],
    ["Distance", hardware.distance],
  ].filter((entry): entry is [string, string] => Boolean(entry[1]));

  return (
    <article className="mx-auto max-w-6xl px-4 py-10">
      <VisitTracker id={hardware.id} />
      <header className="text-card rounded-[2rem] border border-white/10 p-6 md:p-8">
      <p className="text-xs tracking-[0.18em] text-cyan uppercase">{hardware.destination} · {hardware.category}</p>
      <div className="mt-3 flex flex-wrap items-start justify-between gap-4">
        <h1 className="max-w-3xl font-display text-4xl leading-none break-words sm:text-5xl md:text-6xl">{hardware.name}</h1>
        <StatusBadge status={hardware.status} />
      </div>
      <p className="mt-4 max-w-3xl text-sm leading-6 text-silver">
        Spec table = NASA’s record. “In simple words” = our explanation.
      </p>
      <div className="mt-5 flex flex-wrap gap-3">
        <ShareButton title={hardware.name} />
        {anatomyHref ? (
          <Link href={anatomyHref} className="btn rounded-full border border-white/15 px-4 py-2 text-sm">
            Explore the parts
          </Link>
        ) : null}
        <Link href="/compare" className="btn rounded-full border border-white/15 px-4 py-2 text-sm">
          Compare machines
        </Link>
      </div>

      <nav className="mt-8 flex gap-2 overflow-x-auto pb-2" aria-label="On this page">
        {jumps.map(([slug, label]) => (
          <a key={slug} href={`#${slug}`} className="btn shrink-0 rounded-full border border-white/10 px-3 py-1.5 text-sm text-silver">
            {label}
          </a>
        ))}
      </nav>
      </header>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <section id="overview" className="text-card scroll-mt-24 rounded-[2rem] border border-white/10 p-6">
          <p className="text-xs tracking-[0.16em] text-cyan uppercase">In simple words</p>
          <p className="mt-3 text-lg leading-8">{hardware.overview}</p>
          <p className="mt-4 leading-7 text-silver">{hardware.purpose}</p>
        </section>
        <div id="gallery" className="scroll-mt-24">
          <ImageGallery images={hardware.images} />
        </div>
      </div>

      <section id="body" className="text-card scroll-mt-24 mt-12 rounded-[2rem] border border-white/10 p-6 md:p-8">
        <h2 className="font-display text-3xl">The machine</h2>
        <p className="mt-3 max-w-3xl leading-7">{hardware.appearance}</p>
        <div className="mt-5 overflow-hidden rounded-3xl border border-white/10 bg-space/80">
          <table className="w-full text-left text-sm">
            <caption className="sr-only">NASA record for {hardware.name}</caption>
            <tbody>
              {specs.map(([label, value]) => (
                <tr key={label} className="grid border-t border-white/10 first:border-t-0 sm:table-row">
                  <th scope="row" className="px-4 pt-3 font-medium text-silver sm:w-56 sm:py-3 sm:align-top">{label}</th>
                  <td className="px-4 pb-3 leading-6 break-words sm:py-3">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-xs text-silver">NASA record. Checked against the sources at the bottom of this page. {hardware.statusAsOf}</p>
      </section>

      <section id="instruments" className="text-card scroll-mt-24 mt-12 rounded-[2rem] border border-white/10 p-6 md:p-8">
        <h2 className="font-display text-3xl">Scientific instruments</h2>
        {hardware.instrumentsNote ? <p className="mt-3 max-w-3xl text-silver">{hardware.instrumentsNote}</p> : null}
        <ul className="mt-5 grid gap-4 md:grid-cols-2">
          {hardware.instruments.map((instrument) => (
            <li key={instrument.name} className="rounded-3xl border border-white/10 bg-space/70 p-5">
              <h3 className="font-display text-2xl">{instrument.name}</h3>
              <p className="mt-2 text-sm leading-6"><span className="text-silver">What it does. </span>{instrument.function}</p>
              <p className="mt-2 text-sm leading-6"><span className="text-silver">What it measures. </span>{instrument.measures}</p>
              <p className="mt-2 text-sm leading-6"><span className="text-silver">Why it was needed. </span>{instrument.whyNeeded}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="story" className="text-card scroll-mt-24 mt-12 rounded-[2rem] border border-white/10 p-6 md:p-8">
        <h2 className="font-display text-3xl">Mission story</h2>
        <div className="mt-4 max-w-3xl space-y-4 leading-7">
          {hardware.story.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <ol className="mt-6 space-y-3">
          {hardware.events.map((event) => (
            <li key={event.title} className="grid gap-1 rounded-2xl border border-white/10 bg-space/70 px-4 py-3 md:grid-cols-[180px_1fr]">
              <p className="text-sm text-cyan">{event.date}</p>
              <div>
                <p className="font-display text-xl">{event.title}</p>
                <p className="text-sm leading-6 text-silver">{event.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section id="science" className="scroll-mt-24 mt-12 grid gap-8 md:grid-cols-2">
        <div className="text-card rounded-[2rem] border border-white/10 p-6">
          <h2 className="font-display text-3xl">Discoveries</h2>
          <ul className="mt-4 list-disc space-y-3 pl-5 leading-7">
            {hardware.discoveries.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="text-card rounded-[2rem] border border-white/10 p-6">
          <h2 className="font-display text-3xl">Why it matters</h2>
          <ul className="mt-4 list-disc space-y-3 pl-5 leading-7">
            {hardware.contributions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="status" className="text-card scroll-mt-24 mt-12 rounded-[2rem] border border-white/10 p-6 md:p-8">
        <div className="flex flex-wrap items-center gap-3">
          <h2 className="font-display text-3xl">Current status</h2>
          <StatusBadge status={hardware.status} />
        </div>
        <p className="mt-4 max-w-3xl leading-7">{hardware.statusDetail}</p>
        <p className="mt-3 text-sm text-silver">{hardware.statusAsOf}</p>
      </section>

      <section id="facts" className="text-card scroll-mt-24 mt-12 rounded-[2rem] border border-white/10 p-6 md:p-8">
        <h2 className="font-display text-3xl">Did you know?</h2>
        <ul className="mt-4 grid gap-3 md:grid-cols-2">
          {hardware.interestingFacts.map((fact) => (
            <li key={fact} className="rounded-3xl bg-white/5 p-5 leading-7">{fact}</li>
          ))}
        </ul>
      </section>

      <section className="text-card mt-12 rounded-[2rem] border border-white/10 p-6 md:p-8">
        <h2 className="font-display text-3xl">More photographs</h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-silver">
          This button asks NASA’s public image library for more pictures. If the library is busy, the photos above stay in place. Extra results are thumbnails. Open them for the official caption.
        </p>
        <div className="mt-4">
          <MoreNasaImages query={hardware.searchQuery} />
        </div>
      </section>

      <section id="sources" className="text-card scroll-mt-24 mt-12 rounded-[2rem] border border-white/10 p-6 md:p-8">
        <h2 className="font-display text-3xl">NASA sources for this page</h2>
        <ul className="mt-4 space-y-2">
          {hardware.sources.map((source) => (
            <li key={source.url}>
              <a className="text-cyan underline-offset-2 hover:underline" href={source.url} target="_blank" rel="noreferrer">
                {source.title}
              </a>
            </li>
          ))}
        </ul>
      </section>

      {related.length > 0 ? (
        <section className="mt-14">
          <h2 className="text-card rounded-[2rem] border border-white/10 px-6 py-5 font-display text-3xl">Keep exploring</h2>
          <div className="mt-5 grid gap-5 md:grid-cols-3">
            {related.slice(0, 3).map((item) => (
              <HardwareCard key={item.id} hardware={item} />
            ))}
          </div>
        </section>
      ) : null}
    </article>
  );
}
