import type { Hardware } from "@/types/hardware";
import Link from "next/link";
import { StatusBadge } from "@/components/StatusBadge";

function firstSentence(text: string) {
  const end = text.search(/[.!?](\s|$)/);
  return end === -1 ? text : text.slice(0, end + 1);
}

export function HardwareCard({ hardware, index }: { hardware: Hardware; index?: number }) {
  const photo = hardware.images[0];
  return (
    <Link href={`/hardware/${hardware.id}`} className="exhibit-card block h-full cursor-pointer overflow-hidden rounded-3xl border border-white/10">
        <div className="relative aspect-[16/10] bg-space-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photo.src}
            alt={photo.alt}
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-space to-transparent" />
          {typeof index === "number" ? (
            <span className="absolute top-3 left-3 rounded-full bg-space/80 px-2 py-1 font-display text-xs">
              {String(index).padStart(2, "0")}
            </span>
          ) : null}
        </div>
        <div className="space-y-3 p-5">
          <div className="flex flex-wrap items-center gap-2">
            <StatusBadge status={hardware.status} />
            <span className="text-xs tracking-wide text-silver uppercase">{hardware.destination}</span>
          </div>
          <h3 className="font-display text-2xl leading-tight">{hardware.name}</h3>
          <p className="text-sm text-silver">{hardware.mission}</p>
          <p className="text-sm leading-6 text-star/90">{firstSentence(hardware.overview)}</p>
          <p className="text-sm font-medium text-cyan">Read more</p>
        </div>
    </Link>
  );
}
