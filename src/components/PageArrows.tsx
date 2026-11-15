"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const TRAIL = "beyond-earth-trail";

const navPages = new Set(["/", "/moon", "/mars", "/timeline", "/compare", "/anatomy", "/quiz", "/sources"]);

function readTrail(): string[] {
  try {
    const raw = sessionStorage.getItem(TRAIL);
    const parsed = raw ? (JSON.parse(raw) as unknown) : [];
    return Array.isArray(parsed) ? parsed.filter((item): item is string => typeof item === "string") : [];
  } catch {
    return [];
  }
}

function writeTrail(trail: string[]) {
  sessionStorage.setItem(TRAIL, JSON.stringify(trail.slice(-30)));
}

export function PageArrows() {
  const pathname = usePathname();
  const router = useRouter();
  const [canBack, setCanBack] = useState(false);

  useEffect(() => {
    const trail = readTrail();
    if (trail[trail.length - 1] !== pathname) {
      trail.push(pathname);
      writeTrail(trail);
    }
    setCanBack(!navPages.has(pathname) && trail.length > 1);
  }, [pathname]);

  useEffect(() => {
    if (!canBack) return;

    function onKey(event: KeyboardEvent) {
      const target = event.target as HTMLElement | null;
      const tag = target?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || target?.isContentEditable) return;
      if (event.key !== "ArrowLeft") return;
      event.preventDefault();
      const trail = readTrail();
      if (trail[trail.length - 1] === pathname) trail.pop();
      const previous = trail[trail.length - 1];
      if (!previous) return;
      writeTrail(trail);
      router.push(previous);
    }

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [canBack, pathname, router]);

  if (!canBack) return null;

  return (
    <button
      type="button"
      aria-label="Back to the previous page"
      onClick={() => {
        const trail = readTrail();
        if (trail[trail.length - 1] === pathname) trail.pop();
        const previous = trail[trail.length - 1];
        if (!previous) return;
        writeTrail(trail);
        router.push(previous);
      }}
      className="inline-flex h-8 w-8 items-center justify-center rounded-full text-base leading-none text-silver"
    >
      ←
    </button>
  );
}
