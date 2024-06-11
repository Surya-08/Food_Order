import React from "react";
import { LOGO_URL } from "../utils/common";

const Header = () => {
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
        </ul>
      </div>
    </div>
  );
};
export default Header;
