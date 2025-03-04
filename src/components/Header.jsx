import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import useOnlineStatus from "../utils/useOnlineStatus";
import logo from "../public/Icons/FoodBurrow.png";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.cartItems);
  const [toggleButton, setToggleButton] = useState("Login");
  const ONLINE_STATUS = useOnlineStatus();

  return (
    <div className="flex justify-between bg-pink-950">
      <div className="w-[90px]">
        <img src={logo} alt="food app logo" className="" />
      </div>
      <div className="text-yellow-50 content-center">
        <ul className="flex">
          <li>{ONLINE_STATUS ? "Online ✅" : "Offline 🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/cart">Cart ({cartItems.length})</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/profile">Profile</Link>
          </li>
          <li className="px-4">
            <button
              onClick={() =>
                toggleButton === "Login"
                  ? setToggleButton("Logout")
                  : setToggleButton("Login")
              }
              className=""
            >
              {toggleButton}
            </button>
            <button className="px-4">
              <Link to="/grocery" className="">
                Grocery
              </Link>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
