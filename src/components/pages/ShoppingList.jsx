import { useMemo, useState } from "react";
import { Link } from "react-router";

function ShoppingList({ mealCategories, weeklyPlan }) {
  const generateShoppingList = (plan) => {
    if (!plan) return [];

    const ingredientSet = new Set();

    plan.forEach((day) => {
      mealCategories.forEach((category) => {
        const meal = day[category];
        if (meal && meal.ingredients) {
          meal.ingredients.forEach((ingredient) => {
            ingredientSet.add(ingredient.toLowerCase());
          });
        }
      });
    });

    return Array.from(ingredientSet).sort();
  };

  const shoppingList = useMemo(
    () => generateShoppingList(weeklyPlan),
    [weeklyPlan]
  );
  const [isChecked, setIsChecked] = useState(
    Array(shoppingList.length).fill(false)
  );

  const handleCheck = (index) => {
    const newChecked = [...isChecked];
    newChecked[index] = !newChecked[index];
    setIsChecked(newChecked);
  };
  return (
    <section className="shoppingListSection">
      <Link to={"/calendar"}>
        <button className="btn">Volver a</button>
      </Link>
      <h2>Lista de la Compra</h2>
      <p>
        Esta lista de la compra muestra el número de veces en que aparecen los
        alimentos en tu calendario de comidas para facilitar tu planificación
        semanal.{" "}
      </p>
      {shoppingList.length === 0 ? (
        <p>No hay comidas planificadas aún.</p>
      ) : (
        <ul className="shoppingList">
          {shoppingList.map((item, index) => (
            <li key={index} className={isChecked[index] ? "checked" : ""}>
              <input
                type="checkbox"
                checked={isChecked[index] || false}
                onChange={() => handleCheck(index)}
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default ShoppingList;
