import React from "react";
import { useParams } from "react-router-dom";
import "./adDetails.css";

const AdDetails = () => {
  const { id } = useParams();

  // Заглушка данных
  const ad = {
    id,
    img: "https://via.placeholder.com/300",
    type: "Квартира",
    description: "Уютная квартира в центре города.",
    city: "Астана",
    price: "25,000 ₸",
  };

  return (
    <div className="ad-details__container">
      <img src={ad.img} alt={ad.type} className="ad-details__image" />
    </div>
  );
};

export default AdDetails;
