import React, { useState } from "react";
import { LOGO_URL } from "../utils/common";

const Header = () => {
  const [toggleButton, setToggleButton] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} alt="food app logo" className="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Cart</li>
          <li>About Us</li>
          <li>Profile</li>
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
