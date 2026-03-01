import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-32 px-6">
      <motion.div
        className="max-w-4xl mx-auto card-glass rounded-2xl p-12 md:p-20 text-center border border-border/50 relative overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0 bg-primary/3 pointer-events-none" />
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Hai un progetto in mente?
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-lg mx-auto">
            Raccontami la tua idea e trasformiamola insieme in qualcosa di straordinario.
          </p>
          <Button size="lg" className="text-base px-8 py-6 glow">
            Contattami <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;
