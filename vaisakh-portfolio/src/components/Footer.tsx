import { Link } from "react-router-dom";
import { Github, Linkedin, Instagram } from "./Icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-brand">
          <h4>Vaisakh V.L.</h4>
          <p>Fresher MERN Stack Developer crafting responsive, modern web applications.</p>
          <div className="footer-socials">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github width={16} height={16} />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin width={16} height={16} />
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram width={16} height={16} />
            </a>
          </div>
        </div>

        <div className="footer-links-group">
          <h5>Navigation</h5>
          <Link to="/">Home</Link>
          <Link to="/about">About Me</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-links-group">
          <h5>Core Stack</h5>
          <span>MongoDB</span>
          <span>Express.js</span>
          <span>React.js</span>
          <span>Node.js</span>
          <span>TypeScript</span>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {currentYear} Vaisakh V.L. All rights reserved.</span>
        <span>Built with React &amp; TypeScript <b>✦</b></span>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="back-to-top-btn"
        >
          Back to top ↑
        </button>
      </div>
    </footer>
  );
}
