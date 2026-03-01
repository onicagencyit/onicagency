import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const articles = [
  {
    id: 1,
    tag: "Web Design",
    title: "Come un sito web professionale può triplicare i tuoi clienti",
    excerpt: "Scopri le strategie UX che trasformano i visitatori in clienti fedeli, con esempi concreti e metriche reali.",
    readTime: "5 min",
  },
  {
    id: 2,
    tag: "App Development",
    title: "PWA vs App Nativa: quale conviene nel 2026?",
    excerpt: "Analizziamo costi, performance e user experience per aiutarti a scegliere la soluzione giusta per il tuo business.",
    readTime: "7 min",
  },
  {
    id: 3,
    tag: "Social Media",
    title: "5 errori fatali nella tua strategia social",
    excerpt: "Gli errori più comuni che le aziende commettono sui social e come correggerli per ottenere risultati reali.",
    readTime: "4 min",
  },
  {
    id: 4,
    tag: "Automazione",
    title: "Automatizza il tuo business: guida pratica",
    excerpt: "Dall'email marketing al CRM, scopri come risparmiare ore ogni settimana con gli strumenti giusti.",
    readTime: "6 min",
  },
];

const ArticleCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % articles.length);
  };
  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + articles.length) % articles.length);
  };

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  };

  const article = articles[current];

  return (
    <section className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ultimi <span className="text-gradient">articoli</span>
          </h2>
          <p className="text-muted-foreground text-lg">Consigli e strategie per il tuo business digitale.</p>
        </motion.div>

        <div className="relative card-glass rounded-2xl border border-border/50 overflow-hidden">
          <div className="min-h-[320px] md:min-h-[280px] p-8 md:p-12 flex items-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={article.id}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="w-full"
              >
                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-6">
                  {article.tag}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">{article.title}</h3>
                <p className="text-muted-foreground text-base md:text-lg mb-6 max-w-2xl leading-relaxed">
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-6">
                  <span className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" /> {article.readTime}
                  </span>
                  <button className="flex items-center gap-1 text-sm font-medium text-primary hover:underline">
                    Leggi tutto <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between border-t border-border/50 px-8 py-4">
            <div className="flex gap-2">
              {articles.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === current ? "bg-primary w-8" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" onClick={prev} className="h-9 w-9 rounded-full">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={next} className="h-9 w-9 rounded-full">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticleCarousel;
