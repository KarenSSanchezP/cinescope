export default function HomePage() {
  return (
    <section
      aria-labelledby="hero-title"
      className="film-grain flex flex-1 items-center overflow-hidden"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-5 py-16 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 lg:px-12 lg:py-24">
        <div>
          <div className="mb-8 flex items-center gap-3">
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full bg-accent"
            />

            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-highlight sm:text-xs">
              01 / Discover cinema
            </p>
          </div>

          <h1
            id="hero-title"
            className="font-display max-w-4xl text-[clamp(3.4rem,7vw,7.5rem)] leading-[0.98] tracking-[-0.065em]"
          >
            Cinema is more
            <br />
            than what
            <br />
            <em className="font-normal text-highlight">
              you see.
            </em>
          </h1>

          <p className="mt-8 max-w-lg text-base leading-8 text-muted sm:text-lg">
            Historias que merecen ser descubiertas.
            Explora el universo cinematográfico y encuentra
            tu próxima película favorita.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <span className="inline-flex min-h-11 items-center rounded-sm bg-accent px-6 text-xs font-bold uppercase tracking-[0.14em] text-white">
              Próximamente
            </span>

            <span className="text-[11px] uppercase tracking-[0.15em] text-muted">
              Curated for the curious
            </span>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="relative mx-auto flex w-full max-w-md items-center justify-center"
        >
          <div className="absolute inset-8 rotate-[-8deg] border border-highlight/20" />

          <div className="film-frame relative z-10 flex aspect-[4/5] w-[78%] rotate-[5deg] items-center justify-center overflow-hidden p-10 shadow-[0_30px_100px_rgba(0,0,0,0.35)]">
            <div className="absolute inset-x-6 top-16 h-px bg-highlight/20" />
            <div className="absolute inset-x-6 bottom-16 h-px bg-highlight/20" />

            <div className="text-center">
              <p className="mb-8 text-[10px] uppercase tracking-[0.28em] text-highlight">
                A world of stories
              </p>

              <span className="font-display block text-[clamp(7rem,16vw,12rem)] leading-none text-highlight/80">
                C
              </span>

              <p className="mt-6 text-[10px] uppercase tracking-[0.3em] text-muted">
                Frame No. 001
              </p>
            </div>
          </div>

          <span className="absolute bottom-0 left-0 text-[10px] uppercase tracking-[0.2em] text-muted">
            Film / Discovery
          </span>

          <span className="absolute right-0 top-0 text-[10px] uppercase tracking-[0.2em] text-muted">
            Est. 2026
          </span>
        </div>
      </div>
    </section>
  );
}