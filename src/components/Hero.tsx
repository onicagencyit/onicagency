import { Button } from "@/components/ui/button";

const pillars = [
  { letter: "O", word: "Operations" },
  { letter: "N", word: "Networking" },
  { letter: "I", word: "Innovation" },
  { letter: "C", word: "Content" },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Radial accent glow top-right */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 85% 0%, hsl(35 91% 55% / 0.18), transparent 60%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-16 md:pt-40 md:pb-24">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-8">
          <span className="block h-px w-10 bg-primary" />
          <span className="text-primary text-xs md:text-sm uppercase tracking-[0.25em] font-medium">
            ONIC Agency · Dal Post al Palco
          </span>
        </div>

        {/* Title */}
        <h1 className="font-display leading-[0.92] tracking-tight text-[18vw] md:text-[10rem] lg:text-[12rem]">
          <span className="block text-foreground">DAL POST</span>
          <span className="block text-primary">AL PALCO.</span>
          <span
            className="block text-transparent"
            style={{ WebkitTextStroke: "1.5px hsl(var(--foreground))" }}
          >
            UN'UNICA
          </span>
          <span className="block text-foreground">MANO.</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-10 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
          Dal sito al palco. Dal post all'evento.{" "}
          <span className="text-foreground font-medium">
            ONIC Agency gestisce tutto
          </span>{" "}
          — digitale, comunicazione, produzione e realizzazione eventi — con 5 anni
          di esperienza sul campo.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap gap-4">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-body px-8 h-12 rounded-md"
          >
            Inizia ora
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent border-foreground/30 text-foreground hover:bg-foreground/5 hover:text-foreground font-body px-8 h-12 rounded-md"
          >
            L'ecosistema
          </Button>
        </div>

        {/* O-N-I-C pillars */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-[hsl(35_91%_55%/0.18)] border border-[hsl(35_91%_55%/0.18)] rounded-lg overflow-hidden">
          {pillars.map((p) => (
            <div
              key={p.letter}
              className="group relative bg-card p-6 md:p-8 transition-colors hover:bg-card/60"
            >
              <span className="absolute top-0 left-0 right-0 h-px bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              <div className="font-display text-5xl md:text-6xl text-foreground leading-none">
                {p.letter}
              </div>
              <div className="mt-3 text-xs md:text-sm uppercase tracking-[0.2em] text-muted-foreground">
                {p.word}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
