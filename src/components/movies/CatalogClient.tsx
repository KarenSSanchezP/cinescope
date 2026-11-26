"use client";
import { useEffect, useState } from "react";
import type { Movie, MovieListResponse } from "@/types/movie";
import type { Genre } from "@/lib/tmdb-extra";
import { CatalogGrid } from "./CatalogGrid";

export function CatalogClient({ mode }: { mode: "search" | "discover" }) {
  const [query, setQuery] = useState("");
  const [genre, setGenre] = useState("");
  const [genres, setGenres] = useState<Genre[]>([]);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(mode === "discover");
  const [error, setError] = useState("");

  useEffect(() => {
    if (mode !== "discover") return;
    const controller = new AbortController();
    fetch("/api/movies/catalog?type=genres", { signal: controller.signal })
      .then(r => { if (!r.ok) throw new Error("Géneros no disponibles"); return r.json() as Promise<Genre[]>; })
      .then(setGenres)
      .catch(e => { if (!controller.signal.aborted) console.error(e); });
    return () => controller.abort();
  }, [mode]);

  useEffect(() => {
    const controller = new AbortController();
    if (mode === "search" && !query.trim()) return;
    const timer = window.setTimeout(async () => {
      setLoading(true); setError("");
      try {
        const params = new URLSearchParams({ type: mode });
        if (mode === "search") params.set("query", query.trim());
        if (mode === "discover" && genre) params.set("genre", genre);
        const response = await fetch(`/api/movies/catalog?${params}`, { signal: controller.signal });
        if (!response.ok) throw new Error("No pudimos obtener las películas.");
        const result = (await response.json()) as MovieListResponse;
        if (!controller.signal.aborted) setMovies(result.results);
      } catch {
        if (!controller.signal.aborted) setError("Hubo un problema al consultar TMDB. Inténtalo de nuevo.");
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }, mode === "search" ? 350 : 0);
    return () => { controller.abort(); window.clearTimeout(timer); };
  }, [mode, query, genre]);

  return (
    <div>
      {mode === "search" ? (
        <div className="mb-10 max-w-xl">
          <label htmlFor="movie-search" className="mb-3 block text-sm text-highlight">Título de la película</label>
          <input id="movie-search" type="search" value={query} onChange={e => setQuery(e.target.value)} placeholder="Ej. Interstellar" className="w-full rounded-sm border border-border bg-surface px-4 py-3 text-foreground placeholder:text-muted focus:outline-none" />
        </div>
      ) : (
        <div className="mb-10 max-w-sm">
          <label htmlFor="movie-genre" className="mb-3 block text-sm text-highlight">Filtrar por género</label>
          <select id="movie-genre" value={genre} onChange={e => setGenre(e.target.value)} className="w-full rounded-sm border border-border bg-surface px-4 py-3 text-foreground">
            <option value="">Todos los géneros</option>
            {genres.map(g => <option key={g.id} value={g.id}>{g.name}</option>)}
          </select>
        </div>
      )}
      {error && <p role="alert" className="mb-8 border border-accent p-4">{error}</p>}
      {loading ? <p role="status" className="py-10 text-muted">Cargando películas…</p>
        : mode === "search" && !query.trim() ? <p className="py-10 text-muted">Escribe un título para comenzar tu búsqueda.</p>
        : <CatalogGrid movies={movies} />}
    </div>
  );
}
