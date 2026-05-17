import { useState } from "react";
import { Sparkle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const Parliamo = () => {
  const [form, setForm] = useState({ nome: "", email: "", telefono: "", progetto: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nome.trim() || !form.email.trim() || !form.progetto.trim()) {
      toast({ title: "Compila i campi obbligatori", description: "Nome, email e descrizione del progetto." });
      return;
    }
    setSubmitting(true);
    const subject = encodeURIComponent(`Nuova richiesta da ${form.nome}`);
    const body = encodeURIComponent(
      `Nome: ${form.nome}\nEmail: ${form.email}\nTelefono: ${form.telefono}\n\nProgetto:\n${form.progetto}`
    );
    window.location.href = `mailto:info@onicagency.it?subject=${subject}&body=${body}`;
    setTimeout(() => setSubmitting(false), 800);
  };

  const bullets = [
    "Analizziamo la tua situazione attuale",
    "Ti proponiamo la soluzione più adatta",
    "Ti diciamo esattamente quanto costa",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center px-6 py-10">
      <a href="/" className="font-display text-xl tracking-wider mb-12">
        <span className="text-foreground">ONIC</span>{" "}
        <span className="text-primary">Agency</span>
      </a>

      <main className="w-full max-w-xl">
        <h1 className="font-display text-5xl md:text-6xl leading-[0.95] tracking-wide mb-6">
          PARLIAMO DEL{" "}
          <span className="text-primary">TUO PROGETTO.</span>
        </h1>
        <p className="text-muted-foreground text-base md:text-lg mb-8 font-body">
          20 minuti gratuiti per capire come ONIC Agency può aiutarti. Nessun impegno.
        </p>

        <ul className="space-y-3 mb-10">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-3 font-body text-sm md:text-base text-foreground/90">
              <Sparkle className="size-4 text-primary mt-1 shrink-0" fill="currentColor" />
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="Nome"
            value={form.nome}
            onChange={(e) => setForm({ ...form, nome: e.target.value })}
            maxLength={100}
            required
            className="bg-card border-border h-12"
          />
          <Input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            maxLength={255}
            required
            className="bg-card border-border h-12"
          />
          <Input
            type="tel"
            placeholder="Telefono"
            value={form.telefono}
            onChange={(e) => setForm({ ...form, telefono: e.target.value })}
            maxLength={30}
            className="bg-card border-border h-12"
          />
          <Textarea
            placeholder="Raccontaci il tuo progetto"
            value={form.progetto}
            onChange={(e) => setForm({ ...form, progetto: e.target.value })}
            maxLength={2000}
            required
            rows={5}
            className="bg-card border-border resize-none"
          />

          <Button
            type="submit"
            disabled={submitting}
            className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary/90 font-body font-medium text-base"
          >
            {submitting ? "Invio..." : "Invia la richiesta"}
          </Button>

          <p className="text-center text-xs text-muted-foreground pt-2">
            Risponderemo entro 24 ore.
          </p>
        </form>
      </main>
    </div>
  );
};

export default Parliamo;