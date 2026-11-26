import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { connection } from "next/server";
import { notFound } from "next/navigation";
import { getMovieDetails } from "@/lib/tmdb-extra";
import { FavoriteButton } from "@/components/movies/FavoriteButton";

type Props = { params: Promise<{ id: string }> };
export const metadata: Metadata = { title: "Detalles de película" };

async function Details({ params }: Props) {
  await connection();
  const { id } = await params;
  const numericId = Number(id);
  if (!Number.isSafeInteger(numericId) || numericId <= 0) notFound();
  let movie;
  try { movie = await getMovieDetails(numericId); }
  catch (error) {
    if (error instanceof Error && error.message === "TMDB_HTTP_404") notFound();
    throw error;
  }
  const poster = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : null;
  return <section className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-12">
    <Link href="/discover" className="mb-10 inline-block text-sm text-highlight hover:underline">← Volver a explorar</Link>
    <div className="grid gap-10 md:grid-cols-[minmax(220px,350px)_1fr]">
      <div className="relative aspect-[2/3] max-w-sm overflow-hidden rounded-sm border border-border bg-surface">
        {poster ? <Image src={poster} alt={`Póster de ${movie.title}`} fill sizes="(max-width:768px) 90vw, 350px" className="object-cover" priority /> : <p className="p-10 text-muted">Póster no disponible</p>}
      </div>
      <div>
        <p className="mb-4 text-xs uppercase tracking-widest text-highlight">Film / Details</p>
        <h1 className="font-display text-5xl leading-tight sm:text-7xl">{movie.title}</h1>
        {movie.tagline && <p className="mt-3 italic text-highlight">{movie.tagline}</p>}
        <p className="mt-6 text-sm text-muted">{movie.release_date || "Sin fecha"} · {movie.runtime ? `${movie.runtime} min` : "Duración no disponible"} · ★ {movie.vote_count ? movie.vote_average.toFixed(1) : "N/D"}</p>
        <p className="mt-4 text-sm text-highlight">{movie.genres.map(g => g.name).join(" · ")}</p>
        <h2 className="font-display mt-12 text-3xl">Sinopsis</h2>
        <p className="mt-4 max-w-2xl leading-8 text-muted">{movie.overview || "Sin sinopsis disponible en este idioma."}</p>
        <div className="mt-10"><FavoriteButton movie={movie} /></div>
      </div>
    </div>
  </section>;
}
export default function MoviePage({ params }: Props) {
  return <Suspense fallback={<p className="mx-auto w-full max-w-7xl px-5 py-20 text-muted">Cargando ficha de película…</p>}><Details params={params} /></Suspense>;
}
