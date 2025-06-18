function RecipesForm() {
  return (
    <form className="form" action="" method="post">
      <h3>Añadir una nueva comida</h3>
      <p>
        Porque compartir es vivir, si te gustaría añadir una receta al listado,
        por favor, rellena el siguiente formulario
      </p>
      <label htmlFor="name">Título de la nueva comida:</label>
      <input
        type="text"
        id="name"
        name="name"
        // onInput={}
      />
      <label htmlFor="email">
        <span>
          Pásanos tu email para informarte de cuándo se haya subido tu receta:{" "}
        </span>
        <input
          type="email"
          nombre="correo"
          id="correo"
          autoComplete="email"
          required
        />
      </label>
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
  );
}

export default RecipesForm;
