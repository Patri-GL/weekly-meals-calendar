import "../styles/App.scss";
import { useState } from "react";

import mealsData from "../data/meals.json";

import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import Hero from "./Layout/Hero";

function App() {
  const [meals] = useState(mealsData.results);
  const days = [
    "lunes",
    "martes",
    "miércoles",
    "jueves",
    "viernes",
    "sábado",
    "domingo",
  ];
  const mealTypes = ["desayuno", "snack", "almuerzo", "merienda", "cena"];

  const getRandomMeal = (type) => {
    const filteredMeals = meals.filter((meal) => meal.type === type);
    if (filteredMeals.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * filteredMeals.length);
    return filteredMeals[randomIndex];
  };

  const generateWeeklyPlan = () => {
    return days.map((day) => {
      const dayPlan = {};
      mealTypes.forEach((type) => {
        dayPlan[type] = getRandomMeal(type);
      });
      return { day, ...dayPlan };
    });
  };

  const [weeklyPlan, setWeeklyPlan] = useState(generateWeeklyPlan());

  const regeneratePlan = () => {
    setWeeklyPlan(generateWeeklyPlan());
  };

  return (
    <div>
      <Header />
      <main className="mainContainer">
        <Hero />
        <button onClick={regeneratePlan} className="btn">
          Generar un plan nuevo
        </button>

        <table className="table">
          <thead>
            <tr>
              <th>
                <h3>Día</h3>
              </th>
              {mealTypes.map((type) => (
                <th key={type}>
                  <h4> {type.charAt(0).toUpperCase() + type.slice(1)}</h4>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {weeklyPlan.map((dayPlan, index) => (
              <tr key={index}>
                <td>
                  <h4>
                    {dayPlan.day.charAt(0).toUpperCase() + dayPlan.day.slice(1)}
                  </h4>
                </td>
                {mealTypes.map((type) => (
                  <td key={type}>
                    <div className="mealCard">
                      <p>{dayPlan[type].name}</p>
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <form action="">
          <h3>Añadir una nueva comida</h3>
          <p>
            Porque compartir es vivir, si te gustaría añadir una receta al
            listado, por favor, rellena el siguiente formulario
          </p>
          <label htmlFor="name">Título de la nueva comida:</label>
          <input
            type="text"
            id="name"
            name="name"
            // onInput={}
          />
          <label htmlFor="recipe">Añade la receta de tu comida:</label>
          <textarea name="recipe" id="recipe"></textarea>
          <label htmlFor="speciality">Elige para qué momento del día es:</label>
          <select
            // onChange={}
            name="house"
            id="type"
          >
            <option value="">Selecciona una opción:</option>
            <option value="desayuno">Desayuno</option>
            <option value="snack">Snack</option>
            <option value="almuerzo">Almuerzo</option>
            <option value="merienda">Merienda</option>
            <option value="cena">Cena</option>
          </select>
          <button type="submit" value="enviar" className="btn">
            Enviar
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
}

export default App;
