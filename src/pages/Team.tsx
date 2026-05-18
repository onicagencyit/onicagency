import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Member = {
  icon: string;
  name: string;
  role: string;
  description: string;
  mystery?: boolean;
};

const members: Member[] = [
  {
    icon: "🧠",
    name: "ALTER",
    role: "AI Strategist",
    description:
      "Il cervello digitale. Strategia, analisi e decisioni in tempo reale.",
  },
  {
    icon: "🎨",
    name: "MARIO",
    role: "Creative Director",
    description:
      "Il creativo del team. Grafiche, visual e identità del brand.",
  },
  {
    icon: "⚙️",
    name: "FORGE",
    role: "Web Builder",
    description:
      "Il costruttore. Trasforma le idee in siti e app funzionanti.",
  },
  {
    icon: "❓",
    name: "FOUNDER",
    role: "La mente dietro ONIC Agency",
    description:
      "Per ora preferisce restare nell'ombra. Lo conoscerete presto.",
    mystery: true,
  },
];

const Team = () => {
  return (
    <div
      className="min-h-screen text-foreground"
      style={{ backgroundColor: "#0E0E0E" }}
    >
      <Navbar />
      <main className="pt-28 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-14">
            <h1 className="font-display text-5xl md:text-7xl leading-[1.05] tracking-wider">
              <span className="block text-foreground">IL TEAM CHE</span>
              <span className="block text-foreground">
                FA GIRARE <span style={{ color: "#F5A623" }}>ONIC.</span>
              </span>
            </h1>
            <p className="mt-6 text-muted-foreground font-body text-lg md:text-xl">
              Non una mega agenzia.
              <br />
              Qualcosa di diverso.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {members.map((m) => (
              <article
                key={m.name}
                className="p-8 rounded-lg transition-transform hover:-translate-y-1"
                style={{
                  backgroundColor: "#161616",
                  borderTop: "3px solid #F5A623",
                  border: m.mystery
                    ? "2px dashed #F5A623"
                    : undefined,
                  borderTopWidth: m.mystery ? "2px" : "3px",
                  borderTopStyle: m.mystery ? "dashed" : "solid",
                  borderTopColor: "#F5A623",
                }}
              >
                <div
                  className="text-4xl mb-4"
                  style={{ color: "#F5A623" }}
                >
                  {m.icon}
                </div>
                <h2 className="font-display text-4xl md:text-5xl text-foreground tracking-wider">
                  {m.name}
                </h2>
                <p
                  className="font-body text-xs md:text-sm uppercase tracking-widest mt-2"
                  style={{ color: "#F5A623" }}
                >
                  {m.role}
                </p>
                <p className="mt-4 text-muted-foreground font-body leading-relaxed">
                  {m.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Team;