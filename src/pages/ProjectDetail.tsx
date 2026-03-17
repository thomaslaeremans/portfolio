import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, Moon, Sun } from "lucide-react";
import { projects } from "@/data/projects";

const tagIcons: Record<string, string> = {
  "React": "devicon-react-original",
  "TypeScript": "devicon-typescript-plain",
  "Laravel": "devicon-laravel-plain",
  "Shadcn": "devicon-react-plain",
  "Tailwind CSS": "devicon-tailwindcss-plain",
  "Node.js": "devicon-nodejs-plain",
  "PostgreSQL": "devicon-postgresql-plain",
  "Python": "devicon-python-plain",
  "Docker": "devicon-docker-plain",
  "Next.js": "devicon-nextjs-plain",
  "Vue": "devicon-vuejs-plain",
  "GraphQL": "devicon-graphql-plain",
};

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("dark") ||
        (!document.documentElement.classList.contains("light") &&
          window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
    return false;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground mb-4">Project not found.</p>
          <button onClick={() => navigate("/")} className="text-primary hover:underline">
            Back to portfolio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Minimal top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 border-b border-border/50 bg-background/80 backdrop-blur-sm">
        <button
          onClick={() => navigate("/")}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to portfolio
        </button>
        <button
          onClick={() => setIsDark(!isDark)}
          className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-secondary"
          aria-label="Toggle theme"
        >
          {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>
      </div>

      <main className="pt-24 pb-32 px-6">
        <div className="max-w-3xl mx-auto">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-10"
          >
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-md bg-secondary text-primary"
                >
                  {tagIcons[tag] && <i className={`${tagIcons[tag]} text-sm`} />}
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">{project.title}</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">{project.description}</p>
          </motion.div>

          {/* Image */}
          {project.image && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="mb-10 rounded-xl overflow-hidden border border-border bg-secondary"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 md:h-80 object-contain object-center p-6"
              />
            </motion.div>
          )}

          {/* Long description */}
          {project.longDescription && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="mb-10"
            >
              <h2 className="text-xl font-bold text-foreground mb-3">About this project</h2>
              <div className="space-y-4">
                {project.longDescription.map((paragraph, i) => (
                  <p key={i} className="text-muted-foreground leading-relaxed">{paragraph}</p>
                ))}
              </div>
            </motion.div>
          )}

          {/* Features */}
          {project.features && project.features.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="mb-10"
            >
              <h2 className="text-xl font-bold text-foreground mb-4">Key features</h2>
              <ul className="space-y-2">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-muted-foreground">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Contributors */}
          {project.contributors && project.contributors.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="mb-10"
            >
              <h2 className="text-xl font-bold text-foreground mb-4">Contributors</h2>
              <div className="flex flex-wrap gap-3">
                {project.contributors.map((contributor) => (
                  <div
                    key={contributor.name}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg border border-border bg-card"
                  >
                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-sm font-semibold text-foreground flex-shrink-0">
                      {contributor.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground leading-none mb-0.5">{contributor.name}</p>
                      {contributor.role && (
                        <p className="text-xs text-muted-foreground">{contributor.role}</p>
                      )}
                    </div>
                    {contributor.github && (
                      <a
                        href={`https://github.com/${contributor.github}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-1 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Links */}
          {(project.url || project.github) && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="flex flex-wrap gap-3"
            >
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live demo
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border bg-card text-foreground text-sm font-medium hover:border-primary/50 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  View source
                </a>
              )}
            </motion.div>
          )}
        </div>
      </main>
    </div>
  );
};

export default ProjectDetail;
