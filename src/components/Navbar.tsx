import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

type NavLink = { label: string; href: string; section?: string };

const links: NavLink[] = [
  { label: "Servizi", href: "/#servizi", section: "servizi" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Chi siamo", href: "/#chi-siamo", section: "chi-siamo" },
  { label: "Contatti", href: "/#contatti", section: "contatti" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNav = (e: React.MouseEvent, link: NavLink) => {
    setOpen(false);
    if (link.section) {
      if (location.pathname === "/") {
        e.preventDefault();
        document
          .getElementById(link.section)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        e.preventDefault();
        navigate(link.href);
      }
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-16 backdrop-blur-lg transition-shadow duration-300 ${
          scrolled ? "shadow-lg shadow-black/40" : ""
        }`}
        style={{
          backgroundColor: "rgba(14,14,14,0.95)",
          borderBottom: "1px solid rgba(245,166,35,0.15)",
        }}
      >
        <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-6">
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="font-display text-2xl tracking-wider"
          >
            <span className="text-foreground">ONIC</span>{" "}
            <span className="text-primary">Agency</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={(e) => handleNav(e, l)}
                className="text-sm text-foreground/80 hover:text-primary transition-colors font-body"
              >
                {l.label}
              </a>
            ))}
          </div>

          <a
            href="/parliamo"
            className="hidden md:inline-flex items-center h-10 px-5 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 font-medium text-sm transition-colors"
          >
            Parliamo
          </a>

          <button
            type="button"
            aria-label={open ? "Chiudi menu" : "Apri menu"}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden text-primary p-2 -mr-2"
          >
            {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </nav>

      {open && (
        <div
          className="fixed inset-0 z-40 md:hidden pt-16 animate-fade-in"
          style={{ backgroundColor: "#0E0E0E" }}
        >
          <div className="flex flex-col items-center justify-center gap-8 py-12 px-6 h-full">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={(e) => handleNav(e, l)}
                className="font-display text-3xl tracking-wider text-foreground hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="/parliamo"
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex items-center justify-center h-12 px-8 rounded-md bg-primary text-primary-foreground font-medium"
            >
              Parliamo
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
