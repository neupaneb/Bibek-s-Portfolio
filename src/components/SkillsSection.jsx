const skillGroups = [
  {
    title: "Languages",
    skills: ["Python", "C/C++", "JavaScript", "TypeScript", "Java", "C#", "SQL", "HTML/CSS"],
  },
  {
    title: "Frameworks",
    skills: ["React", "Node.js", "Express", "Django", "Flask", "PyTorch", "TensorFlow", ".NET"],
  },
  {
    title: "Data & Infrastructure",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Docker", "AWS EC2", "GitHub Actions", "Linux"],
  },
];

export const SkillsSection = () => (
  <section id="skills" className="border-t border-border py-14">
    <div className="container mx-auto max-w-6xl">
      <div className="mb-10 max-w-3xl text-left">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Technical Skills</p>
        <h2 className="text-3xl font-semibold md:text-4xl">Tools I work with.</h2>
      </div>

      <div className="grid border-y border-border md:grid-cols-3 md:divide-x md:divide-border">
        {skillGroups.map((group) => (
          <div key={group.title} className="border-b border-border py-7 text-left last:border-b-0 md:border-b-0 md:px-7 md:first:pl-0 md:last:pr-0">
            <h3 className="font-semibold text-foreground">{group.title}</h3>
            <p className="mt-3 leading-7 text-muted-foreground">{group.skills.join(" · ")}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
