import React from "react";
import "./contacts.css";

const Contacts = () => {
  return (
    <div className="container-login">
      <h2>Свяжитесь с нами</h2>
      <p>Если у вас есть вопросы, напишите нам.</p>

      <div className="contact-info">
        <p>📞 +7 (777) 123-45-67</p>
        <p>📧 support@example.com</p>
        <p>📍 г. Алматы, ул. Достык, 55</p>
      </div>

      <form className="contact-form">
        <input type="text" placeholder="Ваше имя" />
        <input type="email" placeholder="Ваш Email" />
        <textarea placeholder="Ваше сообщение"></textarea>
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
};

export default Contacts;
