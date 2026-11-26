import Link from "next/link";
export function SiteHeader() {
  return <header className="relative z-10 border-b border-border">
    <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-5 px-5 py-6 sm:px-8 lg:px-12">
      <Link href="/" className="text-xl font-bold tracking-[-0.05em] sm:text-2xl" aria-label="CineScope, ir al inicio">CINE<span className="text-accent">SCOPE</span><span className="text-highlight">.</span></Link>
      <nav aria-label="Navegación principal" className="flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold uppercase tracking-wider sm:gap-x-7">
        <Link className="hover:text-highlight" href="/">Inicio</Link>
        <Link className="hover:text-highlight" href="/discover">Explorar</Link>
        <Link className="hover:text-highlight" href="/search">Buscar</Link>
        <Link className="hover:text-highlight" href="/favorites">Favoritos</Link>
      </nav>
    </div>
  </header>;
}
