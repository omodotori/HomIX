import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo_light from "../../assets/HomIX_light.png";
import logo_dark from "../../assets/HomIX_dark.png";
import search_icon_light from "../../assets/search-w.png";
import search_icon_dark from "../../assets/search-b.png";
import toogle_light from "../../assets/night.png";
import toogle_dark from "../../assets/day.png";

const Navbar = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={`navbar ${theme}`}>
      <img
        src={theme === "light" ? logo_light || "" : logo_dark || ""}
        alt="Логотип"
        className="logo"
      />

      <ul className={`text-${theme}`}>
        <li>
          <Link to="/" style={{ color: theme === "light" ? "black" : "white" }}>
            Главная
          </Link>
        </li>
        <li>
          <Link
            to="/profile"
            style={{ color: theme === "light" ? "black" : "white" }}
          >
            Профиль
          </Link>
        </li>
        <li>
          <Link
            to="/ads"
            style={{ color: theme === "light" ? "black" : "white" }}
          >
            Объявления
          </Link>
        </li>
        <li>
          <Link
            to="/contacts"
            style={{ color: theme === "light" ? "black" : "white" }}
          >
            Контакты
          </Link>
        </li>
      </ul>

      <div className="search-box">
        <input type="text" placeholder="Search" />
        <img
          src={theme === "light" ? search_icon_light : search_icon_dark}
          alt=""
        />
      </div>

      <img
        src={theme === "light" ? toogle_light || "" : toogle_dark || ""}
        alt="Переключатель темы"
        className="toogle-icon"
        onClick={toggleTheme}
      />
    </div>
  );
};

export default Navbar;
