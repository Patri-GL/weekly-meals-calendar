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
        <Routes>
          <Route
            path="/"
            element={
              <Hero
                regeneratePlan={regeneratePlan}
                mealTypes={mealTypes}
                weeklyPlan={weeklyPlan}
              />
            }
          ></Route>
          <Route path="/calendar" element={<Calendar />}></Route>
          <Route path="/recipes" element={<RecipesForm />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
