export type Contributor = {
  name: string;
  role?: string;
  github?: string;
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  longDescription?: string[];
  tags: string[];
  featured: boolean;
  url?: string;
  github?: string;
  image?: string;
  showImageInCard?: boolean;
  features?: string[];
  contributors?: Contributor[];
};

export const projects: Project[] = [
 {
  slug: "scrum-project-webshop",
  title: "Scrum Project Webshop",
  showImageInCard: false,
  image: `${import.meta.env.BASE_URL}images/scrum.png`,
  description: "A webshop built in vanilla PHP using an MVC architecture during a Scrum group project.",
  longDescription: [
    "This project was developed as part of my Full Stack Developer training, where we worked in a team following the Scrum methodology.",
    "Our assignment was to build a complete webshop for a fictional client. We implemented the project in vanilla PHP, using a custom-built MVC structure and object-oriented programming principles.",
    "The project includes product management, user authentication, shopping cart functionality, and a structured codebase designed to be scalable and maintainable."
  ],
  tags: ["PHP", "MVC", "OOP", "Scrum", "Tailwind CSS"],
  github: "https://github.com/thomaslaeremans/Scrum",
  featured: false,
  features: [
    "Fully custom MVC architecture in vanilla PHP",
    "Object-oriented code with clear separation of concerns",
    "Product catalog with detailed product pages",
    "Shopping cart functionality with session handling",
    "User registration and login system",
    "Team-based development following Scrum (sprints, stand-ups, retrospectives)"
  ],
  contributors: [
    { name: "Thomas Laeremans", role: "Full Stack Developer", github: "thomaslaeremans" },
    { name: "Pieter Van Elst", role: "Full Stack Developer", github: "" },
    { name: "Anass Zatou", role: "Full Stack Developer", github: "" },
    { name: "Fatima Bartels", role: "Full Stack Developer", github: "" },
    { name: "Fatima Kilicaslan", role: "Full Stack Developer", github: "" },
    { name: "Tom Kwanten", role: "Full Stack Developer", github: "" },
  ]
},
{
  slug: "dartszone",
  title: "DartsZone",
  description:
    "Online platform to organize darts tournaments and play quick games with real-time score tracking.",
  longDescription: [
    "DartsZone is a full-stack web application built for darts enthusiasts who want to bring their games online. Players can create and manage tournaments with full bracket management, making it easy to organize competitive events from start to finish.",
    "During matches, scores are tracked in real-time so all players can follow the action live without any manual updates. Beyond live games, DartsZone keeps a record of player statistics and match history, giving players insight into their performance over time.",
    "The interface is fully responsive and designed with mobile use in mind, so scores can be entered and tracked on the spot during a game. Under the hood, the backend is powered by Laravel with a PostgreSQL database handling all game state and player data, while the frontend is built with React and TypeScript using shadcn/ui components and Tailwind CSS for a clean and consistent UI.",
  ],
  tags: ["React", "TypeScript", "Laravel", "Shadcn", "Tailwind CSS"],
  featured: false,
  showImageInCard:false,
  github: "https://github.com/thomaslaeremans/dartszone",
  image: `${import.meta.env.BASE_URL}images/DartsZone_mockup.png`,
  features: [
    "Tournament creation and bracket management",
    "Real-time score tracking during games",
    "Player statistics and match history",
    "Responsive design for mobile scorekeeping",
  ],
},
  {
    slug: "ravago-digital",
    title: "Ravago Digital",
    description: "Development of a UI design system for a B2B platform in the polymers, rubber and chemicals sector.",
    longDescription: [
      "Ravago Digital is a B2B platform focused on the polymers, rubber and chemicals sector. Within this project, I was responsible for setting up a scalable UI design system that allows companies to adopt the platform within their own branding.",
      "A key part of the project involved researching and implementing design tokens — variables for colours, typography and spacing that allow companies to apply their own brand identity without breaking the system.",
      "The design system was fully developed in Figma, with a focus on consistency, reusability and ease of adoption across companies with varying branding requirements.",
    ],
    tags: ["Figma", "Wireframing", "Design System", "Design Tokens"],
    featured: true,
    image: `${import.meta.env.BASE_URL}images/Ravago_digital.png`,
    showImageInCard: true,
    features: [
      "Setting up a scalable UI design system in Figma",
      "Research and implementation of UI design tokens",
      "Multi-branding support for B2B clients",
      "Wireframing and component library for the platform",
    ],
  },
  {
    slug: "portfolio",
    title: "Portfolio website",
    description: "The portfolio website you're currently viewing — designed and built from scratch.",
    longDescription: [
      "This portfolio was designed and built entirely from scratch as a way to showcase my work and skills in a personal, polished way. The goal was to keep it fast, clean, and visually interesting without overengineering it.",
      "The UI is built with React and TypeScript, styled with Tailwind CSS, and uses shadcn/ui as a component base. Animations are handled by Framer Motion — scroll-triggered entrance animations give the page a sense of depth as you move through the sections.",
      "One of the more fun parts of the project is the animated star field in the background, rendered on an HTML canvas. It reacts to the current theme and creates a subtle parallax-like atmosphere without distracting from the content.",
      "The site supports dark and light mode, synced to the user's system preference on first load and toggleable via the navbar. Project detail pages (like this one) were added later to give each project more room to breathe.",
    ],
    tags: ["React", "TypeScript", "Tailwind CSS", "Shadcn"],
    featured: false,
    features: [
      "Animated canvas star field background",
      "Dark / light mode toggle synced to system preference",
      "Scroll-triggered entrance animations with Framer Motion",
      "Project detail pages with extended descriptions",
      "Fully responsive layout",
    ],
  },
  {
    slug: "fednot-manage-my-business",
    title: "Fednot – Manage My Business",
    description: "Full UI design process for Manage My Business, a B2B platform by Fednot aimed at notaries and entrepreneurs — from initial wireframes to polished high-fidelity designs.",
    longDescription: [
      "Manage My Business is a digital B2B platform developed by Fednot, the Federation of Notaries, to support notaries and entrepreneurs in managing their business activities.",
      "For this project, I was responsible for the complete UI design process. It started with wireframing to map out the structure and user flows, which were then progressively refined into full high-fidelity designs in Figma.",
      "Throughout the process, the focus was on clarity and consistency — an interface that feels professional and trustworthy for the target audience of notaries and entrepreneurs, without unnecessary complexity.",
    ],
    tags: ["Figma", "UI Design", "Wireframing"],
    featured: true,
    image: `${import.meta.env.BASE_URL}images/fednot.png`,
    showImageInCard: true,
    features: [
      "Wireframing and user flow mapping",
      "High-fidelity UI design in Figma",
      "Consistent and professional visual style",
      "Tailored for notaries and entrepreneurs as the target audience",
    ],
    url:"https://manage-my-business.be/?lang=nl"
  },
  /* {
    slug: "balls-and-glory",
    title: "Balls & Glory Website",
    description: "Full website design for Balls & Glory — from wireframes to high-fidelity UI designs, carried out at designskills.",
    longDescription: [
      "Balls & Glory is a well-known restaurant based in Belgium. For this project, I was responsible for the complete UI design of their website, carried out during my time at designskills, my first employer.",
      "The design process started with wireframes to establish the structure and page layout, which were then progressively developed into full high-fidelity designs in Figma.",
      "The challenge lay in translating the energetic and distinctive brand personality of Balls & Glory into a digital experience that is both visually engaging and easy to use.",
    ],
    tags: ["Figma", "UI Design", "Wireframing"],
    featured: false,
    image: `${import.meta.env.BASE_URL}images/Balls&Glory.png`,
    showImageInCard: false,
    features: [
      "Wireframing and page structure definition",
      "High-fidelity UI design in Figma",
      "Visual translation of the brand personality into a digital experience",
    ],
    url:"https://ballsnglory.be/"
  }, */
  {
    slug: "bewire-design-system",
    title: "Bewire – Design System & Apps",
    description: "Exploring the use of a shared design system with design tokens to create consistent designs across Bewire's sub-companies, and designing an internal pronostics app for employees.",
    longDescription: [
      "At Bewire Group, I investigated how a design system could be introduced to bring consistency across the different sub-companies within the group. A key part of this research was exploring the use of design tokens to allow each sub-company to maintain their own branding while sharing the same underlying component structure.",
      "In parallel, I designed a pronostics app intended for internal use by Bewire employees. The app allowed employees to place predictions and compete with colleagues in a fun and engaging way.",
      "Both projects were fully designed in Figma, with a strong focus on reusability, scalability and a clear visual language that could be adopted across teams.",
    ],
    tags: ["Figma", "Design System", "Design Tokens", "UI Design"],
    featured: true,
    image: `${import.meta.env.BASE_URL}images/Bewire.png`,
    showImageInCard: true,
    features: [
      "Research into adopting a shared design system across sub-companies",
      "Design tokens for multi-brand theming",
      "UI design of an internal pronostics app for employees",
      "Scalable and reusable component structure in Figma",
    ],
  },
  {
    slug: "lisa-moments-website",
    title: "Lisa Moments Portfolio Website",
    description:
      "A modern portfolio website for a hobby photographer, built with React and Contentful for easy content management.",
    longDescription: [
      "Lisa Moments is a visual portfolio website designed for a hobby photographer who wants to present her work in a professional and user-friendly way. The website focuses on photography, simplicity, and a clean, modern aesthetic.",
      "All content — including photo series, projects, text, and categories — is managed through Contentful. This allows the photographer to easily add new shoots, update descriptions, or adjust existing content without any technical knowledge.",
      "The frontend is built with React and Tailwind CSS, ensuring a fast, responsive, and visually consistent experience. Thanks to the integration with Contentful, all pages are dynamically generated, keeping the workflow flexible and scalable.",
      "The website is designed mobile-first, ensuring that visitors enjoy an optimal viewing experience on any device and that the photos truly stand out.",
    ],
    showImageInCard:false,
    tags: ["React", "Contentful", "Tailwind CSS", "Headless CMS"],
    featured: false,
    url: "https://bright-tiramisu-6b4ef9.netlify.app/",
    github: "https://github.com/thomaslaeremans/Lisa-moments",
    image: `${import.meta.env.BASE_URL}images/lisa_moments.png`,
    features: [
      "Content management via Contentful (photos, text, categories)",
      "Fully responsive portfolio layout",
      "Modern UI with a photography-focused design",
      "Dynamic pages powered by CMS content",
    ],
  },
];