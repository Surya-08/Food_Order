import React, { useState } from "react";
import upIcon from "../public/Icons/up.svg";
import ItemsList from "./ItemsList";

const RestaurantCategory = ({ categoryType, showIndex }) => {
  const [showItems, setShowItems] = useState(false);
  const handleClick = () => {
    setShowItems((prev) => !prev);
  };
  return (
    <div className="bg-slate-300 rounded-lg my-1 p-4 font-bold text-sm shadow-white drop-shadow-2xl">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <div>
          {categoryType.title} ({categoryType.itemCards.length})
        </div>
        <div>
          <img src={upIcon} alt="upAccordian" />
        </div>
      </div>
      {showItems && <ItemsList data={categoryType} />}
    </div>
  );
};

export default RestaurantCategory;
