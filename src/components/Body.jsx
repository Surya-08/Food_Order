import React, { useState } from "react";
import { mockRestrauntData } from "../utils/mockSwiggyRestraunts";
import RestrauntCard from "./RestrauntCard";

const Body = () => {
  const [filteredRes, setFilteredRes] = useState(mockRestrauntData);

  const handleRating = () => {
    const filteredData = mockRestrauntData.filter(
      (item) => item.info.avgRating > 4
    );
    setFilteredRes(filteredData);
  };
  return (
    <div className="body">
      <div className="search-field">Search</div>
      <button className="rating-btn" onClick={handleRating}>
        Rating 4+
      </button>
      <div className="res-container">
        {filteredRes?.map((restaraunt) => (
          <RestrauntCard resData={restaraunt} key={restaraunt.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
