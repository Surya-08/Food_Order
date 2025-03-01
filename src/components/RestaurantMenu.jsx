import React, { useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";
import useRestrauntMenu from "../utils/useRestrauntMenu";
import locationIcon from "../public/Icons/location.svg";
import agentIcon from "../public/Icons/agent.svg";
import ratingStarIcon from "../public/Icons/ratingStar.svg";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const ResMenuDetails = useRestrauntMenu(resId);
  const [showIndex, setShowIndex] = useState(null);
  // const [addItem, setAddItem] = useState(false);
  //TODO: Add a loading spinner or shimmer effect when the data is being fetched
  if (ResMenuDetails === null) {
    return <ShimmerUI />;
  }
  const {
    name,
    cuisines,
    costForTwoMessage,
    avgRatingString,
    totalRatingsString,
    areaName,
    sla: { slaString },
    feeDetails: { message },
  } = ResMenuDetails?.cards[2]?.card?.card?.info;

  // const { itemCards } =
  //   ResMenuDetails?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
  //     .card;

  const category =
    ResMenuDetails?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (item) =>
        item.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="w-9/12 m-auto text-center items-center">
      <div className="text-2xl font-semibold m-3">{name}</div>
      <div className="bg-slate-300 rounded-lg text-base font-semibold shadow-teal-50 m-1 p-3">
        <div className="flex mx-5 py-1">
          <img src={ratingStarIcon} alt="starRatingIcon" />
          {avgRatingString}
          <span>{`(${totalRatingsString}) - ${costForTwoMessage}`}</span>
        </div>
        <div className="text-left mx-5 text-sm">{cuisines.join(",")}</div>
        <div className="text-left mx-4 text-sm flex">
          <img src={locationIcon} alt="location" />
          <span>{areaName}</span>
          <span className="mx-5 float-right">{slaString}</span>
        </div>
        <div>
          <hr className="bg-black my-1 h-0.5" />
        </div>
        <div className="text-left mx-4 text-xs flex">
          <img src={agentIcon} alt="delivery" className="w-4 mr-2" />
          {/* <span className="my-1">{message.split(/[<b></b>]/)}</span> */}
        </div>
      </div>
      <div>
        <ul className="menu-items">
          {category?.map((item, index) => {
            return (
              <li key={item.card.card.title}>
                <RestaurantCategory
                  key={item.card.card.title}
                  categoryType={item?.card?.card}
                  showItems={index === showIndex}
                  setShowIndex={() =>
                    setShowIndex((prev) => (prev === index ? null : index))
                  }
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
