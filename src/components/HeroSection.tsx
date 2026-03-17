import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="about" className="relative min-h-screen flex flex-col justify-center lg:justify-end overflow-hidden px-6 pt-24 lg:pt-0">

      {/* Background image — desktop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="hidden lg:block absolute bottom-[350px] md:bottom-0 -right-40 w-[75%] pointer-events-none select-none"
      >
        {/* Vertical fade: image fades out towards the bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background z-10" />
        <img
          src={`${import.meta.env.BASE_URL}images/hero.png`}
          alt=""
          className="w-full object-contain object-bottom"
        />
      </motion.div>

      {/* Background image — mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="lg:hidden absolute inset-0 pointer-events-none select-none z-0"
      >
        <img
          src={`${import.meta.env.BASE_URL}images/hero.png`}
          alt=""
          className="absolute bottom-0 left-3/4 -translate-x-1/2 h-[55vh] w-auto max-w-none opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background" />
      </motion.div>

      {/* Text content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative z-20 max-w-5xl w-full mx-auto pb-40 lg:pb-[17%] text-left"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary text-sm font-medium text-muted-foreground mb-8">
          <span className="w-2 h-2 rounded-full bg-green-600 animate-pulse" />
          Available for work
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1] mb-6">
          I'm Thomas
          <br />
          <span className="text-primary">Creative</span>
          <br />
          Full Stack Developer.
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl leading-relaxed mb-10">
          Full‑stack developer with a strong background in UX/UI design, combining technical expertise with a user‑first mindset. Experienced in both frontend and backend development, delivering modern, reliable, and thoughtfully crafted web applications.
        </p>
        <div className="flex flex-col md:flex-row justify-start gap-4 items-center">
          <a
            href="#projects"
            className="inline-flex w-full md:w-fit items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity duration-200"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center w-full md:w-fit gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-semibold text-sm hover:bg-secondary transition-colors duration-200"
          >
            Get in Touch
          </a>
          <a
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="cursor-pointer text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </a>
        </div>

      </motion.div>

    </section>
  );
};

export default HeroSection;