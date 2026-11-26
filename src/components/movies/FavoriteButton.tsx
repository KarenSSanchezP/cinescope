"use client";
import { useEffect, useState } from "react";
import type { Movie } from "@/types/movie";
export const FAVORITES_KEY = "cinescope:favorites";
export function readFavorites(): Movie[] {
  try {
    const parsed: unknown = JSON.parse(localStorage.getItem(FAVORITES_KEY) ?? "[]");
    return Array.isArray(parsed) ? parsed.filter((m): m is Movie => typeof m === "object" && m !== null && typeof m.id === "number" && typeof m.title === "string") : [];
  } catch { return []; }
}
export function FavoriteButton({ movie }: { movie: Movie }) {
  const [isFavorite, setIsFavorite] = useState(false);
  useEffect(() => {
    const sync = () => setIsFavorite(readFavorites().some(m => m.id === movie.id));
    const task = window.setTimeout(sync, 0);
    window.addEventListener("cinescope:favorites-updated", sync);
    window.addEventListener("storage", sync);
    return () => { window.clearTimeout(task); window.removeEventListener("cinescope:favorites-updated", sync); window.removeEventListener("storage", sync); };
  }, [movie.id]);
  function toggle() {
    const existing = readFavorites();
    const next = existing.some(m => m.id === movie.id) ? existing.filter(m => m.id !== movie.id) : [...existing, movie];
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(next));
    window.dispatchEvent(new Event("cinescope:favorites-updated"));
  }
  return <button type="button" onClick={toggle} aria-pressed={isFavorite} className="rounded-sm bg-accent px-5 py-3 text-sm font-semibold text-white hover:brightness-110">{isFavorite ? "♥ Quitar de favoritos" : "♡ Agregar a favoritos"}</button>;
}
