import { Link } from "react-router-dom";
import { Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import {
  MongoDbLogo,
  ExpressLogo,
  ReactLogo,
  NodeJsLogo,
  TypeScriptLogo,
  JavaScriptLogo,
  TailwindLogo,
  GitLogo,
} from "../components/Icons";

export default function Skills() {
  const mernStack = [
    {
      name: "MongoDB",
      role: "NoSQL Database",
      desc: "Flexible JSON-like documents, schema modeling with Mongoose, and aggregations.",
      icon: <MongoDbLogo width={26} height={26} />,
      color: "#47A248",
    },
    {
      name: "Express.js",
      role: "Backend Framework",
      desc: "Fast minimalist Node.js web framework for routing, middleware, and REST APIs.",
      icon: <ExpressLogo width={26} height={26} />,
      color: "#FFFFFF",
    },
    {
      name: "React.js",
      role: "Frontend Library",
      desc: "Component architecture, hooks, state management, and reactive interactive UIs.",
      icon: <ReactLogo width={26} height={26} />,
      color: "#61DAFB",
    },
    {
      name: "Node.js",
      role: "JavaScript Runtime",
      desc: "Asynchronous event-driven server runtime for building scalable network tools.",
      icon: <NodeJsLogo width={26} height={26} />,
      color: "#5FA04E",
    },
  ];

  const skillGroups = [
    {
      title: "Frontend Engineering",
      skills: [
        { name: "React.js", icon: <ReactLogo width={18} height={18} />, level: "Advanced" },
        { name: "TypeScript", icon: <TypeScriptLogo width={18} height={18} />, level: "Intermediate" },
        { name: "JavaScript (ES6+)", icon: <JavaScriptLogo width={18} height={18} />, level: "Advanced" },
        { name: "Tailwind CSS", icon: <TailwindLogo width={18} height={18} />, level: "Advanced" },
      ],
    },
    {
      title: "Backend & APIs",
      skills: [
        { name: "Node.js", icon: <NodeJsLogo width={18} height={18} />, level: "Intermediate" },
        { name: "Express.js", icon: <ExpressLogo width={18} height={18} />, level: "Intermediate" },
        { name: "RESTful APIs", level: "Advanced" },
        { name: "JWT Auth", level: "Intermediate" },
      ],
    },
    {
      title: "Databases & Tools",
      skills: [
        { name: "MongoDB", icon: <MongoDbLogo width={18} height={18} />, level: "Intermediate" },
        { name: "Git & GitHub", icon: <GitLogo width={18} height={18} />, level: "Advanced" },
        { name: "Vite", level: "Advanced" },
        { name: "Postman", level: "Intermediate" },
      ],
    },
    {
      title: "E-Commerce & Architecture",
      skills: [
        { name: "Cart State (Redux)", level: "Advanced" },
        { name: "Order & Inventory Logic", level: "Advanced" },
      ],
    },
  ];

  const methodologies = [
    "Clean & Modular Component Design",
    "Responsive, Mobile-First UI Development",
    "RESTful API Integration & Error Handling",
    "E-Commerce Checkout & Payment Security",
    "Version Control with Git & Branching Workflow",
    "Modern State Management & React Hooks",
    "Continuous Learning & Quick Adoption of New Tech",
  ];

  return (
    <div className="page skills-page">
      {/* Header */}
      <section className="page-header">
        <div className="eyebrow">
          <Sparkles size={14} color="#a855f7" />
          TECHNICAL TOOLKIT
        </div>
        <h1>
          Skills &amp; <span className="gradient-text">Technologies</span>
        </h1>
        <p className="page-lead">
          The languages, libraries, and frameworks I use to build robust full-stack web applications.
        </p>
      </section>

      {/* MERN Spotlight */}
      <section className="mern-spotlight">
        <div className="spotlight-header">
          <span className="online-dot" />
          <h2>The MERN Stack Core</h2>
        </div>
        <p className="spotlight-subtitle">
          My primary development stack for building performant end-to-end web applications.
        </p>

        <div className="mern-cards-grid">
          {mernStack.map((item) => (
            <div className="mern-card" key={item.name}>
              <div className="mern-card-top">
                <span className="mern-card-icon">{item.icon}</span>
                <div>
                  <h3>{item.name}</h3>
                  <small style={{ color: item.color }}>{item.role}</small>
                </div>
              </div>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* All Skills Categorized */}
      <section className="skills-categorized-grid">
        {skillGroups.map((group) => (
          <div className="skill-group-card" key={group.title}>
            <h3>{group.title}</h3>
            <div className="skill-group-items">
              {group.skills.map((skill) => (
                <div className="skill-badge" key={skill.name}>
                  {skill.icon && <span className="badge-icon">{skill.icon}</span>}
                  <span className="badge-name">{skill.name}</span>
                  <span className="badge-level">{skill.level}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Development Practices */}
      <section className="methodologies-section">
        <h3>Development Practices &amp; Work Ethics</h3>
        <div className="methodologies-grid">
          {methodologies.map((practice, index) => (
            <div className="methodology-item" key={index}>
              <CheckCircle2 size={16} className="check-icon" />
              <span>{practice}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="page-nav-banner">
        <div>
          <span>LOOKING FOR A DEVELOPER?</span>
          <h3>Let's collaborate on your next project</h3>
        </div>
        <Link to="/contact" className="button primary-button">
          Get in Touch <ArrowRight size={16} />
        </Link>
      </section>
    </div>
  );
}
