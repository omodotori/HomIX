import React from "react";
import "./footer.css";

const Footer = ({ theme }) => {
  return (
    <footer className={`footer ${theme}`}>
      <div className="footer-content">
        <p>© 2023 HomIX. Все права защищены.</p>
        <p>
          <a href="/contacts" className={`footer-link text-${theme}`}>
            Контакты
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
