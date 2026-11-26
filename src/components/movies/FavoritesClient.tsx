"use client";
import { useEffect, useState } from "react";
import type { Movie } from "@/types/movie";
import { CatalogGrid } from "./CatalogGrid";
import { readFavorites } from "./FavoriteButton";
export function FavoritesClient() {
  const [favorites, setFavorites] = useState<Movie[]>([]);
  useEffect(() => {
    const sync = () => setFavorites(readFavorites());
    const task = window.setTimeout(sync, 0);
    window.addEventListener("storage", sync);
    window.addEventListener("cinescope:favorites-updated", sync);
    return () => { window.clearTimeout(task); window.removeEventListener("storage", sync); window.removeEventListener("cinescope:favorites-updated", sync); };
  }, []);
  return <div><p className="mb-8 text-sm text-muted">Guardados en este navegador. No se sincronizan entre dispositivos.</p><CatalogGrid movies={favorites} /></div>;
}
