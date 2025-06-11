import "../styles/App.scss";
import mealsData from "../data/meals.json";
import { useState } from "react";

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

  // Function to get a random meal of a specific type
  const getRandomMeal = (type) => {
    const filteredMeals = meals.filter((meal) => meal.type === type);
    if (filteredMeals.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * filteredMeals.length);
    return filteredMeals[randomIndex];
  };

  // Generate a weekly plan
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
      <header>
        <h1>Calendario semanal de comidas</h1>
        <h2>Planea. Cocina. Come. Repeat.</h2>
      </header>
      <main className="mealContainer">
        <button onClick={regeneratePlan} className="btn">
          Genera un plan nuevo
        </button>

        <table className="table">
          <thead>
            <tr>
              <th>Día</th>
              {mealTypes.map((type) => (
                <th key={type}>
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {weeklyPlan.map((dayPlan, index) => (
              <tr key={index}>
                <td>
                  {dayPlan.day.charAt(0).toUpperCase() + dayPlan.day.slice(1)}
                </td>
                {mealTypes.map((type) => (
                  <td key={type}>
                    <div className="mealCard">
                      <h3>{dayPlan[type].name}</h3>
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default App;
