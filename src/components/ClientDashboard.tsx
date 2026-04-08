import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Users, CalendarCheck, TrendingUp, Clock, CheckCircle2, AlertCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface AppointmentRow {
  id: string;
  name: string;
  service: string;
  date: string;
  time_slot: string;
  status: string;
  created_at: string;
}

const ClientDashboard = () => {
  const [appointments, setAppointments] = useState<AppointmentRow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAppointments = async () => {
      const { data, error } = await supabase
        .from("appointments")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(10);

      if (!error && data) {
        setAppointments(data);
      }
      setLoading(false);
    };
    fetchAppointments();
  }, []);

  const totalClients = new Set(appointments.map((a) => a.name)).size;
  const pendingCount = appointments.filter((a) => a.status === "pending").length;
  const confirmedCount = appointments.filter((a) => a.status === "confirmed").length;

  const stats = [
    { icon: Users, label: "Clienti attivi", value: totalClients, color: "text-primary" },
    { icon: CalendarCheck, label: "Appuntamenti", value: appointments.length, color: "text-accent" },
    { icon: Clock, label: "In attesa", value: pendingCount, color: "text-muted-foreground" },
    { icon: TrendingUp, label: "Confermati", value: confirmedCount, color: "text-green-500" },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Dashboard <span className="text-gradient">clienti</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Panoramica delle attività e degli appuntamenti recenti.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="card-glass rounded-xl p-6 border border-border/50 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <stat.icon className={`h-6 w-6 ${stat.color} mx-auto mb-3`} />
              <p className="text-2xl font-bold mb-1">
                {loading ? "—" : stat.value}
              </p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Recent appointments */}
        <motion.div
          className="card-glass rounded-xl border border-border/50 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="p-6 border-b border-border/50">
            <h3 className="text-lg font-semibold">Appuntamenti recenti</h3>
          </div>

          {loading ? (
            <div className="p-8 text-center text-muted-foreground">Caricamento...</div>
          ) : appointments.length === 0 ? (
            <div className="p-8 text-center text-muted-foreground">
              Nessun appuntamento ancora. Le prenotazioni appariranno qui.
            </div>
          ) : (
            <div className="divide-y divide-border/30">
              {appointments.slice(0, 5).map((apt) => (
                <div key={apt.id} className="flex items-center justify-between px-6 py-4 hover:bg-muted/30 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">
                      {apt.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <p className="font-medium text-sm">{apt.name}</p>
                      <p className="text-xs text-muted-foreground">{apt.service}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm">{apt.date} — {apt.time_slot}</p>
                    <span className={`inline-flex items-center gap-1 text-xs mt-1 ${
                      apt.status === "confirmed" ? "text-green-500" : "text-muted-foreground"
                    }`}>
                      {apt.status === "confirmed" ? (
                        <CheckCircle2 className="h-3 w-3" />
                      ) : (
                        <AlertCircle className="h-3 w-3" />
                      )}
                      {apt.status === "confirmed" ? "Confermato" : "In attesa"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientDashboard;
