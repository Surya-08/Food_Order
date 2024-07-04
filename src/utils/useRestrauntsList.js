import { useEffect, useState } from "react";
import { SWIGGY_URL } from "./common";

const useRestrauntsList = () => {
  const [restaurantsList, setRestaurantsList] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [titleOfPlace, setTitleOfPlace] = useState("");
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
  return { restaurantsList, filteredRes, titleOfPlace, setFilteredRes };
};
export default useRestrauntsList;
