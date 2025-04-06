import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useSearchStore from "../../store/searchStore";
import "./navbar.css";
import logo_light from "../../assets/HomIX_light.png";
import logo_dark from "../../assets/HomIX_dark.png";
import search_icon_light from "../../assets/search-w.png";
import search_icon_dark from "../../assets/search-b.png";
import toogle_light from "../../assets/night.png";
import toogle_dark from "../../assets/day.png";

const Navbar = ({ theme, setTheme }) => {
  const { query, setQuery } = useSearchStore();
  const navigate = useNavigate();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <div className={`navbar ${theme}`}>
      <img
        src={theme === "light" ? logo_light || "" : logo_dark || ""}
        alt="Логотип"
        className="logo"
        onClick={handleLogoClick}
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
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Поиск..."
        />
        <img
          src={theme === "light" ? search_icon_light : search_icon_dark}
          alt="Иконка поиска"
        />
      </div>

      <img
        src={theme === "light" ? toogle_light || "" : toogle_dark || ""}
        alt="Переключатель темы"
        className="toogle-icon"
        onClick={toggleTheme} // Управление темой через Navbar
      />
    </div>
  );
};

export default Navbar;
