import type { Metadata } from "next";
import { CatalogClient } from "@/components/movies/CatalogClient";
export const metadata: Metadata = { title: "Explorar películas" };
export default function DiscoverPage() {
  return <section className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
    <p className="mb-3 text-xs uppercase tracking-widest text-highlight">02 / Discover</p>
    <h1 className="font-display mb-4 text-5xl sm:text-6xl">Explora el cine.</h1>
    <p className="mb-10 text-muted">Una selección de películas para descubrir, organizada por género.</p>
    <CatalogClient mode="discover" />
  </section>;
}
