import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div className="container">
      <nav className="header">
        <Link className="link" to="/">
          Accueil
        </Link>
        <Link className="link" to="/products">
          Produits
        </Link>
      </nav>
    </div>
  );
};

export default Header;
