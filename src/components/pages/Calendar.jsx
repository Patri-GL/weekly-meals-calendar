import { useState } from "react";
import { Link } from "react-router";

function Calendar({
  regeneratePlan,
  mealCategories = [],
  weeklyPlan = [],
  shoppingList = [],
}) {
  const [expandedDay, setExpandedDay] = useState(null);

  const toggleDay = (index) => {
    setExpandedDay(expandedDay === index ? null : index);
  };
  return (
    <section>
      <section className="btnSection">
        <button onClick={regeneratePlan} className="btn">
          Generar un plan nuevo
        </button>

        <Link to={"/shoppingList"}>
          <button onClick={shoppingList} className="btn">
            Lista de compra
          </button>
        </Link>
      </section>
      <section className="desktopView">
        <table className="table">
          <thead>
            <tr>
              <th>
                <h3>Día</h3>
              </th>
              {mealCategories.map((category) => (
                <th key={category}>
                  <h4>
                    {" "}
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </h4>
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
                {mealCategories.map((category) => (
                  <td key={category}>
                    <div className="mealCard">
                      <p>{dayPlan[category].name}</p>
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="mobileView">
        {weeklyPlan.map((dayPlan, index) => (
          <div key={index} className="dayCard">
            <div className="dayHeader" onClick={() => toggleDay(index)}>
              <h3>
                {dayPlan.day.charAt(0).toUpperCase() + dayPlan.day.slice(1)}
              </h3>
              <span className="toggleIcon">
                {expandedDay === index ? "−" : "+"}
              </span>
            </div>

            {expandedDay === index && (
              <div className="mealsList">
                {mealCategories.map((category) => (
                  <div key={category} className="mealItem">
                    <span className="mealCategory">{category}:</span>
                    <span className="mealName">{dayPlan[category].name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </section>
    </section>
  );
}

export default Calendar;
