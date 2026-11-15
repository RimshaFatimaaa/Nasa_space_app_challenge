import { BadgeShelf } from "@/components/BadgeShelf";
import { HardwareCard } from "@/components/HardwareCard";
import { Reveal } from "@/components/Reveal";
import { allHardware, destinationCount, instrumentCount } from "@/data/catalog";
import { timelineEvents } from "@/data/timeline";
import Link from "next/link";

const featuredIds = ["perseverance", "curiosity", "opportunity"];

export default function HomePage() {
  const featured = featuredIds
    .map((id) => allHardware.find((item) => item.id === id))
    .filter((item) => item !== undefined);
  const preview = timelineEvents.filter((event) =>
    ["apollo-11", "sojourner-1997", "curiosity-2012", "record-2026"].includes(event.id),
  );

  return (
    <div>
      <div id="story-track">
        <section className="mx-auto flex min-h-[100svh] max-w-6xl items-end px-4 pb-28 md:items-center md:pb-0">
          <Reveal>
            <p className="text-xs tracking-[0.2em] text-cyan uppercase">NASA Space Apps · Educational exhibit</p>
            <p className="mt-2 text-xs tracking-[0.16em] text-silver uppercase">For ages 8–16</p>
            <h1 className="mt-4 font-display text-6xl leading-[0.9] md:text-7xl">Beyond Earth</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-star/90">
              Some machines never came home. Since the 1960s, NASA has left them on the Moon and Mars. Meet them, and find out what they discovered.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/moon" className="btn rounded-full border border-cyan px-5 py-3 font-medium text-cyan">
                Explore the Moon
              </Link>
              <Link href="/mars" className="btn rounded-full bg-cyan px-5 py-3 font-medium text-space">
                Explore Mars
              </Link>
            </div>
          </Reveal>
        </section>
        <section className="mx-auto flex min-h-[100svh] max-w-6xl items-center px-4">
          <div className="max-w-lg">
            <p className="text-xs tracking-[0.18em] text-cyan uppercase">Scroll · Moon</p>
            <h2 className="mt-3 font-display text-5xl">A world that still answers</h2>
            <p className="mt-4 text-lg leading-8 text-silver">
              The silver cloud is the Moon. Apollo left a lander, science stations, and three cars there. The radios are off. The laser mirrors still send light home.
            </p>
            <Link href="/moon" className="btn mt-6 inline-flex rounded-full border border-cyan/50 px-4 py-2 text-sm text-cyan">
              Enter the Moon exhibit
            </Link>
          </div>
        </section>
        <section className="mx-auto flex min-h-[100svh] max-w-6xl items-center px-4">
          <div className="max-w-lg">
            <p className="text-xs tracking-[0.18em] text-mars uppercase">Scroll · Mars</p>
            <h2 className="mt-3 font-display text-5xl">The orange planet</h2>
            <p className="mt-4 text-lg leading-8 text-silver">
              The particles pull into Mars. Five NASA rovers have driven there. Two of them are still moving.
            </p>
            <p className="mt-2 text-xs text-silver">As of November 2026.</p>
            <Link href="/mars" className="btn mt-6 inline-flex rounded-full border border-cyan/50 px-4 py-2 text-sm text-cyan">
              Enter the Mars exhibit
            </Link>
          </div>
        </section>
        <section className="mx-auto flex min-h-[100svh] max-w-6xl items-center px-4">
          <div className="max-w-lg">
            <p className="text-xs tracking-[0.18em] text-cyan uppercase">Scroll · Rover</p>
            <h2 className="mt-3 font-display text-5xl">Break it apart</h2>
            <p className="mt-4 text-lg leading-8 text-silver">
              Sweep the cursor across the rover. The points scatter and fall back together. On the next pages, the model changes with the machine you are reading about.
            </p>
            <Link href="/hardware/perseverance" className="btn mt-6 inline-flex rounded-full border border-cyan/50 px-4 py-2 text-sm text-cyan">
              Open Perseverance
            </Link>
          </div>
        </section>
      </div>

      <div className="bg-space">
      <section className="mx-auto max-w-6xl px-4">
        <Reveal>
          <div className="text-card grid gap-4 rounded-[2rem] border border-white/10 p-6 md:grid-cols-3">
            <Stat value={String(allHardware.length)} label="Hardware profiles" />
            <Stat value={String(destinationCount)} label="Destinations" />
            <Stat value={String(instrumentCount)} label="Instruments and tools explained" />
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <Reveal>
          <div className="text-card rounded-[2rem] border border-white/10 p-6">
            <p className="text-xs tracking-[0.18em] text-cyan uppercase">Start here</p>
            <h2 className="mt-2 font-display text-4xl">Two worlds, ten machines</h2>
            <p className="mt-3 max-w-2xl leading-7 text-silver">
              The Moon collection includes a lander, science stations, a car the astronauts drove, and mirrors that still reflect lasers. The Mars collection follows five rovers, from a 23-pound pioneer to a car-sized sample collector that is still driving.
            </p>
          </div>
        </Reveal>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {featured.map((hardware, index) => (
            <HardwareCard key={hardware.id} hardware={hardware} index={index + 1} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-8">
        <div className="text-card flex items-end justify-between gap-4 rounded-[2rem] border border-white/10 px-6 py-5">
          <h2 className="font-display text-4xl">A short timeline</h2>
          <Link href="/timeline" className="btn rounded-full border border-cyan/40 px-3 py-1.5 text-sm text-cyan">Open the full timeline</Link>
        </div>
        <ol className="mt-6 grid gap-4 md:grid-cols-4">
          {preview.map((event) => (
            <li key={event.id} className="text-card rounded-3xl border border-white/10 p-4">
              <p className="font-display text-cyan">{event.year}</p>
              <p className="mt-2 font-display text-xl leading-tight">{event.title}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <BadgeShelf />
        <p className="text-card mt-4 rounded-2xl border border-white/10 px-4 py-3 text-sm text-silver">
          Earn badges by visiting machines and finishing the <Link className="text-cyan" href="/quiz">quiz</Link>.
        </p>
      </section>
      </div>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-display text-5xl">{value}</p>
      <p className="mt-1 text-sm text-silver">{label}</p>
    </div>
  );
}
