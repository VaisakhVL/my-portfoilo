import { useState } from "react";
import {
  Mail,
  MapPin,
  Send,
  Sparkles,
  CheckCircle2,
  MessageSquare,
  Phone,
} from "lucide-react";
import { Github, Linkedin, Instagram } from "../components/Icons";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "Full-Time Role",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <div className="page contact-page">
      {/* Header */}
      <section className="page-header">
        <div className="eyebrow">
          <Sparkles size={14} color="#a855f7" />
          START A CONVERSATION
        </div>
        <h1>
          Get In <span className="gradient-text">Touch</span>
        </h1>
        <p className="page-lead">
          Have an opportunity, project idea, or just want to connect? Feel free to reach out anytime!
        </p>
      </section>

      {/* Main Grid */}
      <section className="contact-grid">
        {/* Contact Info Column */}
        <div className="contact-info-col">
          <div className="contact-status-card">
            <span className="online-dot" />
            <div>
              <strong>Currently Available</strong>
              <p>Actively open for Fresher MERN Stack Developer roles, internships, and freelance projects.</p>
            </div>
          </div>

          <div className="contact-cards-stack">
            <div className="contact-detail-card">
              <div className="contact-detail-icon">
                <MapPin size={20} />
              </div>
              <div>
                <small>Location</small>
                <strong>Trivandrum, Kerala, India</strong>
              </div>
            </div>

            <div className="contact-detail-card">
              <div className="contact-detail-icon">
                <Mail size={20} />
              </div>
              <div>
                <small>Email (Click to open Gmail)</small>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=vaisakhvl18@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-primary-link"
                >
                  vaisakhvl18@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-detail-card">
              <div className="contact-detail-icon">
                <Phone size={20} />
              </div>
              <div>
                <small>Phone &amp; WhatsApp</small>
                <div className="phone-contact-group">
                  <a href="tel:+918089150403" className="contact-primary-link">
                    +91 8089150403
                  </a>
                  <a
                    href="https://wa.me/918089150403?text=Hi%20Vaisakh,%20I%20saw%20your%20portfolio!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsapp-badge"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-detail-card">
              <div className="contact-detail-icon">
                <MessageSquare size={20} />
              </div>
              <div>
                <small>Social Networks</small>
                <div className="contact-social-links">
                  <a
                    href="https://linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn"
                    aria-label="LinkedIn"
                  >
                    <Linkedin width={16} height={16} /> LinkedIn
                  </a>
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn"
                    aria-label="GitHub"
                  >
                    <Github width={16} height={16} /> GitHub
                  </a>
                  <a
                    href="https://instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn"
                    aria-label="Instagram"
                  >
                    <Instagram width={16} height={16} /> Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Column */}
        <div className="contact-form-col">
          {submitted ? (
            <div className="form-success-card">
              <CheckCircle2 size={48} color="#78ec8b" />
              <h3>Thank You, {formData.name}!</h3>
              <p>Your message has been received. I'll get back to you promptly at {formData.email}.</p>
              <button
                className="button primary-button"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: "", email: "", type: "Full-Time Role", message: "" });
                }}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Send Me a Message</h3>
              <p className="form-subtext">Fill in the details below and I'll respond as soon as possible.</p>

              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="e.g. Rahul Nair"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email Address</label>
                <input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="type">Inquiry Subject / Type</label>
                <select
                  id="type"
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                >
                  <option value="Full-Time Role">Full-Time Job Opportunity</option>
                  <option value="Internship">Internship Opportunity</option>
                  <option value="Freelance Project">Freelance / Contract Project</option>
                  <option value="General Collaboration">General Inquiry / Chat</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Write your message or project requirements here..."
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button type="submit" className="button primary-button submit-btn">
                <Send size={16} /> Send Message
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
