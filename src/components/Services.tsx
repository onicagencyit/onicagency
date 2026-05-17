import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Palette,
  FileText,
  Smartphone,
  MailOpen,
  Clock,
  Layers,
  BookOpen,
  Search,
  BarChart3,
  CalendarDays,
  Send,
  Image as ImageIcon,
  LineChart,
  PenLine,
  Target,
  Sparkles,
  RefreshCcw,
  type LucideIcon,
} from "lucide-react";

type Feature = { icon: LucideIcon; title: string; desc: string };
type Tier = {
  tier: "Base" | "Standard";
  price: string;
  tagline: string;
  why: string;
  features: Feature[];
};
type Tab = {
  id: string;
  label: string;
  number: string;
  titleStart: string;
  titleAccent: string;
  titleEnd?: string;
  subtitle: string;
  tiers: [Tier, Tier];
};

const tabs: Tab[] = [
  {
    id: "web",
    label: "Siti Web",
    number: "01",
    titleStart: "Il tuo ",
    titleAccent: "sito web",
    titleEnd: " su misura.",
    subtitle:
      "Design custom, performance reali e una struttura pensata per convertire.",
    tiers: [
      {
        tier: "Base",
        price: "€245",
        tagline: "Una presenza online curata, veloce e pronta in 10 giorni.",
        why: "Se stai partendo o vuoi finalmente sostituire un sito vecchio: ti serve una base professionale, leggibile, che funzioni bene su mobile e racconti chi sei senza fronzoli.",
        features: [
          { icon: Palette, title: "Design personalizzato", desc: "Niente template, identità tua." },
          { icon: FileText, title: "Fino a 3 pagine", desc: "Home, chi siamo, contatti." },
          { icon: Smartphone, title: "Mobile responsive", desc: "Perfetto su ogni schermo." },
          { icon: MailOpen, title: "Form di contatto", desc: "Per ricevere richieste reali." },
          { icon: Clock, title: "Consegna 10 giorni", desc: "Tempi certi, no sorprese." },
        ],
      },
      {
        tier: "Standard",
        price: "€445",
        tagline: "Sito completo con SEO, analytics e contenuti illimitati.",
        why: "Quando ti serve un sito che cresca con te: blog o portfolio, posizionamento su Google, dati per capire cosa funziona. Per chi vuole investire seriamente sulla propria presenza online.",
        features: [
          { icon: Layers, title: "Pagine illimitate", desc: "Espandibile nel tempo." },
          { icon: BookOpen, title: "Blog o portfolio", desc: "Spazio per i tuoi contenuti." },
          { icon: Search, title: "SEO base", desc: "Visibile su Google da subito." },
          { icon: BarChart3, title: "Google Analytics", desc: "Capisci chi ti visita." },
          { icon: Clock, title: "Consegna 15 giorni", desc: "Pianificazione strutturata." },
        ],
      },
    ],
  },
  {
    id: "social",
    label: "Social Media",
    number: "02",
    titleStart: "La tua voce ",
    titleAccent: "social",
    titleEnd: ", gestita.",
    subtitle:
      "Strategia, contenuti e pubblicazione: pensiamo a tutto, tu ti concentri sul tuo lavoro.",
    tiers: [
      {
        tier: "Base",
        price: "€145/mese",
        tagline: "Una presenza social costante, professionale e misurabile.",
        why: "Quando non hai tempo o competenze per pubblicare con costanza ma sai che è importante: ti gestiamo un canale con contenuti pensati e un piano chiaro.",
        features: [
          { icon: CalendarDays, title: "8 post/mese", desc: "Frequenza costante." },
          { icon: Send, title: "1 canale", desc: "Instagram, Facebook o LinkedIn." },
          { icon: FileText, title: "Calendario editoriale", desc: "Pianificato e condiviso." },
          { icon: BarChart3, title: "Report mensile", desc: "Numeri chiari, no fuffa." },
          { icon: ImageIcon, title: "Copy e grafica inclusi", desc: "Tutto già pronto." },
        ],
      },
      {
        tier: "Standard",
        price: "€245/mese",
        tagline: "Strategia multi-canale con analisi dei risultati.",
        why: "Per brand che vogliono presidiare più canali con coerenza, capire cosa funziona e ottimizzare. Più volume, più dati, più crescita.",
        features: [
          { icon: CalendarDays, title: "16 post/mese", desc: "Presenza intensiva." },
          { icon: Send, title: "2 canali", desc: "Strategia cross-platform." },
          { icon: FileText, title: "Calendario editoriale", desc: "Pianificato e condiviso." },
          { icon: LineChart, title: "Report + analisi", desc: "Insight e raccomandazioni." },
          { icon: ImageIcon, title: "Copy e grafica inclusi", desc: "Tutto già pronto." },
        ],
      },
    ],
  },
  {
    id: "content",
    label: "Content",
    number: "03",
    titleStart: "Parole che ",
    titleAccent: "convertono",
    titleEnd: ".",
    subtitle:
      "Copy strategico, calibrato sul tuo pubblico e ottimizzato per portare risultati reali.",
    tiers: [
      {
        tier: "Base",
        price: "€95",
        tagline: "Testi su misura, pronti in 5 giorni.",
        why: "Quando ti servono testi solidi per sito, landing o campagne: scritti per il tuo pubblico, con un tono che parli davvero a chi leggi.",
        features: [
          { icon: PenLine, title: "4 testi", desc: "Per pagine o campagne." },
          { icon: Target, title: "Tono su misura", desc: "Scritto per il tuo brand." },
          { icon: Sparkles, title: "Ottimizzati per convertire", desc: "Non solo belli, efficaci." },
          { icon: Clock, title: "Consegna 5 giorni", desc: "Tempi rapidi e precisi." },
        ],
      },
      {
        tier: "Standard",
        price: "€195",
        tagline: "Piano editoriale completo con tone of voice dedicato.",
        why: "Per chi vuole costruire una comunicazione coerente nel tempo: tono di voce definito, piano mensile e libertà di iterare finché è perfetto.",
        features: [
          { icon: PenLine, title: "10 testi", desc: "Volume per più canali." },
          { icon: CalendarDays, title: "Piano editoriale mensile", desc: "Strategia organizzata." },
          { icon: Target, title: "Tone of voice dedicato", desc: "Identità verbale unica." },
          { icon: RefreshCcw, title: "Revisioni illimitate", desc: "Finché è davvero tuo." },
          { icon: Clock, title: "Consegna 7 giorni", desc: "Workflow strutturato." },
        ],
      },
    ],
  },
];

