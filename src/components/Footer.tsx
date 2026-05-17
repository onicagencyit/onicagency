import { Instagram, Linkedin, Music2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-background border-t border-[hsl(35_91%_55%/0.18)] py-14">
      <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-5">
        <div className="font-display text-2xl tracking-wider">
          <span className="text-foreground">ONIC</span>{" "}
          <span className="text-primary">Agency</span>
        </div>
        <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
          Operations · Networking · Innovation · Content
        </div>
        <div className="flex items-center gap-5 mt-2">
          <a
            href="https://instagram.com/onic.agency"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram @onic.agency"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com/company/onicagency"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="https://tiktok.com/@onicagency"
            target="_blank"
            rel="noreferrer"
            aria-label="TikTok @onicagency"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Music2 className="h-5 w-5" />
          </a>
        </div>
        <div className="text-xs text-muted-foreground mt-3">
          © 2025 ONIC Agency — onicagency.it
        </div>
      </div>
    </footer>
  );
};

export default Footer;
