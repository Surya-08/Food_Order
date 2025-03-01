import React, { useContext } from "react";
import UserContext from "../utils/userContext";

const Grocery = () => {
  const { loggedInUser } = useContext(UserContext);
  return <div>Tasty Food grocery store.{loggedInUser}</div>;
};

export default Grocery;
