"use client";

import dynamic from "next/dynamic";

const ParticleField = dynamic(() => import("@/components/ParticleField").then((mod) => mod.ParticleField), {
  ssr: false,
});

const CursorRing = dynamic(() => import("@/components/CursorRing").then((mod) => mod.CursorRing), {
  ssr: false,
});

export function SiteExperience() {
  return (
    <>
      <ParticleField />
      <CursorRing />
    </>
  );
}
