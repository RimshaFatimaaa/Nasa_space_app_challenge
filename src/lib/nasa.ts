export interface NasaSearchImage {
  src: string;
  title: string;
  nasaId: string;
}

interface NasaSearchResponse {
  collection?: {
    items?: Array<{
      data?: Array<{
        nasa_id?: string;
        title?: string;
      }>;
    }>;
  };
}

export async function searchNasaImages(query: string): Promise<NasaSearchImage[]> {
  const trimmed = query.trim().slice(0, 80);
  if (!trimmed) return [];

  const endpoint = new URL("https://images-api.nasa.gov/search");
  endpoint.searchParams.set("q", trimmed);
  endpoint.searchParams.set("media_type", "image");

  const response = await fetch(endpoint, {
    signal: AbortSignal.timeout(8000),
    next: { revalidate: 60 * 60 * 24 },
  });
  if (!response.ok) {
    throw new Error("NASA image search failed");
  }

  const payload = (await response.json()) as NasaSearchResponse;
  const images: NasaSearchImage[] = [];

  for (const item of payload.collection?.items ?? []) {
    const meta = item.data?.[0];
    const nasaId = meta?.nasa_id;
    if (!nasaId || !meta?.title) continue;
    images.push({
      nasaId,
      title: meta.title,
      src: `https://images-assets.nasa.gov/image/${nasaId}/${nasaId}~thumb.jpg`,
    });
    if (images.length === 6) break;
  }

  return images;
}
