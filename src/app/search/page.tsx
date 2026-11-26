import type { Metadata } from "next";
import { CatalogClient } from "@/components/movies/CatalogClient";
export const metadata: Metadata = { title: "Buscar películas" };
export default function SearchPage() {
  return <section className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
    <p className="mb-3 text-xs uppercase tracking-widest text-highlight">03 / Search</p>
    <h1 className="font-display mb-4 text-5xl sm:text-6xl">Encuentra tu historia.</h1>
    <p className="mb-10 text-muted">Busca películas por su título.</p>
    <CatalogClient mode="search" />
  </section>;
}
