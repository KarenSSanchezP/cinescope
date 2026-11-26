import { NextRequest, NextResponse } from "next/server";
import { discoverMovies, listGenres, searchMovies } from "@/lib/tmdb-extra";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const type = searchParams.get("type") ?? "discover";
  const query = (searchParams.get("query") ?? "").trim().slice(0, 100);
  const genre = searchParams.get("genre") ?? "";
  try {
    if (type === "genres") return NextResponse.json(await listGenres());
    if (type === "search") {
      if (!query) return NextResponse.json({ page: 1, results: [], total_pages: 0, total_results: 0 });
      return NextResponse.json(await searchMovies(query));
    }
    if (type === "discover") {
      if (genre && !/^\d+$/.test(genre)) return NextResponse.json({ error: "Género inválido" }, { status: 400 });
      return NextResponse.json(await discoverMovies(genre));
    }
    return NextResponse.json({ error: "Consulta inválida" }, { status: 400 });
  } catch (error) {
    console.error("Error consultando catálogo TMDB:", error);
    return NextResponse.json({ error: "No se pudo consultar el catálogo" }, { status: 502 });
  }
}
