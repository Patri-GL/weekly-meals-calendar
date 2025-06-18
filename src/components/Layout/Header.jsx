import { Link, NavLink } from "react-router";
import { useState } from "react";
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header>
      <NavLink to="/">
        <h1>Planea. Cocina. Come. Repite.</h1>
      </NavLink>
      <button
        className="hamburger"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Menu"
      >
        <span className={`hamburger-line ${isMenuOpen ? "open" : ""}`}></span>
        <span className={`hamburger-line ${isMenuOpen ? "open" : ""}`}></span>
      </button>
      <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <Link to="/recipes">Añade recetas</Link>
        <Link to="/contact">Contáctanos</Link>
      </nav>
    </header>
  );
}

export default Header;
