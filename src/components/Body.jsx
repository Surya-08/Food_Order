import React from "react";
import { mockRestrauntData } from "../data/mockSwiggyRestraunts";
import RestrauntCard from "./RestrauntCard";

const Body = () => {
  return (
    <div>
      <div className="search-field">Search</div>
      <div className="res-container">
        {mockRestrauntData?.map((restaraunt) => (
          <RestrauntCard resData={restaraunt} key={restaraunt.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
