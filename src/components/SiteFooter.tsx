import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="text-card mt-20 border-t border-white/10">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-xl">Beyond Earth</p>
          <p className="mt-2 max-w-md text-sm leading-6 text-silver">
            Every machine has a story. Every discovery has a legacy. Explore the machines that helped humanity reach beyond Earth.
          </p>
        </div>
        <div>
          <p className="text-xs tracking-[0.16em] text-cyan uppercase">Explore</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link className="hover:text-cyan" href="/moon">Explore the Moon</Link></li>
            <li><Link className="hover:text-cyan" href="/mars">Explore Mars</Link></li>
            <li><Link className="hover:text-cyan" href="/timeline">Timeline</Link></li>
            <li><Link className="hover:text-cyan" href="/compare">Compare</Link></li>
            <li><Link className="hover:text-cyan" href="/quiz">Quiz</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-xs tracking-[0.16em] text-cyan uppercase">Credits</p>
          <ul className="mt-3 space-y-2 text-sm text-silver">
            <li>Photographs: NASA and NASA/JPL-Caltech</li>
            <li>Facts: NASA Science, NSSDC, and NTRS</li>
            <li><Link className="text-star hover:text-cyan" href="/sources">Sources, image credits, and AI disclosure</Link></li>
          </ul>
        </div>
      </div>
      <p className="border-t border-white/10 px-4 pt-4 text-center text-sm text-silver">Made by Rimsha Fatima</p>
      <p className="px-4 py-4 text-center text-xs text-silver/80">
        An educational NASA Space Apps project. Not an official NASA website. Student explanations are simplified. The linked NASA pages are the record.
      </p>
    </footer>
  );
}
