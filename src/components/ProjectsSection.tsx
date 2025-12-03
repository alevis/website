import { ExternalLink, Github, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with real-time inventory management, payment processing, and analytics dashboard.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      github: "https://github.com",
      live: "https://example.com",
      featured: true,
    },
    {
      title: "Task Management App",
      description:
        "Collaborative project management tool with real-time updates, drag-and-drop functionality, and team features.",
      technologies: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
      github: "https://github.com",
      live: "https://example.com",
      featured: true,
    },
    {
      title: "AI Chat Interface",
      description:
        "Modern chat application powered by AI with natural language processing and context-aware responses.",
      technologies: ["React", "Python", "FastAPI", "OpenAI"],
      github: "https://github.com",
      live: "https://example.com",
      featured: true,
    },
  ];

  const otherProjects = [
    {
      title: "Weather Dashboard",
      description: "Real-time weather app with location-based forecasts and beautiful visualizations.",
      technologies: ["React", "API", "Charts"],
    },
    {
      title: "Blog Platform",
      description: "Markdown-based blogging platform with syntax highlighting and SEO optimization.",
      technologies: ["Next.js", "MDX", "Tailwind"],
    },
    {
      title: "Portfolio Generator",
      description: "CLI tool to generate developer portfolios from GitHub data.",
      technologies: ["Node.js", "GitHub API", "CLI"],
    },
  ];

  return (
    <section id="projects" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="font-mono text-primary text-sm tracking-wider uppercase">
              Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 text-card-foreground">
              Featured Projects
            </h2>
          </div>

          {/* Featured Projects */}
          <div className="space-y-12 mb-20">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div
                  className={`order-2 ${index % 2 === 1 ? "md:order-1" : "md:order-2"}`}
                >
                  <div className="aspect-video rounded-lg bg-gradient-to-br from-primary/20 to-accent border border-border flex items-center justify-center">
                    <Folder className="h-16 w-16 text-primary/50" />
                  </div>
                </div>
                <div
                  className={`order-1 ${index % 2 === 1 ? "md:order-2 md:text-right" : "md:order-1"}`}
                >
                  <span className="font-mono text-primary text-sm">Featured Project</span>
                  <h3 className="text-2xl font-bold mt-2 mb-4 text-card-foreground">
                    {project.title}
                  </h3>
                  <div className="p-6 rounded-lg bg-background border border-border shadow-lg mb-4">
                    <p className="text-muted-foreground">{project.description}</p>
                  </div>
                  <div
                    className={`flex flex-wrap gap-2 mb-4 ${
                      index % 2 === 1 ? "md:justify-end" : ""
                    }`}
                  >
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-accent text-accent-foreground font-mono text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div
                    className={`flex gap-4 ${index % 2 === 1 ? "md:justify-end" : ""}`}
                  >
                    <Button variant="ghost" size="icon" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Other Projects */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-8 text-card-foreground">
              Other Noteworthy Projects
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg bg-background border border-border hover:border-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group"
                >
                  <Folder className="h-10 w-10 text-primary mb-4" />
                  <h4 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
