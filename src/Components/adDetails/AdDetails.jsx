import React from "react";
import { useParams } from "react-router-dom";
import { listings } from "../recommend/Recommend"; // Импортируем данные из Recommend
import "./adDetails.css";

const AdDetails = ({ theme }) => {
  const { id } = useParams();
  const ad = listings.find((item) => item.id === parseInt(id)); // Находим объявление по id

  if (!ad) {
    return <div className="ad-details__not-found">Объявление не найдено</div>;
  }

  return (
    <div className={`ad-details__container ${theme}`}>
      <div className="ad-details__header">
        <img src={ad.img} alt={ad.title} className="ad-details__image" />
        <div className="ad-details__info">
          <h1 className="ad-details__title">{ad.title}</h1>
          <p className="ad-details__price">{ad.price}</p>
          <p className="ad-details__city">{ad.city}</p>
        </div>
      </div>
      <div className="ad-details__body">
        <p>
          <strong>Тип:</strong> {ad.type}
        </p>
        <p>
          <strong>Тип сделки:</strong> {ad.deal_type}
        </p>
        <p>
          <strong>Описание:</strong> {ad.description}
        </p>
        <p>
          <strong>Площадь:</strong> {ad.area} м²
        </p>
        <p>
          <strong>Комнаты:</strong> {ad.rooms}
        </p>
        <p>
          <strong>Этаж:</strong> {ad.floor} из {ad.total_floors}
        </p>
        <p>
          <strong>Год постройки:</strong> {ad.built_year || "Не указан"}
        </p>
        <p>
          <strong>Номер телефона:</strong> {ad.phone || "Не указан"}
        </p>
      </div>
    </div>
  );
};

export default AdDetails;
