import { Briefcase, FlaskConical, Trophy } from "lucide-react";

const experiences = [
  {
    organization: "TN-QuMat",
    role: "AMPLIFY Quantum Research Scholar",
    period: "Jul 2026 - Sep 2026",
    icon: FlaskConical,
    highlights: [
      "Testing Shor's and Grover's algorithms against modern cryptography.",
      "Benchmarking NIST standards ML-KEM and ML-DSA.",
    ],
  },
  {
    organization: "NexSewa",
    role: "Software Engineering Intern",
    period: "May 2025 - Aug 2025",
    icon: Briefcase,
    highlights: [
      "Built a React, Node.js, and PostgreSQL platform; improved response time by 35%.",
      "Built an AI agent that saved 25+ hours monthly; deployed with Docker and AWS.",
    ],
  },
  {
    organization: "Mastercard x AUC",
    role: "Team UnderCoder - First Runner-up",
    period: "Oct 2025 - Dec 2025",
    icon: Trophy,
    highlights: [
      "Built a Random Forest model for Tennessee community growth scores.",
      "Created the data pipeline and visualized community trends.",
    ],
  },
  {
    organization: "Chain-Link Engineering",
    role: "Software Engineering Intern",
    period: "May 2024 - Aug 2024",
    icon: Briefcase,
    highlights: [
      "Built features for a hospital ticketing system serving 700+ daily users.",
      "Created MongoDB schemas and dashboards that improved decision speed by 15%.",
    ],
  },
];

const emphasizedTerms = new Set([
  "ML-KEM",
  "ML-DSA",
  "35%",
  "25+ hours",
  "First Runner-up",
  "700+",
  "15%",
]);

const emphasize = (text) =>
  text.split(/(ML-KEM|ML-DSA|35%|25\+ hours|First Runner-up|700\+|15%)/g).map((part) =>
    emphasizedTerms.has(part) ? <strong key={part} className="font-semibold text-foreground">{part}</strong> : part
  );

export const ExperienceSection = () => (
  <section id="experience" className="border-t border-border py-14">
    <div className="container mx-auto max-w-6xl">
      <div className="mb-12 max-w-3xl text-left">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-primary">Experience</p>
        <h2 className="text-3xl font-semibold md:text-4xl">Building software across industry and research.</h2>
      </div>
      <div className="divide-y divide-border border-y border-border">
        {experiences.map(({ organization, role, period, icon: Icon, highlights }) => (
          <article key={organization} className="py-7 text-left">
            <div className="flex items-start gap-4">
              <div className="rounded-md bg-slate-800 p-3"><Icon className="h-5 w-5 text-primary" /></div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                  <div><h3 className="text-xl font-semibold">{organization}</h3><p className="font-medium text-primary">{role}</p></div>
                  <span className="shrink-0 text-sm text-muted-foreground">{period}</span>
                </div>
                <ul className="mt-4 space-y-3 text-muted-foreground">
                  {highlights.map((highlight) => <li key={highlight} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" /> <span>{emphasize(highlight)}</span></li>)}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
