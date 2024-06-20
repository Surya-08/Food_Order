import React, { useState } from "react";
import { LOGO_URL } from "../utils/common";
import { Link } from "react-router-dom";

const Header = () => {
  const [toggleButton, setToggleButton] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} alt="food app logo" className="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/" className="header-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/cart" className="header-link">
              Cart
            </Link>
          </li>
          <li>
            <Link to="/about" className="header-link">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/profile" className="header-link">
              Profile
            </Link>
          </li>
          <li>
            <button
              onClick={() =>
                toggleButton === "Login"
                  ? setToggleButton("Logout")
                  : setToggleButton("Login")
              }
              className="login-logout"
            >
              {toggleButton}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
