import { useState } from "react";

const AddQuantityButton = ({ addedToCart, showAddBtn, item }) => {
  return (
    <div className="">
      {showAddBtn ? (
        <div className="absolute inset-x-0 bottom-0">
          <button
            className="text-emerald-700 w-28 outline-none bg-slate-50 rounded-md p-1 mx-1 drop-shadow-lg"
            onClick={() => addedToCart(item)}
          >
            Add+
          </button>
        </div>
      ) : (
        item && (
          <div className="absolute inset-x-0 bottom-0 flex">
            <button
              className="text-emerald-700 w-28 outline-none bg-slate-50 rounded-md p-1 mx-1 drop-shadow-lg"
              data-testid="dec-button"
              id="inc-dec-btn"
              // onClick={() => handleDecrementCount(item.id)}
            >
              <b>-</b>
            </button>
            {/* <input
              type="text"
              name="name"
              //   value={item.quantityCount}
              id="cart-item-input"
            /> */}
            <button
              className="text-emerald-700 w-28 outline-none bg-slate-50 rounded-md p-1 mx-1 drop-shadow-lg"
              data-testid="inc-button"
              id="inc-dec-btn"
              onClick={() => addedToCart(item)}
            >
              <b>+</b>
            </button>
          </div>
        )
      )}
    </div>
  );
};
export default AddQuantityButton;
