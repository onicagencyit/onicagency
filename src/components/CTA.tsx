const CTA = () => {
  return (
    <section className="relative w-full bg-card border-y border-primary/40 py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-display leading-[0.95] text-5xl md:text-7xl text-foreground">
          PRONTO A <span className="text-primary">PARTIRE?</span>
        </h2>
        <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Dal sito al palco, dal post all'evento. Contatta ONIC Agency per una
          prima consulenza gratuita.
        </p>
        <a
          href="/parliamo"
          className="inline-flex items-center justify-center mt-10 bg-primary text-primary-foreground hover:bg-primary/90 font-medium h-12 px-8 rounded-md transition-colors"
        >
          Prenota una consulenza
        </a>
      </div>
    </section>
  );
};

export default CTA;
