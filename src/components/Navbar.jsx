import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // ✅ fixed typo here
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed z-40 w-full border-b transition-colors duration-200",
        isScrolled ? "border-border bg-white/95" : "border-transparent bg-white/90"
      )}
    >
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between">
        <a
          className="text-base font-semibold tracking-tight text-foreground"
          href="#hero"
        >
          Bibek Neupane
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center md:flex">
          <div className="flex items-center gap-7">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.name}
              </a>
            ))}
          </div>

        </div>

        <div className="md:hidden">
          {/* Mobile Toggle Button */}
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="rounded-md border border-border bg-white p-2 text-foreground"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "fixed inset-x-0 top-16 z-40 border-b border-border bg-white px-6 py-8 md:hidden",
            "transition-all duration-200",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col items-start gap-6">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="font-medium text-muted-foreground hover:text-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
