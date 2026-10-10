import { useState } from "react";
import { Link } from "react-router-dom";
import { Sparkles, ArrowRight, ExternalLink } from "lucide-react";
import { Github } from "../components/Icons";
import { projectsData, Project } from "../data/portfolioData";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Full Stack", "Frontend", "AI"];

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <div className="page projects-page">
      {/* Header */}
      <section className="page-header">
        <div className="eyebrow">
          <Sparkles size={14} color="#a855f7" />
          FEATURED PORTFOLIO
        </div>
        <h1>
          My <span className="gradient-text">Projects</span>
        </h1>
        <p className="page-lead">
          A showcase of full-stack MERN e-commerce platforms, web applications, and interactive digital solutions.
        </p>

        {/* Filter categories */}
        <div className="filter-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="projects-full-grid">
        {filteredProjects.map((project: Project) => (
          <article className="project-detail-card" key={project.id}>
            <div className="project-detail-image">
              <img src={project.image} alt={project.title} />
              <div className="project-badges">
                {project.featured && <span className="featured-pill">Featured</span>}
                <span className="category-pill">{project.category}</span>
              </div>
            </div>

            <div className="project-detail-body">
              <h3>{project.title}</h3>
              <span className="project-detail-subtitle">{project.subtitle}</span>
              <p>{project.description}</p>

              <div className="tag-list">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <div className="project-actions">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-action-btn github-btn"
                >
                  <Github width={15} height={15} /> Code
                </a>
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-action-btn demo-btn"
                >
                  Live Demo <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* Bottom CTA */}
      <section className="page-nav-banner">
        <div>
          <span>WANT TO KNOW MY TECH STACK?</span>
          <h3>Explore the languages, frameworks &amp; tools I use</h3>
        </div>
        <Link to="/skills" className="button primary-button">
          View Skills <ArrowRight size={16} />
        </Link>
      </section>
    </div>
  );
}
