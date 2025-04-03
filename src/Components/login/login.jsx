import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

const Login = ({ theme }) => {
  return (
    <div className={`login-page ${theme}`}>
      <div className="login-content">
        <div className={`login-container text-${theme}`}>
          <h2>Войти</h2>
          <form>
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
            <button type="submit" className="login-btn">
              Войти
            </button>
          </form>
          <p className="register-link">
            Нет аккаунта? <Link to="/register">Зарегистрироваться</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
