import { motion } from "framer-motion";
import { Globe, Smartphone, Palette, Code, Zap, BarChart3, Tent, PenTool, Image } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Siti Web",
    description: "Siti moderni, veloci e responsive che comunicano il tuo brand con efficacia.",
  },
  {
    icon: Smartphone,
    title: "App Mobile",
    description: "Applicazioni cross-platform intuitive per iOS e Android.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Interfacce eleganti progettate per convertire e fidelizzare gli utenti.",
  },
  {
    icon: Code,
    title: "Sviluppo Custom",
    description: "Soluzioni software su misura per automatizzare i tuoi processi.",
  },
  {
    icon: Tent,
    title: "Allestimenti & Eventi",
    description: "Montaggio booth, stand fieristici e allestimenti per eventi di ogni dimensione.",
  },
  {
    icon: PenTool,
    title: "Copywriting",
    description: "Testi persuasivi per web, social e campagne che catturano l'attenzione.",
  },
  {
    icon: Image,
    title: "Grafica",
    description: "Identità visiva, loghi, materiali promozionali e design per ogni supporto.",
  },
  {
    icon: Zap,
    title: "Automazione",
    description: "Workflow automatizzati che fanno risparmiare tempo e riducono gli errori.",
  },
  {
    icon: BarChart3,
    title: "SEO & Analytics",
    description: "Ottimizzazione per i motori di ricerca e analisi dei dati per crescere.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

const Services = () => {
  return (
    <section id="servizi" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            I miei <span className="text-gradient">servizi</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Tutto ciò di cui hai bisogno per costruire la tua presenza digitale.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="card-glass rounded-xl p-8 border border-border/50 hover:border-primary/30 transition-colors duration-300 group"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:glow transition-shadow duration-300">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
