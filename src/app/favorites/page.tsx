import type { Metadata } from "next";
import { FavoritesClient } from "@/components/movies/FavoritesClient";
export const metadata: Metadata = { title: "Mis favoritos" };
export default function FavoritesPage() {
  return <section className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
    <p className="mb-3 text-xs uppercase tracking-widest text-highlight">04 / Collection</p>
    <h1 className="font-display mb-8 text-5xl sm:text-6xl">Tus favoritos.</h1>
    <FavoritesClient />
  </section>;
}
