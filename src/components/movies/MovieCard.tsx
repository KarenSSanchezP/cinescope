
import Image from "next/image";

import type { Movie } from "@/types/movie";

interface MovieCardProps {
    movie: Movie;
}

export function MovieCard({ movie }: MovieCardProps) {
    const posterUrl = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : null;

    const year = movie.release_date
        ? movie.release_date.slice(0, 4)
        : "Sin fecha";

    const rating =
        movie.vote_count > 0
        ? movie.vote_average.toFixed(1)
        : "N/D";

    return (
        <article className="group min-w-0">
        <div className="relative aspect-[2/3] overflow-hidden rounded-sm border border-border bg-surface">
            {posterUrl ? (
            <Image
                src={posterUrl}
                alt={`Póster de ${movie.title}`}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-300 group-hover:scale-[1.04]"
            />
            ) : (
            <div className="flex h-full items-center justify-center p-5 text-center">
                <span className="font-display text-xl text-muted">
                Póster no disponible
                </span>
            </div>
            )}

            <span className="absolute bottom-3 left-3 rounded-sm bg-background/90 px-2 py-1 text-xs font-semibold text-highlight">
            ★ {rating}
            </span>
        </div>

        <div className="mt-4">
            <h3 className="font-display line-clamp-2 text-xl leading-tight text-foreground">
            {movie.title}
            </h3>

            <p className="mt-2 text-xs uppercase tracking-[0.12em] text-muted">
            {year}
            </p>
        </div>
        </article>
    );
}