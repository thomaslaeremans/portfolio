import { motion } from "framer-motion";

const experiences = [
  {
    company: "VDAB ",
    role: "Full Stack Developer Training",
    period: "Jun 2025 — Mar 2026",
    description: "Training as a Full Stack PHP Developer with a strong focus on both front‑end and back‑end development. Gained hands‑on experience with web technologies such as HTML, CSS and JavaScript, and learned to build dynamic web applications using PHP and SQL. Worked with modern frameworks including Laravel for back‑end development and React for creating component‑based front‑end interfaces.",
  },
  {
    company: "Bewire Group",
    role: "Inhouse UI Designer",
    period: "2021 — Dec 2024",
    description: "Designing user‑friendly interfaces and collaborating with developers, which strengthened my understanding of component‑based development and frontend flows, mapping out user flows to optimize the overall experience, and creating visual materials that support brand identity and internal communication.",
  },
  {
    company: "Ravago",
    role: "Consultant UI Designer",
    period: "Jan 2022 — Mar 2024",
    description: "Developing a UI design system for a B2B platform in the polymers, rubber and chemicals sector, and creating UI tokens and design systems that align directly with modern frontend architectures.",
  },
  {
    company: "Studio Hyperdrive",
    role: "Consultant UX/UI Designer",
    period: "Sep 2021 — Jan 2022",
    description: "Designing user‑friendly and brand‑aligned interfaces for websites and applications, collaborating closely with developers which strengthened my ability to think in components, states and consistent flows, and carrying out prototyping and user testing to ensure an optimal user experience.",
  },
  {
    company: "Fednot",
    role: "Consultant UX/UI Designer",
    period: "2021",
    description: "Working on the Manage My Business website (formerly StartMyBusiness), designing the visual layout and ensuring that the structure aligned optimally with user needs, even with a large amount of content.",
  },
  {
    company: "Designskills (now: Stay Wild)",
    role: "Allround Designer",
    period: "2019 — 2021",
    description: "Designing user‑friendly and consistent interfaces for websites and applications, creating marketing materials aligned with the visual identity, producing wireframes and prototypes to support the design process, collaborating closely with developers to ensure seamless implementation, and delivering materials that fully match the client’s brand identity.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">Experience</h2>
          <p className="text-muted-foreground text-lg">Where I've worked and what I've built.</p>
        </motion.div>
        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative pl-8 pb-12 last:pb-0 border-l border-border"
            >
              <div className="absolute left-0 top-1 w-2 h-2 rounded-full bg-primary -translate-x-[5px]" />
              <span className="text-xs font-medium text-muted-foreground tracking-wider uppercase">{exp.period}</span>
              <h3 className="text-lg font-bold text-foreground mt-1">{exp.company}</h3>
              <p className="text-sm font-medium text-primary mb-2">{exp.role}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
