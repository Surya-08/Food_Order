import React, { useState } from "react";
import RestrauntCard from "./RestrauntCard";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestrauntsList from "../utils/useRestrauntsList";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const ONLINE_STATUS = useOnlineStatus();
  const { restaurantsList, titleOfPlace, filteredRes, setFilteredRes } =
    useRestrauntsList();
  const handleRating = () => {
    const filteredData = restaurantsList.filter(
      (item) => item.info.avgRating >= 4
    );
    setFilteredRes(filteredData);
  };

  const handleSearch = (e) => {
    setSearchText(e.target.value);
    const searchResult = restaurantsList.filter((res) =>
      res.info.name.toLowerCase().includes(searchText)
    );
    setFilteredRes(searchResult);
  };

  if (ONLINE_STATUS === false)
    return <h1>You're offline!! . Please check your internet connection</h1>;
  //TODO: Post call for updated swiggy API to browse more restaraunts

  return (
    <div>
      {restaurantsList?.length === 0 ? (
        <ShimmerUI />
      ) : (
        <div className="body">
          <div className="search-field">
            <input
              type="search"
              placeholder="Search"
              className="rating-btn"
              value={searchText}
              onChange={handleSearch}
            ></input>
            <button className="rating-btn" onClick={handleRating}>
              Rating 4+
            </button>
          </div>
          <div>
            <h3>{titleOfPlace}</h3>
          </div>
          <div className="res-container">
            {filteredRes?.map((restaraunt) => (
              <Link
                to={`restaurant/${restaraunt.info.id}`}
                key={restaraunt.info.id}
                className="link-btn"
              >
                <RestrauntCard resData={restaraunt} />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Body;
