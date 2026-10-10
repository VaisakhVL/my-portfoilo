export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
  category: "Full Stack" | "Frontend" | "AI";
  featured?: boolean;
  demoUrl?: string;
  githubUrl?: string;
}

export const projectsData: Project[] = [
  {
    id: "smartfit-ai",
    title: "SMARTFIT AI",
    subtitle: "Virtual Try-On Experience",
    description:
      "An innovative AI-powered virtual try-on web application designed for previewing outfits before purchasing. Built with React, Node.js, Express, and computer vision models.",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=85",
    tags: ["React", "Node.js", "Express", "AI", "Tailwind CSS","TypeScript"],
    category: "AI",
    featured: true,
    githubUrl: "https://github.com/",
    demoUrl: "#",
  },
  {
    id: "urban-threads",
    title: "Urban Threads",
    subtitle: "E-Commerce Clothing & Apparel Store",
    description:
      "A modern full-stack e-commerce clothing store featuring curated apparel collections, dynamic size and color variant selection, shopping cart management, user authentication, and seamless checkout.",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=85",
    tags: ["React", "Tailwind CSS","TypeScript"],
    category: "Frontend",
    featured: true,
    githubUrl: "https://github.com/VaisakhVL/clothing-ecommerce--frontend-.git",
    demoUrl: "#",
  },
  {
    id: "techpulse-commerce",
    title: "TechPulse Commerce",
    subtitle: "Headless Electronics & Gadget Hub",
    description:
      "A high-performance headless electronics e-commerce platform with faceted search and filtering, real-time inventory counter, coupon discount engine, frictionless guest checkout, and secure webhook order processing.",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=85",
    tags: ["React", "Express.js", "MongoDB", "REST APIs", "Bootstrap","JavaScript"],
    category: "Full Stack",
    featured: false,
    githubUrl: "https://github.com/VaisakhVL/Ecommerce.git",
    demoUrl: "#",
  },
 
  {
    id: "carmarket",
    title: "CarMarket",
    subtitle: "Car Dealership Marketplace",
    description:
      "A sleek, responsive automotive marketplace featuring advanced vehicle filtering, price estimators, detailed car spec sheets, and responsive dealer inquiries.",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=800&q=85",
    tags: ["React", "CSS","TypeScript"],
    category: "Frontend",
    featured: false,
    githubUrl: "https://github.com/",
    demoUrl: "#",
  },
  {
    id: "meeting-room-booking",
    title: "Meeting Room Booking",
    subtitle: "Smart Office Workspace System",
    description:
      "A real-time workspace room scheduling platform with slot availability calendars, conflict detection, instant confirmation, and role-based access management.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=85",
    tags: ["React", "TypeScript", "CSS"],
    category: "Frontend",
    featured: false,
    githubUrl: "https://github.com/",
    demoUrl: "#",
  },
];

export const skillsCategories = [
  {
    title: "Frontend Development",
    description: "Building responsive, engaging, and dynamic user interfaces.",
    skills: [
      { name: "React", level: "Advanced", key: "react" },
      { name: "TypeScript", level: "Intermediate", key: "ts" },
      { name: "JavaScript (ES6+)", level: "Advanced", key: "js" },
      { name: "Tailwind CSS", level: "Advanced", key: "tailwind" },
      { name: "HTML5 / CSS3", level: "Advanced", key: "html" },
    ],
  },
  {
    title: "Backend Development",
    description: "Designing fast RESTful APIs and reliable server logic.",
    skills: [
      { name: "Node.js", level: "Intermediate", key: "node" },
      { name: "Express.js", level: "Intermediate", key: "express" },
      { name: "RESTful APIs", level: "Advanced", key: "api" },
      { name: "JWT Authentication", level: "Intermediate", key: "auth" },
    ],
  },
  {
    title: "E-Commerce & Integrations",
    description: "Building reliable payment pipelines, shopping flows, and digital stores.",
    skills: [
      { name: "Order & Inventory Flow", level: "Advanced", key: "orders" },
      { name: "Payment Webhooks", level: "Intermediate", key: "webhooks" },
    ],
  },
  {
    title: "Database & Tools",
    description: "Managing databases and using modern developer tooling.",
    skills: [
      { name: "MongoDB", level: "Intermediate", key: "mongodb" },
      { name: "Mongoose ODM", level: "Intermediate", key: "mongoose" },
      { name: "Git & GitHub", level: "Advanced", key: "git" },
      { name: "Postman", level: "Intermediate", key: "postman" },
      { name: "Vite", level: "Advanced", key: "vite" },
    ],
  },
];
