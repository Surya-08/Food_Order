import { useEffect, useState } from "react";
import { getAllRestaurantsUrl, getAllRestaurantsUrl_UPDATE } from "./common";

const useRestrauntsList = () => {
  const [restaurantsList, setRestaurantsList] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [titleOfPlace, setTitleOfPlace] = useState("");

  const fetchResData = async () => {
    const resDetails = await fetch(
      getAllRestaurantsUrl(`17.406498`, `78.47724389999999`)
    );
    const jsonData = await resDetails.json();
    setRestaurantsList(
      jsonData.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRes(
      jsonData.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setTitleOfPlace(jsonData.data?.cards[2]?.card?.card?.title);
  };

  useEffect(() => {
    fetchResData();
  }, []);
  return { restaurantsList, filteredRes, titleOfPlace, setFilteredRes };
};
export default useRestrauntsList;
