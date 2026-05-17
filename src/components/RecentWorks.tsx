import { ArrowRight, CheckCircle2 } from "lucide-react";

const items = [
  { title: "AC / ACC Commander", tag: "Web App", accent: "#E53E3E" },
  { title: "Gestione Eventi", tag: "Web App", accent: "#4A6CF7" },
  { title: "BnB Dashboard", tag: "Web App", accent: "#F5A623" },
];

const RecentWorks = () => {
  return (
    <section className="relative w-full bg-background py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10 max-w-2xl">
          <div className="text-primary text-xs uppercase tracking-[0.25em] font-medium mb-3">
            Lavori recenti
          </div>
          <h2 className="font-display leading-[0.95] text-3xl md:text-4xl text-foreground">
            Dal progetto al <span className="text-primary">risultato.</span>
          </h2>
        </div>

        <div className="-mx-6 px-6 overflow-x-auto scrollbar-none">
          <div className="flex gap-5 snap-x snap-mandatory pb-4 md:grid md:grid-cols-3 md:gap-6 md:pb-0">
            {items.map((it) => (
              <a
                key={it.title}
                href="/portfolio"
                className="group snap-start shrink-0 w-[78%] sm:w-[55%] md:w-auto rounded-lg overflow-hidden flex flex-col justify-between p-5 md:p-6 transition-transform duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: "#1E1E1E",
                  borderLeft: `3px solid ${it.accent}`,
                }}
              >
                <div className="flex flex-col gap-3">
                  <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                    {it.tag}
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl text-foreground leading-tight">
                    {it.title}
                  </h3>
                  <span className="inline-flex w-fit items-center gap-1.5 text-[11px] font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                    <CheckCircle2 className="h-3 w-3" />
                    Completato
                  </span>
                </div>
                <div className="flex justify-end mt-6">
                  <ArrowRight className="h-5 w-5 text-primary transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentWorks;
