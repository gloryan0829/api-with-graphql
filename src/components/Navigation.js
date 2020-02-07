import React from "react";
import "../styles/Navigation.css";
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <div className="nav">
      <Link to="/" className="item">
        Home
      </Link>
      <Link to="/about" className="item">
        About
      </Link>
    </div>
  );
};

export default Navigation;
