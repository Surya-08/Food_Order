import React, { useState } from "react";
import { CDN_URL, NON_VEG_ICON, VEG_ICON } from "../utils/common";
import ratingIcon from "../public/Icons/ratingStar.svg";
import { addItem } from "../utils/reducer";
import { useDispatch } from "react-redux";
import AddQuantityButton from "./AddQuantityButton";

const ItemsList = ({ data }) => {
  // const [showAddBtn, setShowAddBtn] = useState(true);
  const dispatch = useDispatch();
  const addedToCart = (item) => {
    dispatch(addItem(item));
    // setShowAddBtn(!showAddBtn);
  };
  return (
    <>
      {data.map((item) => {
        return (
          <div
            className="flex justify-between p-1 border-b-2"
            key={item.card.info.id}
          >
            <div className="w-9/12 text-left">
              <img
                src={
                  item.card.info?.itemAttribute?.vegClassifier === "NONVEG"
                    ? NON_VEG_ICON
                    : VEG_ICON
                }
                alt="veg classification"
                className="h-3 overflow-clip"
              />
              <p className="text-left font-semibold text-sm text-wrap">
                {item.card.info.name} - ₹{" "}
                {item.card.info.defaultPrice / 100 ||
                  item.card.info?.price / 100}{" "}
              </p>
              {item.card.info?.ratings?.aggregatedRating?.rating && (
                <div className="flex py-1 justify-start">
                  <span className="text-emerald-600 flex mr-1">
                    <img
                      src={ratingIcon}
                      alt="starRatingIcon"
                      className="items-start"
                    />

                    {item.card.info.ratings.aggregatedRating.rating}
                  </span>
                  <span className="font-normal text-sm">
                    ({item.card.info?.ratings.aggregatedRating.ratingCountV2})
                  </span>
                </div>
              )}
              <p className="font-light font-serif text-sm">
                {item.card.info.description}
              </p>
            </div>
            <div className="w-3/12 relative">
              <button className="border-0 outline-none">
                <img
                  src={
                    item.card.info?.imageId && CDN_URL + item.card.info?.imageId
                  }
                  className="w-full rounded-xl bg-blend-overlay object-cover h-36"
                />
                <div className="absolute inset-x-0 bottom-0">
                  <button
                    className="text-emerald-700 w-28 outline-none bg-slate-50 rounded-md p-1 mx-1 drop-shadow-lg"
                    onClick={() => addedToCart(item)}
                  >
                    Add+
                  </button>
                </div>
                {/* <AddQuantityButton
                  addedToCart={addedToCart}
                  showAddBtn={showAddBtn}
                  item={item}
                /> */}
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ItemsList;
