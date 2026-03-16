import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="relative px-4 py-24">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 max-w-3xl text-left">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-primary">
            About Me
          </p>
          <h2 className="text-3xl font-bold md:text-5xl">
            Product-minded engineering with a strong technical foundation.
          </h2>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            I enjoy building software that feels polished, solves real problems,
            and stands up to actual use. My work sits at the intersection of
            full-stack development, machine learning, and community leadership.
          </p>
        </div>

        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="space-y-6 text-left">
            <h3 className="text-2xl font-semibold md:text-3xl">
              Hi, I&apos;m Bibek, a developer who values clarity, ownership,
              and practical outcomes.
            </h3>

            <p className="text-lg leading-8 text-muted-foreground">
              I have a strong interest in scalable web systems and intuitive
              interfaces. My background in computer science helps me move
              comfortably from frontend experience design to backend logic and
              data-driven features.
            </p>

            <p className="text-lg leading-8 text-muted-foreground">
              Beyond code, I care about leadership and communication. From
              organizing developer events to building projects end-to-end, I aim
              to contribute with both technical depth and reliability.
            </p>

            <div className="grid gap-4 rounded-3xl border border-border/60 bg-card/70 p-6 shadow-lg shadow-black/5 sm:grid-cols-3">
              <div>
                <div className="text-3xl font-bold text-foreground">React</div>
                <div className="mt-1 text-sm text-muted-foreground">
                  modern frontend delivery
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">Node</div>
                <div className="mt-1 text-sm text-muted-foreground">
                  backend APIs and services
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">ML</div>
                <div className="mt-1 text-sm text-muted-foreground">
                  practical model-driven solutions
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 pt-2 sm:flex-row">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="/OFFICIALRESUME.pdf"
                download
                className="inline-flex items-center justify-center rounded-full border border-primary px-6 py-3 font-medium text-primary transition-colors duration-300 hover:bg-primary/10"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border rounded-3xl p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold">Full Stack Development</h4>
                  <p className="text-muted-foreground">
                    Building robust products with React, Node.js, Flask, MongoDB,
                    and clear API design.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border rounded-3xl p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold">Community Leadership</h4>
                  <p className="text-muted-foreground">
                    Led Google Developer Student Club initiatives, organized
                    events, and helped create hands-on learning opportunities.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border rounded-3xl p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold">
                    Software Engineering Experience
                  </h4>
                  <p className="text-muted-foreground">
                    Applied engineering skills in internships and project work
                    that required delivery, iteration, and problem solving.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
