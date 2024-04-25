import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import { GetCategories } from "../../Config/Api";
import axios from "axios";

const Sidebar = ({ onClick }) => {
  const [categories, setCategories] = useState([]);
  const [highlight, setHighlight] = useState(null);

  const FetchCategories = async () => {
    try {
      const response = await axios.get(GetCategories());
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
