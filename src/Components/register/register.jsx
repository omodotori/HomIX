import React from "react";
import { Link } from "react-router-dom";
import "./register.css";

const Register = ({ theme }) => {
  return (
    <div className={`register-page ${theme}`}>
      <div className="register-content">
        <div className={`register-container text-${theme}`}>
          <h2>Регистрация</h2>
          <form>
            <div className="form-group">
              <label>Имя</label>
              <input type="text" placeholder="Введите ваше имя" required />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Введите ваш email" required />
            </div>
            <div className="form-group">
              <label>Пароль</label>
              <input
                type="password"
                placeholder="Введите ваш пароль"
                required
              />
            </div>
            <button type="submit" className="register-btn">
              Зарегистрироваться
            </button>
          </form>
          <p className="login-link">
            Уже есть аккаунт? <Link to="/login">Войти</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
