import React, { useEffect, useState } from "react";
import { RESTAURANT_MENU_URL } from "../utils/common";
import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [menu, setMenu] = useState(null);
  const { resId } = useParams();
  const fetchRestaurantMenu = async () => {
    const menuDetails = await fetch(`${RESTAURANT_MENU_URL}${resId}`);
    const menuData = await menuDetails.json();
    setMenu(menuData?.data);
  };
  useEffect(() => {
    fetchRestaurantMenu();
  }, []);
  if (menu === null) {
    return <ShimmerUI />;
  }
  const { name, cuisines, costForTwoMessage, avgRatingString } =
    menu?.cards[2]?.card?.card?.info;
  const { itemCards } =
    menu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card.card;

  return (
    <div>
      <div className="menu">
        <h1>{name}</h1>
        <h3>
          {cuisines.join(",")} {costForTwoMessage}
        </h3>
        <h3>{avgRatingString} rating</h3>
        <ul className="menu-items">
          {itemCards?.map((item) => {
            return (
              <li key={item.card.info.id}>
                {item.card.info.name} - {"Rs "}
                {item.card.info.defaultPrice / 100 || item.card.info?.price}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
