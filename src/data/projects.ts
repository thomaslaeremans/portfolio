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
  image: "/images/scrum.png",
  description: "A webshop built in vanilla PHP using an MVC architecture during a Scrum group project.",
  longDescription: [
    "This project was developed as part of my Full Stack Developer training, where we worked in a team following the Scrum methodology.",
    "Our assignment was to build a complete webshop for a fictional client. We implemented the project in vanilla PHP, using a custom-built MVC structure and object-oriented programming principles.",
    "The project includes product management, user authentication, shopping cart functionality, and a structured codebase designed to be scalable and maintainable."
  ],
  tags: ["PHP", "MVC", "OOP", "Scrum", "Tailwind CSS"],
  github: "https://github.com/thomaslaeremans/Scrum",
  featured: true,
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
  featured: true,
  url: "https://dartszone-frontend.up.railway.app",
  github: "https://github.com/thomaslaeremans/dartszone",
  image: "/images/DartsZone_mockup.png",
  features: [
    "Tournament creation and bracket management",
    "Real-time score tracking during games",
    "Player statistics and match history",
    "Responsive design for mobile scorekeeping",
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
    slug: "yahtzee-game",
    title: "Yahtzee Game",
    image: "/images/Yathzee.png",
    showImageInCard: false,
    description: "A modern take on the classic dice game created with JavaScript.",
    longDescription: [
      "Yahtzee Game is a web-based implementation of the classic dice game, featuring a classic UI and smooth gameplay.",
    ],
    tags: ["JavaScript", "HTML5", "CSS3"],
    featured: false,
    github:"https://github.com/thomaslaeremans/Yahtzee",
    features: [
  "Volledige implementatie van de klassieke Yahtzee-regels",
  "Interactieve dobbelstenen met animaties",
  "Automatische scoreberekening per categorie",
  "Mogelijkheid om dobbelstenen vast te zetten",
],
  },
];
