import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import axios from "axios";

const Sidebar = ({ onClick }) => {
  const [categories, setCategories] = useState([]);
  const [highlight, setHighlight] = useState(null);

  const FetchCategories = async () => {
    try {
      const response = await axios.get(
        "https://dummyjson.com/products/categories"
      );
      const data = response.data;
      console.log(data);
      setCategories(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    FetchCategories();
  }, []);

  const handleClick = (item) => {
    onClick(item);
    setHighlight(item);
  };

  return (
    <div className="sidebar-container">
      <p
        onClick={() => {
          onClick(null);
          setHighlight(null);
        }}
        className={`sidebar-text ${highlight === null ? "highlight" : ""}`}
      >
        Tous
      </p>
      {categories.map((item) => (
        <p
          onClick={() => handleClick(item)}
          key={item}
          className={`sidebar-text ${highlight === item ? "highlight" : ""}`}
        >
          {item}
        </p>
      ))}
    </div>
  );
};

export default Sidebar;
