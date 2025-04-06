import React from "react";
import "./contacts.css";

const Contacts = ({ theme }) => {
  return (
    <div className={`contacts-container ${theme}`}>
      <h1 className="contacts-title">Свяжитесь с нами</h1>
      <p className="contacts-description">
        Если у вас есть вопросы или предложения, пожалуйста, заполните форму
        ниже, и мы свяжемся с вами в ближайшее время.
      </p>
      <form className="contacts-form">
        <div className="form-group">
          <label htmlFor="name">Имя</label>
          <input type="text" id="name" placeholder="Введите ваше имя" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Электронная почта</label>
          <input type="email" id="email" placeholder="Введите ваш email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Сообщение</label>
          <textarea
            id="message"
            placeholder="Введите ваше сообщение"
          ></textarea>
        </div>
        <button type="submit" className="submit-btn">
          Отправить
        </button>
      </form>
    </div>
  );
};

export default Contacts;
