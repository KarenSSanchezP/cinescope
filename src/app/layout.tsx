import type { Metadata } from "next";
import type { ReactNode } from "react";

import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "CineScope | Descubre el cine",
    template: "%s | CineScope",
  },
  description:
    "Explora nuevas historias y descubre películas que merecen ser vistas. Una experiencia editorial de descubrimiento cinematográfico.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="es" data-scroll-behavior="smooth">
      <body className="flex min-h-screen flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-highlight focus:px-4 focus:py-2 focus:text-background"
        >
          Saltar al contenido principal
        </a>

        <SiteHeader />

        <main id="main-content" className="flex flex-1 flex-col">
          {children}
        </main>

        <SiteFooter />
      </body>
    </html>
  );
}