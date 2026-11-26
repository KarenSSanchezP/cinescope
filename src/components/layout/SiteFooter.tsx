import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-7 text-xs text-muted sm:px-8 lg:px-12">
        <p>
          © 2026 CineScope. Descubre tu próxima película.
        </p>

        <p>
          This product uses the TMDB API but is not
          endorsed or certified by TMDB.
        </p>

        <Link
          href="https://www.themoviedb.org/"
          className="text-highlight underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Información proporcionada por TMDB
        </Link>
      </div>
    </footer>
  );
}