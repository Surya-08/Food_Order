import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CDN_URL, NON_VEG_ICON, VEG_ICON } from "../utils/common";
import { addItem, removeItem } from "../utils/reducer";

const Cart = () => {
  const selectedItems = useSelector((store) => store.cart.cartItems);
  console.log(selectedItems);

  const dispatch = useDispatch();
  const addedToCart = (item) => {
    dispatch(addItem(item));
  };
  const removeCartItem = (item) => {
    dispatch(removeItem(item));
  };
  return (
    <div className="mx-auto text-center text-xl ">
      CART
      <div className="w-6/12 m-auto">
        {selectedItems.map((item) => {
          return (
            <div
              className="flex justify-between p-1 border-b-2"
              key={item.card.info.id}
            >
              <div className="w-9/12 text-left">
                <div>
                  <span>
                    <img
                      src={
                        item.card.info?.itemAttribute?.vegClassifier ===
                        "NONVEG"
                          ? NON_VEG_ICON
                          : VEG_ICON
                      }
                      alt="veg classification"
                      className="h-3 overflow-clip"
                    />
                  </span>
                  <span>
                    <p className="text-left font-semibold text-sm text-wrap">
                      {item.card.info.name} - ₹{" "}
                      {item.card.info.defaultPrice / 100 ||
                        item.card.info?.price / 100}{" "}
                    </p>
                  </span>
                </div>
                <p className="font-light font-serif text-sm">
                  {item.card.info.description}
                </p>
              </div>
              <div className="w-3/12 relative">
                <button className="border-0 outline-none">
                  <img
                    src={
                      item.card.info?.imageId &&
                      CDN_URL + item.card.info?.imageId
                    }
                    className="w-full rounded-xl bg-blend-overlay object-cover h-36"
                  />

                  <div className="absolute inset-x-0 bottom-0 text-emerald-700 w-28 outline-none bg-slate-50 rounded-md p-1 mx-1 drop-shadow-lg flex justify-between">
                    <div className="mx-5" onClick={() => removeCartItem(item)}>
                      -
                    </div>
                    <div>{item.length}</div>
                    <div className="mx-5" onClick={() => addedToCart(item)}>
                      +
                    </div>
                  </div>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
