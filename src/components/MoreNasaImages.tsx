"use client";

import type { NasaSearchImage } from "@/lib/nasa";
import { useState } from "react";

export function MoreNasaImages({ query }: { query: string }) {
  const [images, setImages] = useState<NasaSearchImage[] | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function load() {
    setLoading(true);
    setMessage(null);
    const controller = new AbortController();
    const timer = window.setTimeout(() => controller.abort(), 8000);
    try {
      const response = await fetch(`/api/nasa-images?q=${encodeURIComponent(query)}`, { signal: controller.signal });
      const payload = (await response.json()) as { images?: NasaSearchImage[]; error?: string };
      setImages(payload.images ?? []);
      if (payload.error || !response.ok) setMessage("Couldn’t load more photos. Try again.");
      else if (!payload.images?.length) setMessage("NASA’s library returned no extra images for this search.");
    } catch {
      setImages([]);
      setMessage("Couldn’t load more photos. Try again.");
    } finally {
      window.clearTimeout(timer);
      setLoading(false);
    }
  }

  return (
    <div className="space-y-3">
      <button
        type="button"
        onClick={load}
        disabled={loading}
        className="rounded-full border border-cyan/40 px-4 py-2 text-sm text-cyan disabled:opacity-60"
      >
        {loading ? "Searching NASA’s library…" : "Load more NASA images"}
      </button>
      {message ? <p className="text-card rounded-2xl border border-white/10 px-4 py-3 text-sm text-silver">{message}</p> : null}
      {images && images.length > 0 ? (
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {images.map((image) => (
            <li key={image.nasaId} className="overflow-hidden rounded-2xl border border-white/10">
              <a href={`https://images.nasa.gov/details/${encodeURIComponent(image.nasaId)}`} target="_blank" rel="noreferrer">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={image.src}
                  alt={image.title}
                  className="aspect-square w-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <span className="block p-2 text-xs leading-5 text-silver">{image.title}</span>
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
