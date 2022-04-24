import React from "react";
import "../style/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="logo">
        <Link to="/">
          <img
            id="logoImages"
            src="https://i01.appmifile.com/webfile/globalimg/pandora/mi-logo.svg"
            alt="Not"
          />
        </Link>
      </div>
      <Link className="navLinks" to="/miphones">
        Mi phone
      </Link>
      <Link className="navLinks" to="/redmiphones">
        Redmi Phone
      </Link>
      <Link className="navLinks" to="/Tv">
        Tv
      </Link>
      <Link className="navLinks" to="/laptop">
        laptop
      </Link>
      <Link className="navLinks" to="/lifestyle">
        lifestyle & Fitness
      </Link>
      <Link className="navLinks" to="/home">
        Home
      </Link>
      <Link className="navLinks" to="/Radio">
        Radio
      </Link>
      <Link className="navLinks" to="/Accesses">
        Accesses
      </Link>
      <div className="searchIcon">
        <input type="text" placeholder="Search Product" />
      </div>
    </div>
  );
};

export default Navbar;
