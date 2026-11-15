"use client";

import { comparePresets } from "@/data/comparisons";
import Link from "next/link";
import { useEffect, useState } from "react";

export function ComparisonExplorer() {
  const [presetId, setPresetId] = useState(comparePresets[0].id);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (comparePresets.some((preset) => preset.id === hash)) {
      setPresetId(hash);
    }
  }, []);

  const preset = comparePresets.find((item) => item.id === presetId) ?? comparePresets[0];

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Comparisons">
        {comparePresets.map((item) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={item.id === preset.id}
            className={`rounded-full px-4 py-2 text-sm ${
              item.id === preset.id ? "bg-star text-space" : "border border-white/15 text-silver"
            }`}
            onClick={() => {
              setPresetId(item.id);
              history.replaceState(null, "", `#${item.id}`);
            }}
          >
            {item.tab}
          </button>
        ))}
      </div>
      <p className="text-card max-w-3xl rounded-3xl border border-white/10 p-5 text-base leading-7 text-silver">{preset.summary}</p>
      <div className={`grid gap-4 ${preset.columns.length > 2 ? "lg:grid-cols-3" : "lg:grid-cols-2"}`}>
        {preset.columns.map((column) => (
          <article key={column.name} className="exhibit-card rounded-3xl border border-white/10 p-4">
            {column.image ? (
              <figure className="mb-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={column.image.src}
                  alt={column.image.alt}
                  className="aspect-[16/9] w-full rounded-2xl object-cover"
                  referrerPolicy="no-referrer"
                />
                <figcaption className="mt-2 text-xs text-silver">
                  {column.image.nasaId ? (
                    <a
                      className="text-cyan underline-offset-2 hover:underline"
                      href={`https://images.nasa.gov/details/${column.image.nasaId}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {column.image.credit}
                    </a>
                  ) : (
                    column.image.credit
                  )}
                </figcaption>
              </figure>
            ) : null}
            <h3 className="font-display text-2xl">{column.name}</h3>
            {column.href ? (
              <Link href={column.href} className="text-sm text-cyan">
                Open profile
              </Link>
            ) : null}
          </article>
        ))}
      </div>
      <p className="text-sm text-silver sm:hidden">Swipe the table sideways to see every column.</p>
      <div className="text-card overflow-x-auto rounded-3xl border border-white/10">
        <table className="w-full min-w-[720px] border-collapse text-left text-sm">
          <caption className="sr-only">{preset.title}</caption>
          <thead className="bg-white/5">
            <tr>
              <th scope="col" className="px-4 py-3 font-medium text-silver">Attribute</th>
              {preset.columns.map((column) => (
                <th key={column.name} scope="col" className="px-4 py-3 font-display text-base text-star">
                  {column.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {preset.columns[0].fields.map((field, rowIndex) => (
              <tr key={field.label} className="border-t border-white/10 align-top">
                <th scope="row" className="px-4 py-3 font-medium text-silver">{field.label}</th>
                {preset.columns.map((column) => {
                  const cell = column.fields[rowIndex];
                  return (
                    <td
                      key={column.name}
                      className={`px-4 py-3 leading-6 ${cell?.highlight ? "bg-cyan/10 text-star" : "text-star/90"}`}
                    >
                      {cell?.value}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-card rounded-2xl border border-white/10 px-4 py-3 text-sm text-silver">Highlighted cells are the difference worth noticing. Distances for working rovers keep changing.</p>
    </div>
  );
}
