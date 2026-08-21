import { ArrowRight, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "MiniDB: SQL Database Engine",
    description:
      "SQL engine with a custom REPL, parser, executor, persistent storage, and tests.",
    image: "/projects/minidb-sql.png",
    imageClass: "object-contain p-4",
    tags: ["Go", "SQL Parser", "Storage Engine", "Unit Testing"],
    githubUrl: "https://github.com/neupaneb/minidb",
  },
  {
    id: 2,
    title: "Financial Sentiment Analysis (BERT)",
    description:
      "Fine-tuned BERT model for financial sentiment with a Streamlit interface.",
    image: "/projects/sentiment-analysis.png",
    imageClass: "object-cover",
    tags: ["Python", "PyTorch", "Hugging Face", "Streamlit"],
    githubUrl: "https://github.com/nyaupane-netra/Financial-Sentiment-Analysis",
  },
  {
    id: 3,
    title: "Soccer-Stat Analyzer",
    description:
      "Real-time soccer data app with API-Football and MongoDB caching.",
    image: "/projects/soccer.png",
    imageClass: "object-cover",
    tags: ["React", "Node.js", "MongoDB", "API-Football"],
    githubUrl: "https://github.com/neupaneb/Soccer-Stats",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="border-t border-border py-14">
      <div className="container mx-auto max-w-5xl">
        <h2 className="mb-4 text-left text-3xl font-semibold md:text-4xl">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="mb-10 max-w-2xl text-left text-muted-foreground">
          Selected work across databases, machine learning, and full-stack development.
        </p>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card card-hover"
            >
              {project.image ? (
                <div className="h-48 overflow-hidden bg-white"><img src={project.image} alt={project.title} className={`h-full w-full ${project.imageClass}`} /></div>
              ) : (
                <div className="flex h-40 items-end bg-slate-900 p-6">
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-200">{project.tags[0]} / Featured Build</span>
                </div>
              )}

              <div className="flex flex-1 flex-col p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                    className="rounded border border-border bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="mt-auto flex items-center justify-between pt-2">
                  <div className="flex space-x-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-left">
          <a
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/neupaneb"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
