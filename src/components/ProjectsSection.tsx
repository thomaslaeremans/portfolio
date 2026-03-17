import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useNavigate } from "react-router-dom";
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
  "PHP": "devicon-php-plain",
  "MVC": "devicon-php-plain",
  "OOP": "devicon-php-plain",
  "Scrum": "devicon-jira-plain",
  JavaScript: "devicon-javascript-plain",
  HTML: "devicon-html5-plain",
  CSS3: "devicon-css3-plain", 
};

const ProjectCard = ({ project, index, large }: { project: typeof projects[0]; index: number; large?: boolean }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ scale: 1.02 }}
      onClick={() => navigate(`/projects/${project.slug}`)}
      className={`group relative rounded-lg border border-border bg-card flex flex-col overflow-hidden transition-colors duration-200 hover:border-primary/30 cursor-pointer ${large ? "md:col-span-2 md:row-span-2" : ""}`}
    >
      {project.image && project.showImageInCard !== false && (
        <div className={`w-full bg-secondary ${large ? "h-44" : "h-36"}`}>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full ml-4 md:ml-10 mt-6 object-contain object-left transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      <div className={`flex flex-col justify-between flex-1 ${large ? "p-10" : "p-6"}`}>
        <div>
          <h3 className={`font-bold text-card-foreground mb-2 ${large ? "text-2xl" : "text-lg"}`}>{project.title}</h3>
          <p className={`text-muted-foreground leading-relaxed ${large ? "text-base mb-6" : "text-sm mb-4"}`}>{project.description}</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-md bg-background text-primary">
                {tagIcons[tag] && <i className={`${tagIcons[tag]} text-sm`} />}
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            {project.github && (
              <a
                href={project.github}
                onClick={(e) => e.stopPropagation()}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {project.url && (
              <a
                href={project.url}
                onClick={(e) => e.stopPropagation()}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">Selected Work</h2>
          <p className="text-muted-foreground text-lg max-w-lg">A selection of projects I’ve built during my transition from UX/UI designer to full‑stack developer.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} large={project.featured} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
