function Calendar({ regeneratePlan, mealTypes, weeklyPlan }) {
  return (
    <section>
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
    </section>
  );
}

export default Calendar;
