import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import onicLogo from "@/assets/onic-logo.png";

const links = [
  { to: "/servizi", label: "Servizi" },
  { to: "/appuntamenti", label: "Appuntamenti" },
  { to: "/chi-sono", label: "Chi sono" },
  { to: "/contatti", label: "Contatti" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/30">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        <Link to="/" className="flex items-center gap-2">
          <img src={onicLogo} alt="Onic" width={36} height={36} className="h-9 w-9 object-contain" />
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`hover:text-foreground transition-colors ${
                location.pathname === link.to ? "text-primary font-medium" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
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
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={`hover:text-foreground transition-colors ${
                  location.pathname === link.to ? "text-primary font-medium" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
