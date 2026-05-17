import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Sparkle, Check } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

type FormState = {
  servizio: string;
  budget: string;
  tempistiche: string;
  descrizione: string;
  nome: string;
  email: string;
  telefono: string;
};

const SERVIZI = ["Sito Web", "Social Media", "Content & Copy", "Evento / Allestimento", "Più servizi", "Non so ancora"];
const BUDGET = ["< 1.000 €", "1.000 – 3.000 €", "3.000 – 8.000 €", "8.000 € +", "Da definire"];
const TEMPISTICHE = ["Il prima possibile", "Entro 1 mese", "Entro 3 mesi", "Sto solo esplorando"];

const Parliamo = () => {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>({
    servizio: "",
    budget: "",
    tempistiche: "",
    descrizione: "",
    nome: "",
    email: "",
    telefono: "",
  });

  const steps = [
    {
      label: "Servizio",
      title: "Di cosa hai bisogno?",
      subtitle: "Scegli l'area su cui vuoi lavorare.",
      render: () => (
        <OptionGrid
          value={form.servizio}
          options={SERVIZI}
          onSelect={(v) => {
            setForm({ ...form, servizio: v });
            next();
          }}
        />
      ),
      isValid: () => !!form.servizio,
    },
    {
      label: "Budget",
      title: "Hai un budget in mente?",
      subtitle: "Ci aiuta a proporti la soluzione più adatta.",
      render: () => (
        <OptionGrid
          value={form.budget}
          options={BUDGET}
          onSelect={(v) => {
            setForm({ ...form, budget: v });
            next();
          }}
        />
      ),
      isValid: () => !!form.budget,
    },
    {
      label: "Tempistiche",
      title: "Quando vuoi partire?",
      subtitle: "Indicaci la tua urgenza.",
      render: () => (
        <OptionGrid
          value={form.tempistiche}
          options={TEMPISTICHE}
          onSelect={(v) => {
            setForm({ ...form, tempistiche: v });
            next();
          }}
        />
      ),
      isValid: () => !!form.tempistiche,
    },
    {
      label: "Progetto",
      title: "Raccontaci il progetto.",
      subtitle: "Obiettivi, contesto, tutto quello che vuoi condividere.",
      render: () => (
        <Textarea
          autoFocus
          placeholder="Scrivi qui il tuo progetto..."
          value={form.descrizione}
          onChange={(e) => setForm({ ...form, descrizione: e.target.value })}
          maxLength={2000}
          rows={7}
          className="bg-card border-border resize-none text-base"
        />
      ),
      isValid: () => form.descrizione.trim().length > 5,
    },
    {
      label: "Contatti",
      title: "Come ti contattiamo?",
      subtitle: "Risponderemo entro 24 ore.",
      render: () => (
        <div className="space-y-3">
          <Input
            placeholder="Nome e cognome"
            value={form.nome}
            onChange={(e) => setForm({ ...form, nome: e.target.value })}
            maxLength={100}
            className="bg-card border-border h-12"
          />
          <Input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            maxLength={255}
            className="bg-card border-border h-12"
          />
          <Input
            type="tel"
            placeholder="Telefono (opzionale)"
            value={form.telefono}
            onChange={(e) => setForm({ ...form, telefono: e.target.value })}
            maxLength={30}
            className="bg-card border-border h-12"
          />
        </div>
      ),
      isValid: () =>
        form.nome.trim().length > 1 && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email.trim()),
    },
  ];

  const current = steps[step];
  const isLast = step === steps.length - 1;

  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const handleSubmit = () => {
    if (!current.isValid()) {
      toast({ title: "Compila i campi obbligatori", description: "Nome ed email sono necessari." });
      return;
    }
    const subject = encodeURIComponent(`Nuova richiesta — ${form.servizio} — ${form.nome}`);
    const body = encodeURIComponent(
      [
        `Nome: ${form.nome}`,
        `Email: ${form.email}`,
        `Telefono: ${form.telefono || "—"}`,
        ``,
        `Servizio: ${form.servizio}`,
        `Budget: ${form.budget}`,
        `Tempistiche: ${form.tempistiche}`,
        ``,
        `Progetto:`,
        form.descrizione,
      ].join("\n")
    );
    window.location.href = `mailto:info@onicagency.it?subject=${subject}&body=${body}`;
  };

  const progress = ((step + 1) / steps.length) * 100;

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center px-6 py-8">
      <a href="/" className="font-display text-xl tracking-wider mb-8">
        <span className="text-foreground">ONIC</span>{" "}
        <span className="text-primary">Agency</span>
      </a>

      <main className="w-full max-w-xl">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2 font-body">
            <span>
              {String(step + 1).padStart(2, "0")} / {String(steps.length).padStart(2, "0")} — {current.label}
            </span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-px bg-border w-full overflow-hidden">
            <motion.div
              className="h-full bg-primary"
              initial={false}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            <h1 className="font-display text-4xl md:text-5xl leading-[1] tracking-wide mb-4">
              {current.title.split(" ").map((w, i, arr) => (
                <span key={i} className={i === arr.length - 1 ? "text-primary" : ""}>
                  {w}{i < arr.length - 1 ? " " : ""}
                </span>
              ))}
            </h1>
            <p className="text-muted-foreground text-sm md:text-base mb-8 font-body">
              {current.subtitle}
            </p>

            <div className="mb-10">{current.render()}</div>
          </motion.div>
        </AnimatePresence>

        {/* Nav */}
        <div className="flex items-center justify-between gap-3">
          <Button
            type="button"
            variant="ghost"
            onClick={back}
            disabled={step === 0}
            className="text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="size-4" /> Indietro
          </Button>

          {isLast ? (
            <Button
              type="button"
              onClick={handleSubmit}
              className="h-12 px-6 bg-primary text-primary-foreground hover:bg-primary/90 font-body font-medium"
            >
              Invia la richiesta <Check className="size-4" />
            </Button>
          ) : (
            <Button
              type="button"
              onClick={next}
              disabled={!current.isValid()}
              className="h-12 px-6 bg-primary text-primary-foreground hover:bg-primary/90 font-body font-medium"
            >
              Avanti <ArrowRight className="size-4" />
            </Button>
          )}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-8 flex items-center justify-center gap-2">
          <Sparkle className="size-3 text-primary" fill="currentColor" />
          Risponderemo entro 24 ore. Nessun impegno.
        </p>
      </main>
    </div>
  );
};

const OptionGrid = ({
  value,
  options,
  onSelect,
}: {
  value: string;
  options: string[];
  onSelect: (v: string) => void;
}) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
    {options.map((opt) => {
      const active = value === opt;
      return (
        <button
          key={opt}
          type="button"
          onClick={() => onSelect(opt)}
          className={`text-left px-4 py-4 rounded-md border transition-all font-body text-sm ${
            active
              ? "border-primary bg-primary/10 text-foreground"
              : "border-border bg-card text-foreground/80 hover:border-primary/60 hover:text-foreground"
          }`}
        >
          <div className="flex items-center justify-between gap-2">
            <span>{opt}</span>
            {active && <Check className="size-4 text-primary" />}
          </div>
        </button>
      );
    })}
  </div>
);

export default Parliamo;