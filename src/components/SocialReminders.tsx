import { motion } from "framer-motion";
import { Instagram, Facebook, Twitter, Calendar, Bell, TrendingUp } from "lucide-react";

const reminders = [
  {
    icon: Instagram,
    platform: "Instagram",
    tip: "Pubblica Reels tra le 18:00 e le 21:00 per massimizzare l'engagement.",
    frequency: "3-5 volte a settimana",
  },
  {
    icon: Facebook,
    platform: "Facebook",
    tip: "Condividi contenuti con valore educativo — i post lunghi performano meglio.",
    frequency: "2-3 volte a settimana",
  },
  {
    icon: Twitter,
    platform: "X / Twitter",
    tip: "Thread informativi e risposte rapide ai trend aumentano la visibilità.",
    frequency: "1-3 volte al giorno",
  },
];

const tips = [
  { icon: Calendar, text: "Pianifica il contenuto con almeno una settimana di anticipo" },
  { icon: Bell, text: "Rispondi ai commenti entro la prima ora dalla pubblicazione" },
  { icon: TrendingUp, text: "Analizza le performance ogni venerdì e adatta la strategia" },
];

const SocialReminders = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Social Media <span className="text-gradient">Reminder</span>
          </h2>
          <p className="text-muted-foreground text-lg">Best practice e promemoria per i tuoi canali social.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {reminders.map((r, i) => (
            <motion.div
              key={r.platform}
              className="card-glass rounded-xl p-8 border border-border/50 hover:border-primary/30 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <r.icon className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-1">{r.platform}</h3>
              <p className="text-xs text-accent font-medium mb-4">{r.frequency}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{r.tip}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="card-glass rounded-xl border border-border/50 p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-6">📌 Promemoria settimanali</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tips.map((t, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <t.icon className="h-5 w-5 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialReminders;
