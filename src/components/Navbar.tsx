import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/30">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="text-xl font-bold font-[family-name:var(--font-display)]">
          <span className="text-gradient">Dev</span>Studio
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#servizi" className="hover:text-foreground transition-colors">Servizi</a>
          <a href="#" className="hover:text-foreground transition-colors">Chi sono</a>
          <a href="#" className="hover:text-foreground transition-colors">Contatti</a>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden border-t border-border/30 bg-background/95 backdrop-blur-lg px-6 py-6 flex flex-col gap-4 text-sm"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <a href="#servizi" onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">Servizi</a>
            <a href="#" onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">Chi sono</a>
            <a href="#" onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">Contatti</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
