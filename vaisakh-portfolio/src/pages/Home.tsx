import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Mail,
  MapPin,
  GraduationCap,
  BriefcaseBusiness,
} from "lucide-react";
import {
  Github,
  Linkedin,
  Instagram,
  MongoDbLogo,
  ExpressLogo,
  ReactLogo,
  NodeJsLogo,
  TypeScriptLogo,
  JavaScriptLogo,
  TailwindLogo,
  GitLogo,
} from "../components/Icons";
import profileImg from "../assets/profile.jpg";
import { projectsData } from "../data/portfolioData";

export default function Home() {
  const featuredProjects = projectsData.slice(0, 3);

  const previewSkills = [
    { name: "React", icon: <ReactLogo width={16} height={16} /> },
    { name: "TypeScript", icon: <TypeScriptLogo width={16} height={16} /> },
    { name: "JavaScript", icon: <JavaScriptLogo width={16} height={16} /> },
    { name: "Node.js", icon: <NodeJsLogo width={16} height={16} /> },
    { name: "Express.js", icon: <ExpressLogo width={16} height={16} /> },
    { name: "MongoDB", icon: <MongoDbLogo width={16} height={16} /> },
    { name: "Tailwind CSS", icon: <TailwindLogo width={16} height={16} /> },
    { name: "Git", icon: <GitLogo width={16} height={16} /> },
  ];

  return (
    <div className="page home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="social-bar">
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin width={17} height={17} />
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github width={17} height={17} />
          </a>
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Instagram width={17} height={17} />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=vaisakhvl18@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
          >
            <Mail size={17} />
          </a>
        </div>

        <div className="hero-content">
          <div className="eyebrow">
            <span className="online-dot" />
            MERN STACK DEVELOPER
          </div>

          <h1>
            Hi, I'm
            <br />
            <span className="gradient-text">Vaisakh V.L.</span>
          </h1>

          <h2>
            Crafting modern web experiences
            <br className="desktop-only" /> with code &amp; creativity.
          </h2>

          <p className="hero-description">
            I'm a fresher MERN stack developer focused on building
            responsive, user-friendly web applications and full-featured e-commerce platforms. I enjoy
            turning ideas into useful products and learning new
            technologies.
          </p>

          <div className="quick-info">
            <div>
              <MapPin />
              <span>
                Trivandrum
                <small>Kerala, India</small>
              </span>
            </div>

            <div>
              <GraduationCap />
              <span>
                BCom
                <small>Currently studying</small>
              </span>
            </div>

            <div>
              <BriefcaseBusiness />
              <span>
                MERN Stack
                <small>Projects & internship</small>
              </span>
            </div>
          </div>

          <div className="hero-buttons">
            <Link to="/projects" className="button primary-button">
              View Projects <ArrowRight size={17} />
            </Link>

            <Link to="/contact" className="button secondary-button">
              <Mail size={17} /> Contact Me
            </Link>
          </div>
        </div>

        <div className="hero-visual">
          <div className="glow-orbit orbit-one" />
          <div className="glow-orbit orbit-two" />

          <div className="portrait-card">
            <img src={profileImg} alt="Vaisakh V.L." />
            <div className="portrait-overlay">
              <span>BUILD. LEARN. REPEAT.</span>
              <h3>Vaisakh V.L.</h3>
            </div>
          </div>

          <div className="tech-card">
            <Code2 className="tech-code-icon" />
            <div>
              <strong>MERN Stack</strong>
              <p>Full-stack development</p>
            </div>
            <div className="tech-labels">
              <span>
                <MongoDbLogo width={13} height={13} /> MongoDB
              </span>
              <span>
                <ExpressLogo width={13} height={13} /> Express
              </span>
              <span>
                <ReactLogo width={13} height={13} /> React
              </span>
              <span>
                <NodeJsLogo width={13} height={13} /> Node.js
              </span>
            </div>
          </div>

          <div className="quote-card">
            <span>“</span>
            <p>
              Better code.
              <br />
              Brighter future.
            </p>
            <div />
          </div>

          <div className="code-card">
            <div className="window-dots">
              <span />
              <span />
              <span />
            </div>
            <code>
              <span>const</span> app = express();
              <br />
              app.use(express.json());
              <br />
              <br />
              <b>// Build something great</b>
            </code>
          </div>
        </div>
      </section>

      {/* Featured Projects Showcase */}
      <section className="showcase">
        <div className="projects-section">
          <div className="section-heading">
            <h2>
              <span /> Featured Projects
            </h2>
            <Link to="/projects" className="view-all-link">
              View all projects <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="project-grid">
            {featuredProjects.map((project, index) => (
              <article className="project-card" key={project.id}>
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  {index === 0 && <span className="featured-badge">Featured</span>}
                  <Link to="/projects" className="image-arrow" aria-label={`View ${project.title}`}>
                    <ArrowUpRight size={18} />
                  </Link>
                </div>

                <div className="project-body">
                  <h3>{project.title}</h3>
                  <span className="project-subtitle">{project.subtitle}</span>
                  <p>{project.description}</p>

                  <div className="tag-list">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Skills Quick Column */}
        <aside className="skills-section">
          <div className="section-heading">
            <h2>
              <span /> Core Skills
            </h2>
            <Link to="/skills" className="view-all-link">
              All skills <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="skills-grid">
            {previewSkills.map((skill) => (
              <div className="skill-item" key={skill.name}>
                <span className="skill-icon">{skill.icon}</span>
                {skill.name}
              </div>
            ))}
          </div>

          <Link to="/contact" className="collaboration-card">
            <div>
              <span>HAVE A PROJECT IN MIND?</span>
              <h3>
                Let's build something
                <br />
                great together!
              </h3>
            </div>
            <span className="round-arrow">
              <ArrowRight size={18} />
            </span>
          </Link>
        </aside>
      </section>
    </div>
  );
}
