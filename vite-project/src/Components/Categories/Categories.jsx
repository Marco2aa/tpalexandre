import React from "react";
import "./Categories.css";
import Button from "../Button/Button";

const Categories = ({ onClick, title, children }) => {
  return (
    <div className="category-container">
      <div className="text-wrapper">
        <p className="main-text">{title}</p>
        <Button
          onClick={onClick}
          title="TOUT VOIR"
          buttonWidth="200px"
          buttonHeight="46px"
        />
      </div>
      <div className="card-container">{children}</div>
    </div>
  );
};

export default Categories;
