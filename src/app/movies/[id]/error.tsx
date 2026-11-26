"use client";
export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return <main role="alert" className="mx-auto w-full max-w-7xl px-5 py-20">
    <h2 className="font-display mb-4 text-4xl">No pudimos cargar esta película.</h2>
    <button onClick={() => reset()} className="rounded-sm bg-accent px-5 py-3 font-semibold text-white">Volver a intentar</button>
  </main>;
}
