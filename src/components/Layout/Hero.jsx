import heroPhoto from "../../images/heroPhoto.jpg";
import { Link } from "react-router";

function Hero() {
  return (
    <section className="heroSection">
      <Link to="/calendar">
        <img
          className="heroImage"
          src={heroPhoto}
          alt="Image intro to the site"
        />
      </Link>
      <section className="heroText">
        <h2>Calendario semanal de comidas</h2>
        <h3> ¡Bienvenida a tu Planificador Semanal de Comidas! </h3>
        <p>
          Esta aplicación te ayuda a organizar tus comidas de forma fácil y
          rápida. <br /> Con solo un clic, genera un menú semanal equilibrado
          con desayunos, almuerzos, meriendas y cenas, <br />
          basado en recetas saludables y variadas.
        </p>
        <h4>¿Cómo funciona? </h4>
        <ol>
          <li>
            Planificación automática: El sistema selecciona aleatoriamente
            platos para cada día.
          </li>
          <li>
            Personalizable: Puedes regenerar el plan cuantas veces quieras hasta
            que encuentres el que más te guste.
          </li>
          <li>
            Recetas incluidas: Cada comida muestra sus ingredientes para que
            sepas qué necesitas.
          </li>
        </ol>
        <p>
          ¡Empieza a planificar y ahorrar! Disfruta de una alimentación más
          organizada y saludable! 🍎🍽️
        </p>{" "}
        <h3>Haz clic en la imagen y descubre tu menú semanal.</h3>
      </section>
    </section>
  );
}

export default Hero;
