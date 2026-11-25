import { Suspense } from "react";
import { connection } from "next/server";

async function CurrentYear() {
    await connection();
    return new Date().getFullYear();
}

export function SiteFooter() {
    return (
        <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-7 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
            <p>
            © <Suspense fallback="----"><CurrentYear /></Suspense> CineScope.
            {" "}Una nueva forma de descubrir cine.
            </p>

            <p className="uppercase tracking-[0.12em]">
            Crafted with Next.js & TypeScript
            </p>
        </div>
        </footer>
    );
}