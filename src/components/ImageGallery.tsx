"use client";

import type { HardwareImage } from "@/types/hardware";
import { imageLibraryUrl } from "@/lib/utils";
import { useState } from "react";

export function ImageGallery({ images }: { images: HardwareImage[] }) {
  const [active, setActive] = useState(0);
  const [failed, setFailed] = useState<Record<number, boolean>>({});
  const photo = images[active];
  const library = imageLibraryUrl(photo.nasaId);

  return (
    <figure className="space-y-3">
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-space-2">
        {failed[active] ? (
          <div className="flex aspect-[16/10] items-center justify-center px-6 text-center text-sm text-silver">
            This NASA image did not load. The credit and the library link are still below.
          </div>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={photo.src}
            alt={photo.alt}
            className="aspect-[16/10] w-full object-cover"
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={() => setFailed((current) => ({ ...current, [active]: true }))}
          />
        )}
      </div>
      <figcaption className="text-card rounded-2xl border border-white/10 px-4 py-3 text-sm leading-6 text-silver">
        {photo.alt} Credit: {photo.credit}.
        {library ? (
          <>
            {" "}
            <a className="text-cyan underline-offset-2 hover:underline" href={library} target="_blank" rel="noreferrer">
              NASA Image Library
            </a>
          </>
        ) : null}
      </figcaption>
      {images.length > 1 ? (
        <div className="flex gap-2" role="tablist" aria-label="Photographs">
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              role="tab"
              aria-selected={index === active}
              aria-label={`Show photograph ${index + 1}`}
              className={`h-16 w-24 overflow-hidden rounded-xl border ${
                index === active ? "border-cyan" : "border-white/15 opacity-80"
              }`}
              onClick={() => setActive(index)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={image.src} alt="" className="h-full w-full object-cover" referrerPolicy="no-referrer" />
            </button>
          ))}
        </div>
      ) : null}
    </figure>
  );
}
