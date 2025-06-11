function Contact() {
  return (
    <form className="contactForm" action="" method="post">
      <label htmlFor="name">
        <span>Nombre</span>
        <input
          type="text"
          name="nombre"
          id="nombre"
          autocomplete="name"
          required
        />
      </label>
      <label htmlFor="email">
        <span>Email</span>
        <input
          type="email"
          nombre="correo"
          id="correo"
          autocomplete="email"
          required
        />
      </label>
      <label htmlFor="message">
        <span>Mensaje</span>
        <textarea name="message" id=""></textarea>
      </label>
      <input className="btn" type="submit" value="Enviar" />
    </form>
  );
}

export default Contact;
