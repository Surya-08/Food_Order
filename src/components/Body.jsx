import React, { useEffect, useState } from "react";
import { SWIGGY_URL } from "../utils/common";
import RestrauntCard from "./RestrauntCard";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";

const Body = () => {
  const [restaurantsList, setRestaurantsList] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [titleOfPlace, setTitleOfPlace] = useState("");

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

  const fetchResData = async () => {
    const resDetails = await fetch(`${SWIGGY_URL}`);
    const jsonData = await resDetails.json();
    setRestaurantsList(
      jsonData.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRes(
      jsonData.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setTitleOfPlace(jsonData.data?.cards[1]?.card?.card?.header?.title);
  };
  useEffect(() => {
    fetchResData();
  }, []);

  //TODO: Post call for updated swiggy API to browse more restaraunts

  return (
    <div>
      {restaurantsList.length === 0 ? (
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
