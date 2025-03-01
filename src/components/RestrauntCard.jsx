import React from "react";
import { CDN_URL } from "../utils/common";
import ratingStarIcon from "../public/Icons/ratingStar.svg";

export const withDiscountTag = (RestrauntCard) => {
  return (props) => {
    const {
      resData: {
        info: {
          aggregatedDiscountInfoV3: { header, subHeader },
        },
      },
    } = props;
    return (
      <div>
        <label className="absolute m-3 text-white bg-black rounded-sm">{`${header} ${
          subHeader !== undefined || null ? subHeader : ""
        }`}</label>
        <RestrauntCard {...props} />
      </div>
    );
  };
};

const RestrauntCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    sla: { slaString },
    costForTwo,
  } = resData?.info;
  return (
    <div className="res-card">
      <div className="res-card-details">
        <img
          className="res-card-logo w-0.5"
          src={CDN_URL + cloudinaryImageId}
          alt="Pizza Hut"
        />
        <ol className="list-none text-sm">
          <li className="font-semibold">
            <h4 className="res-card-items">{name}</h4>
          </li>
          <li>
            <div className="flex font-medium">
              <img src={ratingStarIcon} alt="starRatingIcon" />
              {avgRating}
              <span className="ml-4">{slaString}</span>
              <span className="ml-4">{costForTwo}</span>
            </div>
          </li>
          <li className="res-card-items from-neutral-600 overflow-ellipsis">
            {cuisines.join(",").split(" ")}
          </li>
        </ol>
      </div>
    </div>
  );
};

export default RestrauntCard;
