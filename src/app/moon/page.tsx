import { DestinationView } from "@/components/DestinationView";
import { hardwareByDestination } from "@/data/catalog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Explore the Moon",
  description: "Visit the Apollo machines still on the Moon, from Eagle to the laser mirrors that still work.",
};

export default async function MoonPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  return (
    <DestinationView
      destination="Moon"
      eyebrow="Destination"
      title="The Moon"
      lede="Apollo crews left landers, science stations, and three cars on the lunar surface. Three mirror arrays, left by Apollo 11, 14, and 15, are still part of active science. The radios are not."
      image={{
        src: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e000868/GSFC_20171208_Archive_e000868~medium.jpg",
        alt: "The full Moon.",
        credit: "NASA/GSFC",
      }}
      items={hardwareByDestination("Moon")}
      category={category}
    />
  );
}
