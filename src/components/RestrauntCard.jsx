import React from "react";
import { CDN_URL } from "../utils/common";

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
          className="res-card-logo"
          src={CDN_URL + cloudinaryImageId}
          alt="Pizza Hut"
        />
        <h4 className="res-card-items">{name}</h4>
        <h5 className="res-card-items">{cuisines.join(",")}</h5>
        <div className="res-card-items">
          <span className="res-rating-time">
            <span style={{ display: "flex" }}>
              <img
                style={{
                  backgroundColor: "#009688",
                  marginRight: "4px",
                }}
                src="https://img.icons8.com/?size=52&amp;id=925&amp;format=png"
                alt="starRatingIcon"
                width={18}
                height={18}
              />
              <h5 className="res-card-items">{avgRating}</h5>
            </span>
            <h5 className="res-card-items">{slaString}</h5>
            <h5 className="res-card-items">{costForTwo}</h5>
          </span>
        </div>
      </div>
    </div>
  );
};

export default RestrauntCard;
