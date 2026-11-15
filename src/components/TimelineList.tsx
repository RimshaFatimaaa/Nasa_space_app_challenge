"use client";

import { timelineEvents } from "@/data/timeline";
import { markTimeline } from "@/lib/progress";
import Link from "next/link";

export function TimelineList() {
  return (
    <ol className="relative space-y-4 border-l border-cyan/30 pl-6">
      {timelineEvents.map((event) => (
        <li key={event.id} className="relative">
          <span className="absolute top-5 -left-[31px] h-3 w-3 rounded-full border border-cyan bg-space" aria-hidden="true" />
          <details
            className="exhibit-card rounded-3xl border border-white/10"
            onToggle={(toggleEvent) => {
              if (toggleEvent.currentTarget.open) markTimeline(event.id);
            }}
          >
            <summary className="cursor-pointer list-none px-5 py-4">
              <span className="font-display text-sm tracking-[0.14em] text-cyan">{event.year}</span>
              <span className="mt-1 block font-display text-2xl">{event.title}</span>
              <span className="mt-1 block text-sm text-silver">{event.date}</span>
            </summary>
            <div className="grid gap-4 border-t border-white/10 px-5 py-4 md:grid-cols-[1fr_220px]">
              <div className="space-y-3 text-sm leading-6">
                <p><span className="text-silver">Mission. </span>{event.mission}</p>
                <p><span className="text-silver">Equipment. </span>{event.equipment}</p>
                <p><span className="text-silver">Purpose. </span>{event.purpose}</p>
                <p><span className="text-silver">What happened. </span>{event.achievement}</p>
                {event.hardwareId ? (
                  <Link className="inline-block text-cyan" href={`/hardware/${event.hardwareId}`}>
                    Open the machine profile
                  </Link>
                ) : null}
              </div>
              {event.image ? (
                <figure>
                  {event.hardwareId ? (
                    <Link href={`/hardware/${event.hardwareId}`} className="block">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={event.image.src}
                        alt={event.image.alt}
                        className="aspect-[4/3] w-full rounded-2xl object-cover"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                    </Link>
                  ) : (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={event.image.src}
                      alt={event.image.alt}
                      className="aspect-[4/3] w-full rounded-2xl object-cover"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                  )}
                  <figcaption className="mt-2 text-xs text-silver">{event.image.credit}</figcaption>
                </figure>
              ) : null}
            </div>
          </details>
        </li>
      ))}
    </ol>
  );
}
