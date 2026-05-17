const stats = [
  { value: "5+", label: "Anni sul campo" },
  { value: "360°", label: "Digitale + Fisico" },
  { value: "1", label: "Interlocutore unico" },
  { value: "∞", label: "Settori serviti" },
];

const Ecosystem = () => {
  return (
    <section className="relative w-full bg-background py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Left column */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <span className="block h-px w-10 bg-primary" />
            <span className="text-primary text-xs uppercase tracking-[0.25em] font-medium">
              L'ecosistema
            </span>
          </div>

          <h2 className="font-display leading-[0.95] text-5xl md:text-7xl text-foreground mb-10">
            L'UNIVERSO <span className="text-primary">ONIC</span> AGENCY.
          </h2>

          <div className="space-y-6 text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl">
            <p>
              ONIC Agency è un ecosistema di servizi digitali e fisici costruito
              per rispondere a ogni esigenza — dalla strategia online alla
              realizzazione di eventi, dal contenuto al palco.
            </p>
            <p>
              In 5 anni abbiamo sviluppato un metodo unico:{" "}
              <span className="text-foreground font-medium">
                un solo interlocutore che orchestra tutto
              </span>{" "}
              — web, social, comunicazione, produzione materiali ed eventi —
              eliminando la dispersione tra fornitori diversi.
            </p>
            <p>
              Che tu sia una piccola impresa, un brand in crescita o un'azienda
              strutturata —{" "}
              <span className="text-foreground font-medium">
                ONIC Agency è il partner che scala con te
              </span>
              , adattando ogni servizio alle tue esigenze reali.
            </p>
          </div>

          {/* Stats 2x2 */}
          <div className="mt-12 grid grid-cols-2 gap-px bg-[hsl(35_91%_55%/0.18)] border border-[hsl(35_91%_55%/0.18)] rounded-md overflow-hidden max-w-xl">
            {stats.map((s) => (
              <div key={s.label} className="bg-card p-6 md:p-8">
                <div className="font-display text-5xl md:text-6xl text-primary leading-none">
                  {s.value}
                </div>
                <div className="mt-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column - vertical showcase box */}
        <div className="relative rounded-lg border border-[hsl(35_91%_55%/0.35)] bg-card overflow-hidden min-h-[500px] lg:min-h-full flex flex-col">
          {/* faint radial glow */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 50% 40%, hsl(35 91% 55% / 0.08), transparent 70%)",
            }}
          />

          {/* Center oversized faded text */}
          <div className="flex-1 flex items-center justify-center overflow-hidden px-4">
            <span
              className="font-display text-foreground/[0.06] text-[28vw] lg:text-[14vw] leading-none whitespace-nowrap tracking-wider select-none"
            >
              ONIC AGENCY
            </span>
          </div>

          {/* Tag bottom */}
          <div className="relative p-6 md:p-8 border-t border-[hsl(35_91%_55%/0.18)]">
            <div className="inline-flex items-center gap-3 rounded-full border border-[hsl(35_91%_55%/0.35)] bg-background/60 backdrop-blur px-4 py-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
              </span>
              <span className="text-sm font-medium text-foreground">
                ONIC Agency
              </span>
            </div>
            <div className="mt-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">
              Operations · Networking · Innovation · Content
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
