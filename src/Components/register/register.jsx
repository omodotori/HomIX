import React from "react";
import "./register.css";

const Register = () => {
  return (
    <div className="register-container">
      <div className="register-form">
        <h2 className="register-title">Регистрация</h2>
        <form>
          <input type="text" placeholder="Имя" className="input-field" />
          <input type="email" placeholder="Email" className="input-field" />
          <input type="password" placeholder="Пароль" className="input-field" />
          <input
            type="password"
            placeholder="Подтвердите пароль"
            className="input-field"
          />
          <select className="input-field">
            <option value="buyer">Покупатель</option>
            <option value="landlord">Арендодатель</option>
          </select>
          <button type="submit" className="register-button">
            Зарегистрироваться
          </button>
        </form>
        <p className="login-link">
          Уже есть аккаунт? <a href="/login">Войти</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
