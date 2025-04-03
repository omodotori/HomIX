import React from "react";
import "./home.css";
import banner_home from "../../assets/banner-home.png";
import astanaImage from "../../assets/astana.png";
import almatyImage from "../../assets/almaty.png";
import aktauImage from "../../assets/aktau.png";
import shymkentImage from "../../assets/shymkent.png";

const Home = ({ theme }) => {
  return (
    <div>
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

      <ul className={`slider slider-${theme}`}>
        <li
          className="item item1"
          style={{
            backgroundImage: `url(${astanaImage})`,
          }}
        >
          <span>Astana</span>
        </li>
        <li
          className="item item2"
          style={{
            backgroundImage: `url(${almatyImage})`,
          }}
        >
          <span>Almaty</span>
        </li>
        <li
          className="item item3"
          style={{
            backgroundImage: `url(${aktauImage})`,
          }}
        >
          <span>Aktau</span>
        </li>
        <li
          className="item item4"
          style={{
            backgroundImage: `url(${shymkentImage})`,
          }}
        >
          <span>Shymkent</span>
        </li>
      </ul>
    </div>
  );
};

export default Home;
