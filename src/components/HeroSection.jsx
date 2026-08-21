import { ArrowUpRight, Eye, Github, Linkedin, Mail, MapPin } from "lucide-react";

const navItems = [
  ["About", "#about"],
  ["Experience", "#experience"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Contact", "#contact"],
];

export const HeroSection = () => (
  <aside id="hero" className="px-6 pb-12 pt-16 lg:sticky lg:top-0 lg:h-screen lg:py-14">
    <div>
      <img
        src="/profile-photo.png"
        alt="Bibek Neupane"
        className="mb-8 aspect-[4/5] w-40 rounded-lg border border-slate-700 object-cover shadow-xl shadow-black/20"
      />

      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">Software Engineer</p>
      <h1 className="text-4xl font-semibold tracking-[-0.04em] text-foreground sm:text-5xl">Bibek Neupane</h1>
      <p className="mt-4 max-w-sm text-lg leading-7 text-muted-foreground">Full-stack engineer building reliable, intelligent software for real-world problems.</p>

      <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
        <span className="inline-flex items-center gap-2"><MapPin size={15} /> Nashville, TN</span>
        <a href="mailto:neupanebivek4@gmail.com" className="inline-flex items-center gap-2 hover:text-primary"><Mail size={15} /> Email</a>
      </div>
      <p className="mt-3 text-sm text-muted-foreground">Open to relocation · <span className="font-semibold text-slate-300">Graduating December 2026</span></p>

      <nav className="mt-8 hidden lg:block" aria-label="Section navigation">
        <ul className="space-y-3">
          {navItems.map(([label, href]) => (
            <li key={href}>
              <a href={href} className="group inline-flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground">
                <span className="h-px w-8 bg-slate-600 transition-all group-hover:w-14 group-hover:bg-primary" />{label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-10 flex flex-wrap items-center gap-4">
        <a href="/OFFICIALRESUME.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-blue-300">
          <Eye size={16} /> View Resume <ArrowUpRight size={15} />
        </a>
        <span className="h-5 w-px bg-border" />
        <a href="https://github.com/neupaneb" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-primary"><Github size={19} /> GitHub</a>
        <a href="https://linkedin.com/in/bibekneupane7" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-primary"><Linkedin size={19} /> LinkedIn</a>
      </div>
    </div>
  </aside>
);
