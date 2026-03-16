import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative mt-12 border-t border-border/70 bg-card/70 px-4 py-10 backdrop-blur-sm">
      <div className="container mx-auto flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-left">
          <p className="text-lg font-semibold text-foreground">Bibek Portfolio</p>
          <p className="text-sm text-muted-foreground">
            Full-stack projects, machine learning work, and contact information.
          </p>
        </div>

        <a
          href="#hero"
          className="rounded-full bg-primary/10 p-2 text-primary transition-colors hover:bg-primary/20"
        >
          <ArrowUp size={20} />
        </a>
      </div>
    </footer>
  );
};
