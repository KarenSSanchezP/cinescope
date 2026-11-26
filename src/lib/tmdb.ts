import type { MovieListResponse } from "@/types/movie";

const TMDB_BASE_URL = "https://api.themoviedb.org/3";

export class TMDBError extends Error {
    constructor(message: string, public status?: number) {
        super(message);
        this.name = "TMDBError";
    }
}

export async function getPopularMovies(
    page: number = 1
    ): Promise<MovieListResponse> {
    const token = process.env.TMDB_ACCESS_TOKEN;

    if (!token) {
        throw new TMDBError(
        "No se ha configurado TMDB_ACCESS_TOKEN."
        );
    }

    if (!Number.isInteger(page) || page < 1 || page > 500) {
        throw new TMDBError(
        "El número de página debe estar entre 1 y 500.",
        400
        );
    }

    const url = new URL(`${TMDB_BASE_URL}/movie/popular`);

    url.searchParams.set("language", "es-ES");
    url.searchParams.set("page", String(page));

    let response: Response;

    try {
        response = await fetch(url, {
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
        },
        cache: "no-store",
        signal: AbortSignal.timeout(10000),
        });
    
    } catch (error) {
    console.error("Error de conexión con TMDB:", error);

    if (error instanceof Error) {
        console.error("Causa:", error.cause);
    }

    throw new TMDBError(
        "No fue posible establecer conexión con TMDB.",
        502
    );
    }


    if (!response.ok) {
        throw new TMDBError(
        `TMDB respondió con el estado ${response.status}.`,
        response.status
        );
    }

    const data: unknown = await response.json();

    if (
        typeof data !== "object" ||
        data === null ||
        !("results" in data) ||
        !Array.isArray(data.results)
    ) {
        throw new TMDBError(
        "La respuesta de TMDB no contiene una lista válida.",
        502
        );
    }

    return data as MovieListResponse;
}