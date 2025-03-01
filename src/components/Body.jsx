import React, { useContext, useState } from "react";
import RestrauntCard, { withDiscountTag } from "./RestrauntCard";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestrauntsList from "../utils/useRestrauntsList";
import Carousel from "./Carousel";
import UserContext from "../utils/userContext";

const Body = () => {
  const { loggedInUser, setUserName } = useContext(UserContext);
  const [searchText, setSearchText] = useState("");
  const ONLINE_STATUS = useOnlineStatus();
  const { restaurantsList, titleOfPlace, filteredRes, setFilteredRes } =
    useRestrauntsList();
  const RestrauntWithDiscount = withDiscountTag(RestrauntCard);
  const handleRating = () => {
    const filteredData = restaurantsList.filter(
      (item) => item.info.avgRating >= 3.5
    );
    setFilteredRes(filteredData);
  };

  const handleSearch = (e) => {
    setSearchText(e.target.value);
    const searchResult = restaurantsList.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRes(searchResult);
  };

  if (ONLINE_STATUS === false)
    return <h1>You're offline!! . Please check your internet connection</h1>;
  //TODO: Post call for updated swiggy API to browse more restaraunts

  return (
    <div className="flex justify-center mx-9">
      {restaurantsList?.length === 0 ? (
        <ShimmerUI />
      ) : (
        <div>
          {/* <Carousel /> */}
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
            <label>UserName: </label>
            <input
              type="text"
              placeholder="UserName"
              className="rating-btn"
              value={loggedInUser}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div>
            <h3 className="m-1 font-bold">{titleOfPlace}</h3>
          </div>
          <div className="flex flex-wrap gap-5">
            {filteredRes?.map((restaraunt) => (
              <Link
                to={`restaurant/${restaraunt.info.id}`}
                key={restaraunt.info.id}
                className="link-btn"
              >
                {restaraunt.info?.aggregatedDiscountInfoV3 ? (
                  <RestrauntWithDiscount resData={restaraunt} />
                ) : (
                  <RestrauntCard resData={restaraunt} />
                )}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Body;
