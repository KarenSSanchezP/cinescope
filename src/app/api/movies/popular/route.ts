import { NextRequest, NextResponse } from "next/server";

import { getPopularMovies, TMDBError } from "@/lib/tmdb";

export async function GET(request: NextRequest) {
    const rawPage = request.nextUrl.searchParams.get("page");
    const page = rawPage === null ? 1 : Number(rawPage);

    if (
        !Number.isInteger(page) ||
        page < 1 ||
        page > 500
    ) {
        return NextResponse.json(
        { error: "Número de página inválido." },
        { status: 400 }
        );
    }

    try {
        const data = await getPopularMovies(page);

        return NextResponse.json(data);
    } catch (error) {
        console.error("Error en /api/movies/popular:", error);

        const status =
        error instanceof TMDBError && error.status === 400
            ? 400
            : 502;

        return NextResponse.json(
        { error: "No se pudieron obtener las películas." },
        { status }
        );
    }
}