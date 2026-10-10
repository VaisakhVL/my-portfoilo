import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { ArrowRight, Menu, X } from "lucide-react";
import { BrandMonogram } from "./Icons";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="navbar">
      <Link to="/" className="brand" onClick={closeMenu}>
        <BrandMonogram width={34} height={34} />
        <span>Vaisakh V.L.</span>
      </Link>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      <nav className={menuOpen ? "nav-links open" : "nav-links"}>
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            end={item.path === "/"}
          >
            {item.name}
          </NavLink>
        ))}
      </nav>

      <Link className="nav-contact" to="/contact" onClick={closeMenu}>
        Get in Touch <ArrowRight size={15} />
      </Link>
    </header>
  );
}
