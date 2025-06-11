import { NavLink } from "react-router";

function Header() {
  return (
    <header>
      <NavLink to="/">
        <h1>Planea. Cocina. Come. Repite.</h1>
      </NavLink>

      <NavLink to="/recipes">Añade recetas</NavLink>
      <NavLink to="/contact">Contáctanos</NavLink>
    </header>
  );
}

export default Header;
