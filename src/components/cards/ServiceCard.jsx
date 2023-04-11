import React from "react";
import "./serviceCard.scss";

const ServiceCard = ({ card }) => {
  return (
    <div className="service-card">
      <div className="card-wrapper">
        <img src={card.img} alt="" />
        <p>{card.title}</p>
        <p>{card.content}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
