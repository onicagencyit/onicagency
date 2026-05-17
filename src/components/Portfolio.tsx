import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

type Project = {
  title: string;
  tag: string;
  description: string;
  accent: string;
};

const projects: Project[] = [
  {
    title: "AC / ACC Commander",
    tag: "Web App · Sim Racing",
    description:
      "Pacchetto completo di sviluppo e personalizzazione per due piattaforme dedicate al mondo della simulazione racing. Design, funzionalità e ottimizzazione dell'esperienza utente dall'inizio alla fine.",
    accent: "#E53E3E",
  },
  {
    title: "Gestione Eventi",
    tag: "Web App · Gestione Operativa",
    description:
      "Da un file Excel strutturato a una web app completa. Gestione eventi con pianificazione Gantt, calendario, organizzazione del personale e monitoraggio materiali in tempo reale.",
    accent: "#4A6CF7",
  },
  {
    title: "BnB Dashboard",
    tag: "Web App · Hospitality",
    description:
      "Dashboard gestionale personalizzata per un B&B in apertura. Panoramica completa su prenotazioni, entrate, tasso di occupazione, scadenze manutenzioni, appuntamenti e calendario — tutto in un'unica schermata.",
    accent: "#F5A623",
  },
];

export const PortfolioGrid = () => (
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
    {projects.map((p, i) => (
      <motion.article
        key={p.title}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, delay: i * 0.1 }}
        className="relative rounded-lg bg-card border border-[hsl(35_91%_55%/0.18)] overflow-hidden flex flex-col"
        style={{ borderTop: `3px solid ${p.accent}` }}
      >
        <div className="p-6 md:p-8 flex flex-col gap-4 flex-1">
          <div
            className="text-[11px] uppercase tracking-[0.22em] font-medium"
            style={{ color: p.accent }}
          >
            {p.tag}
          </div>
          <h3 className="font-display text-3xl md:text-4xl text-foreground leading-tight">
            {p.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed flex-1">
            {p.description}
          </p>
          <div className="pt-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-1 rounded-full">
              <CheckCircle2 className="h-3.5 w-3.5" />
              Progetto completato
            </span>
          </div>
        </div>
      </motion.article>
    ))}
  </div>
);

const Portfolio = () => {
  return (
    <section id="portfolio" className="relative w-full bg-background py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 md:mb-16 max-w-3xl">
          <div className="text-primary text-xs uppercase tracking-[0.25em] font-medium mb-4">
            Portfolio
          </div>
          <h2 className="font-display leading-[0.95] text-5xl md:text-7xl text-foreground mb-6">
            Cosa abbiamo <span className="text-primary">realizzato.</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            Applicazioni web, tool gestionali e dashboard su misura per ogni esigenza.
          </p>
        </div>
        <PortfolioGrid />
      </div>
    </section>
  );
};

export default Portfolio;
