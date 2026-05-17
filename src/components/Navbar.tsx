import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-background/70 border-b border-[hsl(35_91%_55%/0.18)]">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="/" className="font-display text-2xl tracking-wider">
          <span className="text-foreground">ONIC</span>{" "}
          <span className="text-primary">Agency</span>
        </a>
        <Button
          asChild
          variant="outline"
          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent font-body"
        >
          <a href="/parliamo">Parliamo</a>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
