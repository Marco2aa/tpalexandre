import React from "react";
import "./Categories.css";
import Button from "../Button/Button";

const Categories = ({ typo, children }) => {
  return (
    <div className="category-container">
      <div className="text-wrapper">
        <p className="main-text">{typo}</p>
        <Button title="TOUT VOIR" buttonWidth="184px" buttonHeight="46px" />
      </div>
      <div className="card-container">{children}</div>
    </div>
  );
};

export default Categories;
