import { NavLink } from "react-router";
import RecipesForm from "../pages/RecipesForm";
import Contact from "../pages/Contact";
function Header() {
  return (
    <header>
      <h1>Planea. Cocina. Come. Repite.</h1>

      <NavLink path="/recipes" element={<RecipesForm />}>
        Añade recetas
      </NavLink>
      <NavLink path="/contact" element={<Contact />}>
        Contáctanos
      </NavLink>
    </header>
  );
}

export default Header;
