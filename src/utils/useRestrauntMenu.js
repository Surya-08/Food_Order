import { useEffect, useState } from "react";
import { RESTAURANT_MENU_URL } from "./common";

const useRestrauntMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const fetchRestaurantMenu = async () => {
    const menuDetails = await fetch(`${RESTAURANT_MENU_URL}${resId}`);
    const menuData = await menuDetails.json();
    setResInfo(menuData?.data);
  };
  useEffect(() => {
    fetchRestaurantMenu();
  }, []);
  return resInfo;
};
export default useRestrauntMenu;
