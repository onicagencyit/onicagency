import { useState, FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";

const BULLETS = [
  "Analizziamo la tua situazione attuale",
  "Ti proponiamo la soluzione più adatta",
  "Ti diciamo esattamente quanto costa",
];

const Parliamo = () => {
  const [form, setForm] = useState({ nome: "", email: "", telefono: "", messaggio: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const nome = form.nome.trim();
    const email = form.email.trim();
    if (nome.length < 2 || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      toast({ title: "Controlla i campi", description: "Nome ed email sono obbligatori." });
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("https://formspree.io/f/mojbagvy", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: nome,
          email,
          phone: form.telefono.trim(),
          message: form.messaggio.trim(),
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setForm({ nome: "", email: "", telefono: "", messaggio: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center px-6 pt-28 pb-10">
      <Navbar />
      <main className="w-full max-w-xl text-center">
        <h1 className="font-display leading-[0.95] tracking-wide text-5xl md:text-7xl">
          <span className="block text-foreground">PARLIAMO DEL</span>
          <span className="block text-primary">TUO PROGETTO.</span>
        </h1>
        <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
          20 minuti gratuiti per capire come ONIC Agency può aiutarti. Nessun impegno.
        </p>

        <ul className="mt-8 space-y-3 text-left max-w-md mx-auto">
          {BULLETS.map((b) => (
            <li key={b} className="flex items-start gap-3 text-sm md:text-base text-foreground/90">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <form onSubmit={handleSubmit} className="mt-10 space-y-3 text-left">
          <Input
            placeholder="Nome *"
            value={form.nome}
            onChange={(e) => setForm({ ...form, nome: e.target.value })}
            maxLength={100}
            required
            className="bg-card border-border h-12"
          />
          <Input
            type="email"
            placeholder="Email *"
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
            value={form.messaggio}
            onChange={(e) => setForm({ ...form, messaggio: e.target.value })}
            maxLength={2000}
            rows={6}
            className="bg-card border-border resize-none"
          />

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full h-12 rounded-md font-medium transition-colors disabled:opacity-60"
            style={{ backgroundColor: "#F5A623", color: "#000" }}
          >
            {status === "loading" ? "Invio in corso..." : "Invia la richiesta"}
          </button>

          {status === "success" && (
            <p className="text-center text-sm font-medium text-green-500 pt-2">
              Grazie! Ti risponderemo entro 24 ore.
            </p>
          )}
          {status === "error" && (
            <p className="text-center text-sm font-medium text-red-500 pt-2">
              Qualcosa è andato storto. Riprova o scrivici a onic.agency@gmail.com
            </p>
          )}

          <p className="text-center text-xs text-muted-foreground pt-2">
            Risponderemo entro 24 ore.
          </p>
        </form>
      </main>
    </div>
  );
};

export default Parliamo;