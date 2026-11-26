import { connection } from "next/server";
import { getPopularMovies } from "@/lib/tmdb";
import { MovieCard } from "./MovieCard";
import type { MovieListResponse } from "@/types/movie";

export async function PopularMovies() {
    await connection();
    let data: MovieListResponse | null = null;

    try {
        data = await getPopularMovies();
    } catch (error) {
        console.error(
        "Error al obtener películas populares:",
        error
        );
    }

    // Estado de error
    if (!data) {
        return (
        <div
            role="alert"
            className="rounded-sm border border-accent/40 bg-surface p-6"
        >
            <h3 className="font-display text-xl">
            No pudimos cargar las películas.
            </h3>

            <p className="mt-2 text-sm leading-6 text-muted">
            Comprueba tu conexión e inténtalo de nuevo más tarde.
            </p>
        </div>
        );
    }

    // Estado vacío
    if (data.results.length === 0) {
        return (
        <p className="py-10 text-muted">
            No hay películas disponibles en este momento.
        </p>
        );
    }

    // Estado exitoso
    return (
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 lg:gap-x-6">
        {data.results.slice(0, 8).map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
        ))}
        </div>
    );
}