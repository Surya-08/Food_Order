import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./Body";
import Header from "./Header";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

export default AppLayout;
