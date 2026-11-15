import { DestinationView } from "@/components/DestinationView";
import { hardwareByDestination } from "@/data/catalog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Explore Mars",
  description: "Meet NASA’s five Mars rovers, from Sojourner in 1997 to Curiosity and Perseverance, which are still driving.",
};

export default async function MarsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  return (
    <DestinationView
      destination="Mars"
      eyebrow="Destination"
      title="Mars"
      lede="Five NASA rovers have driven on Mars. Sojourner proved it was possible. Spirit and Opportunity went quiet after long lives. Curiosity and Perseverance are still at work."
      image={{
        src: "https://images-assets.nasa.gov/image/PIA00407/PIA00407~medium.jpg",
        alt: "A global color view of Mars.",
        credit: "NASA",
      }}
      items={hardwareByDestination("Mars")}
      category={category}
    />
  );
}
