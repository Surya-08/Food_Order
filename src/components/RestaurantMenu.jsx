import React from "react";
import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";
import useRestrauntMenu from "../utils/useRestrauntMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const ResMenuDetails = useRestrauntMenu(resId);
  if (ResMenuDetails === null) {
    return <ShimmerUI />;
  }
  const { name, cuisines, costForTwoMessage, avgRatingString } =
    ResMenuDetails?.cards[2]?.card?.card?.info;
  const { itemCards } =
    ResMenuDetails?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      .card;

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
