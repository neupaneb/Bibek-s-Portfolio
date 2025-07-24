import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Fitness Tracker",
    description:
      "A fitness tracking app to monitor workouts, calories, and daily activity. Designed with user-friendly UI and persistent data storage.",
    image: "/projects/fitness.png",
    tags: ["React", "Firebase", "TailwindCSS"],
    demoUrl: "#",
    githubUrl: "https://github.com/neupaneb/Fitness-Tracker",
  },
  {
    id: 2,
    title: "Soccer Stats",
    description:
      "Track your favorite global soccer clubs with real-time data using API-Football. Includes club search, league filtering, and MongoDB caching.",
    image: "/projects/soccer.png",
    tags: ["React", "Node.js", "MongoDB", "API-Football"],
    demoUrl: "#",
    githubUrl: "https://github.com/neupaneb/Soccer-Stats",
  },
  {
    id: 3,
    title: "YouTube Transcript Summarizer",
    description:
      "A powerful tool to summarize long YouTube videos using transcript extraction and NLP summarization techniques.",
    image: "/projects/summarizer.png",
    tags: ["Python", "NLP", "YouTube API", "Flask"],
    demoUrl: "#",
    githubUrl: "https://github.com/neupaneb/-YouTube-Transcript-Summarizer",
  },
  {
    id: 4,
    title: "Chat Me App",
    description:
      "Real-time chat application with user authentication, group chats, and responsive design. Built with modern MERN stack.",
    image: "/projects/chat.png",
    tags: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
    demoUrl: "#",
    githubUrl: "https://github.com/neupaneb/Chat-Me-App",
  },
  {
    id: 5,
    title: "BlackJack",
    description:
      "A fully functional Blackjack card game application built with Python, implementing game logic and user interaction.",
    image: "/projects/blackjack.png",
    tags: ["Python"],
    demoUrl: "#",
    githubUrl: "https://github.com/neupaneb/BlackJack",
  },
  {
    id: 6,
    title: "Wine Prediction",
    description:
      "Machine learning model predicting wine quality based on physicochemical tests, built with Python and scikit-learn.",
    image: "/projects/wine.png",
    tags: ["Python", "Machine Learning", "scikit-learn"],
    demoUrl: "#",
    githubUrl: "https://github.com/neupaneb/Wine-prediction",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
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

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
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
