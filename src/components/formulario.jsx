import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./formulario.css"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Configuración de EmailJS (reemplaza por tus datos de cuenta)
    emailjs
      .send(
        "service_i9hcrdj", // ID de servicio
        "template_31es16o", // ID de plantilla
        formData,
        "c4vBbV_qnRcHaiKun" // ID de usuario
      )
      .then(
        (result) => {
          alert("¡El mensaje fue enviado con éxito!");
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          alert("Hubo un error al enviar el mensaje, por favor inténtalo nuevamente.");
        }
      );
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Correo:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Asunto:</label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
      </div>
      <div className="texBot">
        <label>Nota:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>

      <div className="send">
        <button type="submit">Enviar</button>
      </div>
      
    </form>
  );
};

export default ContactForm;
