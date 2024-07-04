import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Body from "./Body";
import Header from "./Header";
import About from "./About";
import ErrorElement from "./ErrorElement";
import RestaurantMenu from "./RestaurantMenu";
import Cart from "./Cart";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/cart", element: <Cart /> },

      { path: "/restaurant/:resId", element: <RestaurantMenu /> },
    ],
    errorElement: <ErrorElement />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

export default AppLayout;
