"use client";

import { useEffect, useRef } from "react";

export function CursorRing() {
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ring = ringRef.current;
    if (!fine || !ring || reduce) return;
    const node = ring;

    document.body.classList.add("has-cursor-ring");

    function move(event: PointerEvent) {
      node.style.opacity = "1";
      node.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
      const target = event.target as HTMLElement | null;
      const hot = Boolean(target?.closest("a, button, summary, input, select, textarea"));
      node.dataset.hot = hot ? "true" : "false";
    }

    window.addEventListener("pointermove", move);
    return () => {
      document.body.classList.remove("has-cursor-ring");
      window.removeEventListener("pointermove", move);
    };
  }, []);

  return (
    <div
      ref={ringRef}
      aria-hidden="true"
      className="cursor-ring pointer-events-none fixed top-0 left-0 z-[60] hidden opacity-0 md:block"
    />
  );
}
