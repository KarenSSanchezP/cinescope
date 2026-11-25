import Link from "next/link";

export function SiteHeader() {
    return (
        <header className="relative z-10 border-b border-border">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 py-6 sm:px-8 lg:px-12">
            <Link
            href="/"
            aria-label="CineScope, ir al inicio"
            className="text-xl font-bold tracking-[-0.05em] sm:text-2xl"
            >
            CINE<span className="text-accent">SCOPE</span>
            <span className="text-highlight">.</span>
            </Link>

            <nav aria-label="Navegación principal">
            <Link
                href="/"
                aria-current="page"
                className="border-b border-highlight pb-1 text-xs font-semibold uppercase tracking-[0.16em] text-foreground transition-colors hover:text-highlight"
            >
                Inicio
            </Link>
            </nav>
        </div>
        </header>
    );
}