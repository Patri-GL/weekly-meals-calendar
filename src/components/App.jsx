import "../styles/App.scss";
import { useState } from "react";
import { Route, Routes } from "react-router";

import mealsData from "../data/meals.json";

import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import Hero from "./Layout/Hero";
import RecipesForm from "./pages/RecipesForm";
import Calendar from "./pages/Calendar";
import Contact from "./pages/Contact";

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
  const mealCategories = ["desayuno", "snack", "almuerzo", "merienda", "cena"];

  const generateWeeklyPlan = () => {
    const mealsPercategory = {};
    mealCategories.forEach((category) => {
      const filteredMeals = meals.filter((meal) => meal.category === category);
      // Por cada tipo de comida
      mealsPercategory[category] = days.map(() => {
        // Para cada dia
        const randomIndex = Math.floor(Math.random() * filteredMeals.length);

        return filteredMeals.splice(randomIndex, 1)[0];
      });
    });

    return days.map((day, dayIndex) => {
      const dayPlan = {};
      mealCategories.forEach((category) => {
        dayPlan[category] = mealsPercategory[category][dayIndex];
      });
      return { day, ...dayPlan };
    });
  };

  const [weeklyPlan, setWeeklyPlan] = useState(generateWeeklyPlan());

  const regeneratePlan = () => {
    setWeeklyPlan(generateWeeklyPlan());
  };
  console.dir(weeklyPlan);
  return (
    <div>
      <Header />
      <main className="mainContainer">
        <Routes>
          <Route
            path="/"
            element={
              <Hero
                regeneratePlan={regeneratePlan}
                mealCategories={mealCategories}
                weeklyPlan={weeklyPlan}
              />
            }
          ></Route>
          <Route
            path="/calendar"
            element={
              <Calendar
                regeneratePlan={regeneratePlan}
                mealCategories={mealCategories}
                weeklyPlan={weeklyPlan}
              />
            }
          ></Route>
          <Route path="/recipes" element={<RecipesForm />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
