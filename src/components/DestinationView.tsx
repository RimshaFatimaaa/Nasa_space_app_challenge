import { HardwareCard } from "@/components/HardwareCard";
import { StatusBadge } from "@/components/StatusBadge";
import type { Destination, Hardware } from "@/types/hardware";
import Link from "next/link";

export function DestinationView({
  destination,
  eyebrow,
  title,
  lede,
  image,
  items,
  category,
}: {
  destination: Destination;
  eyebrow: string;
  title: string;
  lede: string;
  image: { src: string; alt: string; credit: string };
  items: Hardware[];
  category?: string;
}) {
  const categories = ["All", ...Array.from(new Set(items.map((item) => item.category)))];
  const base = destination === "Moon" ? "/moon" : "/mars";
  const visible = category ? items.filter((item) => item.category === category) : items;
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <section className="bg-transparent">
        <div className="grid items-end gap-6 p-6 md:grid-cols-[1.15fr_0.85fr] md:p-10">
          <div id="destination-copy" className="justify-self-start">
            <p className="text-xs tracking-[0.18em] text-cyan uppercase">{eyebrow}</p>
            <h1 className="mt-3 font-display text-5xl leading-none md:text-6xl">{title}</h1>
            <p className="mt-4 max-w-xl text-lg leading-8 text-silver">{lede}</p>
            <p className="mt-4 max-w-md text-sm text-cyan">Move your cursor through the particle model. It follows you, then pulls itself back together.</p>
          </div>
          <figure id="destination-photo" className="justify-self-start md:justify-self-end">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={image.src} alt={image.alt} className="h-28 w-28 rounded-full object-cover ring-2 ring-white/20" />
            <figcaption className="mt-2 text-xs text-silver">{image.credit}</figcaption>
          </figure>
        </div>
      </section>

      <div className="mt-6 flex flex-wrap items-center gap-2" aria-label="Status labels">
        <StatusBadge status="Still working" />
        <StatusBadge status="Mission ended" />
        <StatusBadge status="Left behind" />
      </div>
      <p className="mt-2 max-w-xl text-xs leading-5 text-silver">
        Still working means it is doing its job now. Mission ended means NASA finished that rover’s work. Left behind means Apollo hardware that stayed on the Moon.
      </p>

      <nav className="mt-8 flex flex-wrap gap-2" aria-label="Hardware categories">
        {categories.map((item) => {
          const href = item === "All" ? base : `${base}?category=${encodeURIComponent(item)}`;
          const active = item === "All" ? !category : category === item;
          return (
            <Link
              key={item}
              href={href}
              aria-current={active ? "page" : undefined}
              className={`btn rounded-full px-4 py-2 text-sm ${active ? "bg-star text-space" : "border border-white/15 text-silver"}`}
            >
              {item}
            </Link>
          );
        })}
      </nav>

      {visible.length === 0 ? (
        <p className="text-card mt-8 rounded-2xl border border-white/10 px-4 py-3 text-silver">No machines match that category. Choose All to see the full exhibit.</p>
      ) : (
        <ul className={`mt-8 grid gap-5 ${visible.length === 1 ? "mx-auto max-w-xl" : "md:grid-cols-2"}`}>
          {visible.map((hardware, index) => (
            <li key={hardware.id}>
              <HardwareCard hardware={hardware} index={index + 1} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
