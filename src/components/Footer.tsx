const Footer = () => {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} · Thomas Laeremans.
        </p>
        <div className="flex items-center gap-6">
          <a href="https://github.com/thomaslaeremans" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">GitHub</a>
          <a href="https://linkedin.com/in/thomas-laeremans" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
