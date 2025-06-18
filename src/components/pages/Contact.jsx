function Contact() {
  return (
    <form className="contactForm form" action="" method="post">
      <label htmlFor="name">
        <span>Nombre: </span>
        <input
          type="text"
          name="nombre"
          id="nombre"
          autoComplete="name"
          required
        />
      </label>
      <label htmlFor="email">
        <span>Email: </span>
        <input
          type="email"
          nombre="correo"
          id="correo"
          autoComplete="email"
          required
        />
      </label>
      <label htmlFor="message">
        <span>
          Si tienes alguna duda, o necesitas ponerte en contacto con
          nosotras,escribe tu mensaje aquí:
        </span>
        <textarea name="message" id=""></textarea>
      </label>
      <input className="btn" type="submit" value="Enviar" />
    </form>
  );
}

export default Contact;
