import { motion } from "framer-motion";

const skills = [
  { name: "Figma", icon: "devicon-figma-plain" },
  { name: "Miro", icon: "devicon-miro-plain" },
  { name: "Jira", icon: "devicon-jira-plain" },
  { name: "HTML", icon: "devicon-html5-plain" },
  { name: "CSS", icon: "devicon-css3-plain" },
  { name: "JavaScript", icon: "devicon-javascript-plain" },
  { name: "PHP", icon: "devicon-php-plain" },
  { name: "Git", icon: "devicon-git-plain" },
  { name: "React", icon: "devicon-react-original" },
  { name: "Laravel", icon: "devicon-laravel-plain" },
  { name: "WordPress", icon: "devicon-wordpress-plain" },
  { name: "Tailwind", icon: "devicon-tailwindcss-plain" },
  { name: "TypeScript", icon: "devicon-typescript-plain" },
  { name: "shadcn/ui", icon: "devicon-react-original" },
];

const About = () => {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl font-bold">About</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="grid md:grid-cols-2 gap-16"
        >
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              I'm a UX/UI designer with several years of experience creating clear, intuitive, and visually refined digital experiences. From wireframes and design systems to interactive prototypes, I focus on putting the user first in every design decision.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Along the way, I deepened my knowledge of full‑stack development — giving me a technical perspective that makes collaboration with developers smoother and my designs more grounded in what can actually be built.
            </p>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-primary mb-6">
              Technologies I work with
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-2 font-mono text-sm text-muted-foreground"
                >
                  <i className={`${skill.icon} text-primary text-base`} />
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
