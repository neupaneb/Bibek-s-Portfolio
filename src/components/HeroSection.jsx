import {
  ArrowDown,
  ArrowRight,
  GraduationCap,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";
import { useState } from "react";

export const HeroSection = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center px-4 pb-16 pt-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(33,197,255,0.14),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.18),transparent_28%),radial-gradient(circle_at_bottom,rgba(16,185,129,0.12),transparent_30%)]" />

      <div className="container relative z-10 mx-auto max-w-6xl">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/8 px-4 py-2 text-sm font-medium text-primary opacity-0 animate-fade-in">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Open to software engineering opportunities
            </div>

            <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight text-foreground opacity-0 animate-fade-in-delay-1 md:text-7xl">
              Building full-stack products with clean engineering and
              production-ready design.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground opacity-0 animate-fade-in-delay-2 md:text-xl">
              I&apos;m Bibek Neupane, a computer science student focused on web
              applications, applied machine learning, and developer communities.
              I build practical software with a strong bias for usability,
              performance, and clear execution.
            </p>

            <div className="mt-10 flex flex-col gap-4 opacity-0 animate-fade-in-delay-4 sm:flex-row">
              <a
                href="#projects"
                className="cosmic-button inline-flex items-center gap-2"
              >
                View Projects
                <ArrowRight size={16} />
              </a>

              <a
                href="/OFFICIALRESUME.pdf"
                download
                className="inline-flex items-center justify-center rounded-full border border-border/70 bg-background/70 px-6 py-3 font-medium text-foreground transition-colors duration-300 hover:border-primary/50 hover:text-primary"
              >
                Download Resume
              </a>
            </div>

            <div className="mt-10 grid gap-4 opacity-0 animate-fade-in-delay-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-border/60 bg-card/80 p-4 backdrop-blur-sm">
                <div className="text-3xl font-bold text-foreground">10+</div>
                <div className="mt-1 text-sm text-muted-foreground">
                  technical events and leadership initiatives
                </div>
              </div>

              <div className="rounded-2xl border border-border/60 bg-card/80 p-4 backdrop-blur-sm">
                <div className="text-3xl font-bold text-foreground">6+</div>
                <div className="mt-1 text-sm text-muted-foreground">
                  shipped portfolio and academic projects
                </div>
              </div>

              <div className="rounded-2xl border border-border/60 bg-card/80 p-4 backdrop-blur-sm">
                <div className="text-3xl font-bold text-foreground">Full Stack</div>
                <div className="mt-1 text-sm text-muted-foreground">
                  frontend, backend, and applied ML workflow
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-5 text-sm text-muted-foreground opacity-0 animate-fade-in-delay-4">
              <div className="inline-flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                Nashville, Tennessee
              </div>
              <a
                href="mailto:neupanebibek4464@gmail.com"
                className="inline-flex items-center gap-2 transition-colors hover:text-primary"
              >
                <Mail size={16} className="text-primary" />
                neupanebibek4464@gmail.com
              </a>
              <a
                href="https://github.com/neupaneb"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-primary"
              >
                <Github size={16} className="text-primary" />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/bibekneupane7"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-primary"
              >
                <Linkedin size={16} className="text-primary" />
                LinkedIn
              </a>
            </div>
          </div>

          <div className="opacity-0 animate-fade-in-delay-3">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-5 rounded-[2rem] bg-linear-to-br from-cyan-400/20 via-primary/20 to-emerald-400/20 blur-2xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-card/85 p-5 shadow-2xl shadow-black/15 backdrop-blur-md">
                <div className="mb-5 flex items-center justify-between rounded-2xl border border-border/50 bg-background/80 px-4 py-3">
                  <div>
                    <div className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                      Profile
                    </div>
                    <div className="mt-1 text-lg font-semibold">Bibek Neupane</div>
                  </div>

                  <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    <GraduationCap size={14} />
                    Fisk University
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-[1.75rem] border border-border/50 bg-[linear-gradient(160deg,rgba(22,28,45,0.95),rgba(14,116,144,0.72),rgba(16,185,129,0.52))] p-3">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.2),transparent_35%)]" />
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[1.35rem] bg-slate-950/30">
                    {!imageError ? (
                      <img
                        src="/profile-photo.png"
                        alt="Portrait of Bibek Neupane"
                        className="h-full w-full object-cover"
                        onError={() => setImageError(true)}
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(160deg,#0f172a,#0f766e,#1d4ed8)] p-8 text-center">
                        <div>
                          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-white/20 bg-white/10 text-3xl font-bold text-white backdrop-blur-sm">
                            BN
                          </div>
                          <p className="mt-5 text-sm uppercase tracking-[0.3em] text-cyan-100/75">
                            Add your portrait
                          </p>
                          <p className="mt-3 text-sm leading-6 text-white/80">
                            Place your photo at
                            <span className="mx-1 font-semibold text-white">
                              public/profile-photo.png
                            </span>
                            to replace this fallback card.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {[
                    { label: "Focus", value: "Full-stack engineering" },
                    { label: "Strength", value: "Execution + communication" },
                    { label: "Interests", value: "ML, web apps, product UX" },
                    { label: "Based in", value: "Nashville, TN" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-border/50 bg-background/70 px-4 py-3 text-left"
                    >
                      <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                        {item.label}
                      </div>
                      <div className="mt-1 text-sm font-medium text-foreground">
                        {item.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center animate-bounce">
        <span className="mb-2 text-sm text-muted-foreground">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
