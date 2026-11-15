"use client";

import { PageArrows } from "@/components/PageArrows";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/moon", label: "Moon" },
  { href: "/mars", label: "Mars" },
  { href: "/timeline", label: "Timeline" },
  { href: "/compare", label: "Compare" },
  { href: "/anatomy", label: "Anatomy" },
  { href: "/quiz", label: "Quiz" },
  { href: "/sources", label: "Sources" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-space/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <div className="flex items-center gap-2">
          <PageArrows />
          <Link href="/" className="min-w-0 truncate font-display text-lg leading-none text-star" onClick={() => setOpen(false)}>
            Beyond Earth
          </Link>
        </div>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {links.map((link) => {
            const active = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`btn rounded-full px-3 py-1.5 text-sm ${
                  active ? "bg-white/10 text-star" : "text-silver hover:bg-white/10 hover:text-star"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <button
          type="button"
          className="btn inline-flex shrink-0 items-center gap-2 rounded-full border border-white/15 px-3 py-2 text-sm lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" size={18} /> : <Menu aria-hidden="true" size={18} />}
          Menu
        </button>
      </div>
      {open ? (
        <nav id="mobile-nav" className="border-t border-white/10 px-4 py-3 lg:hidden" aria-label="Mobile">
          <ul className="grid gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="btn block rounded-xl px-3 py-3 text-base hover:bg-white/10"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
