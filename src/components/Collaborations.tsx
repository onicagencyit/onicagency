import { motion } from "framer-motion";
import { Handshake, MapPin, Gamepad2 } from "lucide-react";

const partners = [
  {
    name: "Weave",
    icon: Handshake,
    description: "Studio creativo specializzato in design e comunicazione visiva.",
    detail: "Via Mecenate, Milano",
    detailIcon: MapPin,
  },
  {
    name: "AK Informatica",
    icon: Gamepad2,
    description: "Partner per il noleggio di apparati e postazioni gaming per eventi e fiere.",
    detail: "Noleggio Gaming Hardware",
    detailIcon: Gamepad2,
  },
];

const Collaborations = () => {
  return (
    <section id="collaborazioni" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Le nostre <span className="text-gradient">collaborazioni</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Partner di fiducia con cui realizziamo progetti di alto livello.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              className="card-glass rounded-xl p-10 border border-border/50 hover:border-primary/30 transition-colors duration-300 group text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:glow transition-shadow duration-300">
                <partner.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{partner.name}</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {partner.description}
              </p>
              <span className="inline-flex items-center gap-2 text-sm text-primary/80 font-medium">
                <partner.detailIcon className="h-4 w-4" />
                {partner.detail}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collaborations;
