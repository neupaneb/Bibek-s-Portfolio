import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary px-4 py-8">
      <div className="container mx-auto flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-left">
          <p className="text-lg font-semibold text-foreground">Bibek Portfolio</p>
          <p className="text-sm text-muted-foreground">
            Software engineering, machine learning, and security.
          </p>
        </div>

        <a
          href="#hero"
          className="rounded-md border border-border bg-white p-2 text-primary hover:border-slate-400"
        >
          <ArrowUp size={20} />
        </a>
      </div>
    </footer>
  );
};
