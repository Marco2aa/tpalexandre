import React from "react";
import "./Card.css";
import image from "../../assets/images/image.png";

const Card = ({ onClick, product }) => {
  return (
    <div onClick={onClick} className="card">
      <img className="card-image" src={product.thumbnail} alt="" />
      <div className="info-container">
        <div
          style={{
            width: "100%",
          }}
        >
          <p className="text-info">{product.brand}</p>

          <p className="text-info-main">{product.title}</p>
        </div>
        <p className="money">{product.price}$</p>
      </div>
    </div>
  );
};

export default Card;
