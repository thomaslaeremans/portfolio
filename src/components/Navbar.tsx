import { Moon, Sun, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Navbar = ({ isDark, toggleTheme }: NavbarProps) => {
  const links = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed top-6 right-6 z-50 glass rounded-full px-2 py-2 flex items-center gap-1"
    >
      {links.map((link) => (
        <a
          key={link.label}
          onClick={() => document.getElementById(link.href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" })}
          className="px-4 hidden md:block py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 rounded-full hover:bg-secondary cursor-pointer"
        >
          {link.label}
        </a>
      ))}
      <div className="hidden md:block w-px h-5 bg-border mx-1" />
      <a href="https://github.com/thomaslaeremans" target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-foreground transition-colors duration-200">
        <Github className="w-4 h-4" />
      </a>
      <a href="https://linkedin.com/in/thomas-laeremans" target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-foreground transition-colors duration-200">
        <Linkedin className="w-4 h-4" />
      </a>
      <a href="mailto:thomaslaeremans@hotmail.com" className="p-2 text-muted-foreground hover:text-foreground transition-colors duration-200">
        <Mail className="w-4 h-4" />
      </a>
      <div className="w-px h-5 bg-border mx-1" />
      <button
        onClick={toggleTheme}
        className="p-2 text-muted-foreground hover:text-foreground transition-colors duration-200 rounded-full hover:bg-secondary"
        aria-label="Toggle theme"
      >
        {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
      </button>
    </motion.nav>
  );
};

export default Navbar;
