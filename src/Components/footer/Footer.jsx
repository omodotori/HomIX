import React from "react";
import { useNavigate } from "react-router-dom";
import "./footer.css";

const Footer = ({ theme }) => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contacts");
  };

  return (
    <footer className={`footer ${theme}`}>
      <div className="footer-content">
        <div className="footer-section">
          <h3>О нас</h3>
          <p>
            HomIX — это платформа для поиска и управления недвижимостью. Мы
            помогаем вам найти идеальное жилье или коммерческую недвижимость.
          </p>
        </div>
        <div className="footer-section">
          <h3>Контакты</h3>
          <p>Email: support@homix.kz</p>
          <p>Телефон: +7 (777) 123-45-67</p>
          <p>
            <button
              className={`footer-link text-${theme}`}
              onClick={handleContactClick}
            >
              Свяжитесь с нами
            </button>
          </p>
        </div>
        <div className="footer-section">
          <h3>Социальные сети</h3>
          <p>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              Facebook
            </a>
          </p>
          <p>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              Instagram
            </a>
          </p>
          <p>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              Twitter
            </a>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2023 HomIX. Все права защищены.</p>
      </div>
    </footer>
  );
};

export default Footer;
