import type { Movie, MovieListResponse } from "@/types/movie";

const API = "https://api.themoviedb.org/3";
export interface MovieDetails extends Movie {
  genres: { id: number; name: string }[];
  runtime: number | null;
  tagline: string;
  status: string;
}
export interface Genre { id: number; name: string }

async function tmdb<T>(endpoint: string, params: Record<string, string> = {}): Promise<T> {
  const token = process.env.TMDB_ACCESS_TOKEN;
  if (!token) throw new Error("Falta TMDB_ACCESS_TOKEN en .env.local");
  const url = new URL(`${API}${endpoint}`);
  url.searchParams.set("language", "es-ES");
  for (const [key, value] of Object.entries(params)) if (value) url.searchParams.set(key, value);
  const res = await fetch(url.toString(), {
    headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
    cache: "no-store",
    signal: AbortSignal.timeout(12000),
  });
  if (!res.ok) throw new Error(`TMDB_HTTP_${res.status}`);
  return (await res.json()) as T;
}
export function searchMovies(query: string): Promise<MovieListResponse> {
  return tmdb("/search/movie", { query, include_adult: "false" });
}
export function discoverMovies(genre?: string): Promise<MovieListResponse> {
  return tmdb("/discover/movie", {
    sort_by: "popularity.desc", include_adult: "false", with_genres: genre || "",
  });
}
export async function listGenres(): Promise<Genre[]> {
  const response = await tmdb<{ genres: Genre[] }>("/genre/movie/list");
  return response.genres;
}
export function getMovieDetails(id: number): Promise<MovieDetails> {
  return tmdb(`/movie/${id}`);
}
