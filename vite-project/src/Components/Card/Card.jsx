import React from "react";
import "./Card.css";
import image from "../../assets/images/image.png";

const Card = ({ onClick, brand, name, price, image }) => {
  return (
    <div onClick={onClick} className="card">
      <img className="card-image" src={image} alt="" />
      <div className="info-container">
        <div
          style={{
            width: "100%",
            height: "82px",
          }}
        >
          <p className="text-info">{brand}</p>

          <p className="text-info-main">{name}</p>
        </div>
        <p className="money">{price}</p>
      </div>
    </div>
  );
};

export default Card;
