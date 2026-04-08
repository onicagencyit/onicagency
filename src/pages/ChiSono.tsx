import Navbar from "@/components/Navbar";
import Collaborations from "@/components/Collaborations";
import ArticleCarousel from "@/components/ArticleCarousel";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const ChiSono = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <section className="py-32 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Chi <span className="text-gradient">siamo</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                Onic è un team di professionisti specializzati in servizi digitali, allestimenti eventi e comunicazione creativa. Lavoriamo con passione per trasformare le idee dei nostri clienti in esperienze memorabili.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
              {[
                { value: "50+", label: "Progetti completati" },
                { value: "30+", label: "Clienti attivi" },
                { value: "5+", label: "Anni di esperienza" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="card-glass rounded-xl p-8 border border-border/50 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <p className="text-3xl font-bold text-primary mb-2">{stat.value}</p>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Collaborations />
        <ArticleCarousel />
      </div>
      <Footer />
    </div>
  );
};

export default ChiSono;
