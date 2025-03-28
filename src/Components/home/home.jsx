import React from "react";
import "./home.css";
import banner_home from "../../assets/banner-home.png";

const Home = ({ theme }) => {
  return (
    <div className={`hero ${theme}`}>
      <div className={`hero-text text-${theme}`}>
        <h1 style={{ color: theme === "light" ? "black" : "white" }}>
          Легко находите и управляйте недвижимостью
        </h1>
        <p style={{ color: theme === "light" ? "black" : "white" }}>
          Покупка, аренда и управление в одном месте
        </p>
        <div className="buttons">
          <button className="primary-btn">Найти жилье</button>
          <button className="secondary-btn">Разместить объявление</button>
        </div>
      </div>
      <img src={banner_home} alt="Дом" className="hero-image" />
    </div>
  );
};

export default Home;
