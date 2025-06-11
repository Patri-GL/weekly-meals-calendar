import { NavLink } from "react-router";
function Footer() {
  return (
    <footer>
      <ul className="footerList">
        <li>&copy; 2025</li>
        <NavLink to="/">
          <li>Planea. Cocina. Come. Repite.</li>
        </NavLink>
        <li>we &#128151; food</li>
      </ul>
    </footer>
  );
}

export default Footer;
