import { motion } from "framer-motion";
import { Mail, ArrowUpRight,Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">Let's Work Together</h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-md mx-auto">
            Currently looking for my next opportunity. If you're hiring and think I'd be a great fit, I'd love to connect.
          </p>
          <a
            href="https://www.linkedin.com/in/thomas-laeremans/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-base hover:opacity-90 transition-opacity duration-200 group"
          >
            <Linkedin className="w-5 h-5" />
            Message me on LinkedIn
            <ArrowUpRight className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
