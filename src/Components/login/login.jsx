import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-form">
        <h2 className="login-title">Войти</h2>
        <form>
          <input type="email" placeholder="Email" className="input-field" />
          <input type="password" placeholder="Пароль" className="input-field" />
          <button type="submit" className="login-button">
            Войти
          </button>
        </form>
        <p className="register-link">
          Нет аккаунта? <a href="/register">Зарегистрироваться</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
