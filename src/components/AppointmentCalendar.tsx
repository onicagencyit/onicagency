import { useState } from "react";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { it } from "date-fns/locale";
import { CalendarIcon, Clock, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const timeSlots = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00",
];

const services = [
  "Siti Web",
  "App Mobile",
  "UI/UX Design",
  "Sviluppo Custom",
  "Allestimenti & Eventi",
  "Copywriting",
  "Grafica",
  "Automazione",
  "SEO & Analytics",
  "Consulenza Generale",
];

const AppointmentCalendar = () => {
  const [date, setDate] = useState<Date>();
  const [timeSlot, setTimeSlot] = useState("");
  const [service, setService] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);
  const [booked, setBooked] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!date || !timeSlot || !service || !name || !email) {
      toast.error("Compila tutti i campi obbligatori.");
      return;
    }

    setLoading(true);
    const { error } = await supabase.from("appointments").insert({
      name,
      email,
      phone: phone || null,
      service,
      date: format(date, "yyyy-MM-dd"),
      time_slot: timeSlot,
      notes: notes || null,
    });
    setLoading(false);

    if (error) {
      toast.error("Errore nella prenotazione. Riprova.");
      console.error(error);
      return;
    }

    setBooked(true);
    toast.success("Appuntamento prenotato con successo!");
  };

  if (booked) {
    return (
      <section id="appuntamenti" className="py-32 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="card-glass rounded-2xl p-12 border border-primary/20"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <CalendarIcon className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Prenotazione confermata!</h3>
            <p className="text-muted-foreground mb-2">
              {format(date!, "d MMMM yyyy", { locale: it })} alle {timeSlot}
            </p>
            <p className="text-muted-foreground text-sm">
              Ti contatteremo a <span className="text-primary">{email}</span> per confermare i dettagli.
            </p>
            <Button className="mt-8" onClick={() => { setBooked(false); setDate(undefined); setTimeSlot(""); setService(""); setName(""); setEmail(""); setPhone(""); setNotes(""); }}>
              Prenota un altro appuntamento
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="appuntamenti" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Prenota una <span className="text-gradient">consulenza</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Scegli data, orario e servizio per fissare un appuntamento con noi.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="card-glass rounded-2xl p-8 md:p-12 border border-border/50 space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Nome */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Nome *</label>
              <Input
                placeholder="Il tuo nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="bg-background/50 border-border/50"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Email *</label>
              <Input
                type="email"
                placeholder="email@esempio.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-background/50 border-border/50"
              />
            </div>

            {/* Telefono */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Telefono</label>
              <Input
                type="tel"
                placeholder="+39 ..."
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="bg-background/50 border-border/50"
              />
            </div>

            {/* Servizio */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Servizio *</label>
              <Select value={service} onValueChange={setService}>
                <SelectTrigger className="bg-background/50 border-border/50">
                  <SelectValue placeholder="Seleziona un servizio" />
                </SelectTrigger>
                <SelectContent>
                  {services.map((s) => (
                    <SelectItem key={s} value={s}>{s}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Data */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Data *</label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal bg-background/50 border-border/50",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "d MMMM yyyy", { locale: it }) : "Scegli una data"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={(d) => d < new Date() || d.getDay() === 0 || d.getDay() === 6}
                    initialFocus
                    className={cn("p-3 pointer-events-auto")}
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Orario */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Orario *</label>
              <Select value={timeSlot} onValueChange={setTimeSlot}>
                <SelectTrigger className="bg-background/50 border-border/50">
                  <SelectValue placeholder="Seleziona un orario" />
                </SelectTrigger>
                <SelectContent>
                  {timeSlots.map((t) => (
                    <SelectItem key={t} value={t}>
                      <span className="flex items-center gap-2">
                        <Clock className="h-3.5 w-3.5" />
                        {t}
                      </span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Note */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Note aggiuntive</label>
            <Textarea
              placeholder="Descrivi brevemente di cosa hai bisogno..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="bg-background/50 border-border/50 min-h-[100px]"
            />
          </div>

          <Button type="submit" size="lg" className="w-full md:w-auto" disabled={loading}>
            <Send className="mr-2 h-4 w-4" />
            {loading ? "Prenotazione in corso..." : "Prenota appuntamento"}
          </Button>
        </motion.form>
      </div>
    </section>
  );
};

export default AppointmentCalendar;
