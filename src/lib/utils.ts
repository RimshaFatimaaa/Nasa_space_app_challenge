import type { HardwareStatus } from "@/types/hardware";

export function statusTone(status: HardwareStatus): string {
  switch (status) {
    case "Still working":
      return "border-[#3dd68c]/50 bg-[#3dd68c]/15 text-[#8ef0c0]";
    case "Mission ended":
      return "border-mars/50 bg-mars/15 text-[#ffb59a]";
    case "Left behind":
      return "border-sand/50 bg-sand/10 text-sand";
  }
}

export function destinationTone(destination: "Moon" | "Mars"): string {
  return destination === "Moon" ? "text-silver" : "text-mars";
}

export function imageLibraryUrl(nasaId?: string): string | undefined {
  if (!nasaId) return undefined;
  return `https://images.nasa.gov/details/${encodeURIComponent(nasaId)}`;
}
