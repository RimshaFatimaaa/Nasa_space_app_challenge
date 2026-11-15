export interface JourneyStop {
  href: string;
  label: string;
}

export const journey: JourneyStop[] = [
  { href: "/moon", label: "The Moon" },
  { href: "/hardware/eagle", label: "Eagle" },
  { href: "/hardware/easep", label: "EASEP" },
  { href: "/hardware/alsep", label: "ALSEP" },
  { href: "/hardware/lrv", label: "Lunar rover" },
  { href: "/hardware/retroreflector", label: "Retroreflectors" },
  { href: "/mars", label: "Mars" },
  { href: "/hardware/sojourner", label: "Sojourner" },
  { href: "/hardware/spirit", label: "Spirit" },
  { href: "/hardware/opportunity", label: "Opportunity" },
  { href: "/hardware/curiosity", label: "Curiosity" },
  { href: "/hardware/perseverance", label: "Perseverance" },
  { href: "/timeline", label: "Timeline" },
  { href: "/compare", label: "Compare" },
  { href: "/anatomy", label: "Anatomy" },
  { href: "/anatomy/lunar-module", label: "Lunar module" },
  { href: "/anatomy/mars-rover", label: "Rover anatomy" },
  { href: "/quiz", label: "Quiz" },
  { href: "/sources", label: "Sources" },
];
