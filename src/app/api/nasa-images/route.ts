import { NextRequest, NextResponse } from "next/server";
import { searchNasaImages } from "@/lib/nasa";

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get("q") ?? "";
  try {
    const images = await searchNasaImages(query);
    return NextResponse.json({ images });
  } catch {
    return NextResponse.json({
      images: [],
      error: "NASA’s image library did not respond. The photographs already on this page are still available.",
    });
  }
}
