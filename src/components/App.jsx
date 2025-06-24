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
import ShoppingList from "./pages/ShoppingList";
import ls from "./services/ls";

function App() {
  const [meals] = useState(() => {
    return ls.get("meals", mealsData.results);
  });

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
      mealsPercategory[category] = days.map(() => {
        const randomIndex = Math.floor(Math.random() * filteredMeals.length);
        return filteredMeals.splice(randomIndex, 1)[0];
      });
    });

    const newPlan = days.map((day, dayIndex) => {
      const dayPlan = {};
      mealCategories.forEach((category) => {
        dayPlan[category] = mealsPercategory[category][dayIndex];
      });
      return { day, ...dayPlan };
    });

    setWeeklyPlan(newPlan);
    ls.set("weeklyPlan", newPlan);

    return newPlan;
  };
  const [weeklyPlan, setWeeklyPlan] = useState(() => {
    return ls.get("weeklyPlan");
  });

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
          <Route
            path="/shoppingList"
            element={
              <ShoppingList
                weeklyPlan={weeklyPlan}
                mealCategories={mealCategories}
              />
            }
          ></Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