const TierCard = ({ tier, highlight }: { tier: Tier; highlight: boolean }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`relative rounded-lg bg-card border border-[hsl(35_91%_55%/0.18)] overflow-hidden flex flex-col ${
        highlight ? "border-t-2 border-t-primary" : ""
      }`}
    >
      {highlight && (
        <div className="absolute top-3 right-3 text-[10px] uppercase tracking-[0.2em] text-primary font-medium bg-primary/10 border border-primary/30 px-2 py-1 rounded-full">
          Più richiesto
        </div>
      )}
      <div className="p-6 md:p-8">
        <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">
          {tier.tier}
        </div>
        <div className="font-display text-5xl md:text-6xl text-foreground leading-none mb-4">
          {tier.price}
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
          {tier.tagline}
        </p>

        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between text-sm text-foreground border-t border-[hsl(35_91%_55%/0.18)] pt-4 hover:text-primary transition-colors"
        >
          <span>Vedi cosa include</span>
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="pt-6 space-y-6">
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-primary mb-3">
                    Perché ti serve
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {tier.why}
                  </p>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-primary mb-3">
                    Cosa è incluso
                  </div>
                  <ul className="space-y-4">
                    {tier.features.map((f) => (
                      <li key={f.title} className="flex gap-3">
                        <div className="flex-shrink-0 mt-0.5 h-8 w-8 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center">
                          <f.icon className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-foreground">
                            {f.title}
                          </div>
                          <div className="text-xs text-muted-foreground mt-0.5">
                            {f.desc}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="mt-auto p-6 md:p-8 pt-0">
        <a
          href="/parliamo"
          className="block w-full text-center bg-primary text-primary-foreground hover:bg-primary/90 font-medium h-11 leading-[44px] rounded-md transition-colors"
        >
          Richiedi info
        </a>
      </div>
    </div>
  );
};

const Services = () => {
  const [active, setActive] = useState(tabs[0].id);
  const current = tabs.find((t) => t.id === active)!;

  return (
    <section className="relative w-full bg-background py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Tabs */}
        <div className="flex flex-wrap gap-2 md:gap-3 mb-12 border-b border-[hsl(35_91%_55%/0.18)] pb-4">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`relative px-4 md:px-6 py-2 text-sm md:text-base uppercase tracking-[0.18em] transition-colors ${
                active === t.id
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t.label}
              {active === t.id && (
                <motion.span
                  layoutId="tab-underline"
                  className="absolute -bottom-[17px] left-0 right-0 h-px bg-primary"
                />
              )}
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-primary text-xs uppercase tracking-[0.25em] font-medium">
                {current.number} — {current.label}
              </span>
            </div>
            <h2 className="font-display leading-[0.95] text-5xl md:text-7xl text-foreground mb-6 max-w-4xl">
              {current.titleStart}
              <span className="text-primary">{current.titleAccent}</span>
              {current.titleEnd}
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mb-12 leading-relaxed">
              {current.subtitle}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <TierCard tier={current.tiers[0]} highlight={false} />
              <TierCard tier={current.tiers[1]} highlight={true} />
            </div>
          </motion.div>
        </AnimatePresence>

        <p className="mt-10 text-sm text-muted-foreground text-center">
          Hai esigenze particolari?{" "}
          <a href="#contatti" className="text-primary hover:underline">
            Parliamone — preventivo su misura.
          </a>
        </p>
      </div>
    </section>
  );
};

export default Services;
