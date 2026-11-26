import Link from "next/link";
export default function NotFound() {
  return <section className="mx-auto w-full max-w-7xl px-5 py-20">
    <h1 className="font-display mb-6 text-5xl">Película no encontrada.</h1>
    <Link href="/discover" className="text-highlight underline">Volver a explorar</Link>
  </section>;
}
