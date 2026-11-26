"use client";
import Link from "next/link";
import Image from "next/image";
import type { Movie } from "@/types/movie";

export function CatalogGrid({ movies }: { movies: Movie[] }) {
  if (!movies.length) return <p className="rounded border border-border p-8 text-muted">No hay resultados para mostrar.</p>;
  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
      {movies.map((movie) => (
        <Link href={`/movies/${movie.id}`} key={movie.id} className="group min-w-0 focus-visible:rounded-sm" aria-label={`Ver detalles de ${movie.title}`}>
          <div className="relative aspect-[2/3] overflow-hidden rounded-sm border border-border bg-surface">
            {movie.poster_path ? (
              <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`Póster de ${movie.title}`} fill sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 25vw" className="object-cover transition-transform group-hover:scale-105" />
            ) : <div className="flex h-full items-center justify-center p-4 text-center text-sm text-muted">Sin póster</div>}
            <span className="absolute bottom-2 left-2 rounded bg-background/90 px-2 py-1 text-xs text-highlight">★ {movie.vote_count ? movie.vote_average.toFixed(1) : "N/D"}</span>
          </div>
          <h3 className="font-display mt-3 text-lg leading-snug group-hover:text-highlight">{movie.title}</h3>
          <p className="mt-1 text-xs text-muted">{movie.release_date?.slice(0,4) || "Sin fecha"}</p>
        </Link>
      ))}
    </div>
  );
}
