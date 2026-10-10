import { Link } from "react-router-dom";
import {
  GraduationCap,
  MapPin,
  BriefcaseBusiness,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Download,
  Mail,
} from "lucide-react";
import profileImg from "../assets/profile.jpg";
import { MongoDbLogo, ReactLogo, NodeJsLogo } from "../components/Icons";

export default function About() {
  const highlights = [
    "Specialized in full-stack MERN (MongoDB, Express, React, Node.js) development",
    "Practical expertise implementing e-commerce platforms, carts, and payment gateways",
    "Strong foundation in modern JavaScript (ES6+), TypeScript, and component-based UI",
    "Hands-on experience building RESTful APIs and integrating databases",
    "Passionate about clean code, intuitive UX, and responsive layouts",
    "Proactive problem solver enthusiastic about continuous learning and new technologies",
  ];

  return (
    <div className="page about-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="eyebrow">
          <Sparkles size={14} color="#a855f7" />
          GET TO KNOW ME
        </div>
        <h1>
          About <span className="gradient-text">Vaisakh V.L.</span>
        </h1>
        <p className="page-lead">
          A dedicated MERN stack developer blending creative problem solving with structured software development.
        </p>
      </section>

      {/* Main Bio Section */}
      <section className="about-grid">
        <div className="about-visual">
          <div className="about-portrait-card">
            <img src={profileImg} alt="Vaisakh V.L." />
            <div className="about-badge">
              <span className="online-dot" />
              Open to Opportunities
            </div>
          </div>

          <div className="about-quick-specs">
            <div className="spec-card">
              <MapPin className="spec-icon" />
              <div>
                <small>Location</small>
                <strong>Trivandrum, Kerala</strong>
              </div>
            </div>

            <div className="spec-card">
              <GraduationCap className="spec-icon" />
              <div>
                <small>Education</small>
                <strong>BCom (Bachelor of Commerce)</strong>
              </div>
            </div>

            <div className="spec-card">
              <BriefcaseBusiness className="spec-icon" />
              <div>
                <small>Specialization</small>
                <strong>MERN Stack Development</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="about-content">
          <h2>My Journey</h2>
          <p>
            Hello! I'm <strong>Vaisakh V.L.</strong>, a fresher web developer based in Trivandrum, Kerala.
            While pursuing my degree in Commerce (BCom), I discovered an intense passion for coding and building
            functional digital products.
          </p>
          <p>
            I decided to turn my curiosity into craft by immersing myself in modern web technologies, specifically
            mastering the <strong>MERN stack</strong> (MongoDB, Express.js, React, Node.js). Through hands-on
            projects and intense practical training, I've developed the ability to translate conceptual designs into
            responsive, high-performing web applications.
          </p>

          <div className="key-highlights">
            <h3>What I Bring to the Table</h3>
            <ul>
              {highlights.map((item, idx) => (
                <li key={idx}>
                  <CheckCircle2 size={16} className="check-icon" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="about-actions">
            <Link to="/contact" className="button primary-button">
              <Mail size={16} /> Get in Touch
            </Link>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=vaisakhvl18@gmail.com&su=Resume%20Request%20-%20Vaisakh%20V.L."
              target="_blank"
              rel="noopener noreferrer"
              className="button secondary-button"
            >
              <Download size={16} /> Request Resume
            </a>
          </div>
        </div>
      </section>

      {/* Pillars / Skills preview */}
      <section className="about-pillars">
        <div className="pillar-card">
          <div className="pillar-header">
            <ReactLogo width={28} height={28} />
            <h3>Frontend Craft</h3>
          </div>
          <p>
            Designing pixel-perfect, accessible, and reactive user interfaces with React, modern CSS, and state management.
          </p>
        </div>

        <div className="pillar-card">
          <div className="pillar-header">
            <NodeJsLogo width={28} height={28} />
            <h3>Backend Architecture</h3>
          </div>
          <p>
            Creating scalable APIs with Node.js and Express.js, implementing secure authentication, and handling business logic.
          </p>
        </div>

        <div className="pillar-card">
          <div className="pillar-header">
            <MongoDbLogo width={28} height={28} />
            <h3>Data Management</h3>
          </div>
          <p>
            Structuring schemas and data pipelines using MongoDB and Mongoose with attention to data consistency and retrieval speed.
          </p>
        </div>
      </section>

      {/* Next page navigation banner */}
      <section className="page-nav-banner">
        <div>
          <span>EXPLORE MY WORK</span>
          <h3>Check out my latest web projects</h3>
        </div>
        <Link to="/projects" className="button primary-button">
          View Projects <ArrowRight size={16} />
        </Link>
      </section>
    </div>
  );
}
