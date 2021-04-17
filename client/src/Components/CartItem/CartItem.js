import React from "react";
import "./CartItem.css";

const CartItem = ({ item, qtyChangeHandler, removeHandler }) => {
  const { _id, title, imageUrl, price, qty } = item;
  return (
    <div className="cartitem">
      <div className="cartitem__image">
        <img src={imageUrl} alt={title} />
      </div>
      <p className="cartItem__name">{title}</p>
      <p className="cartitem__price">${price}</p>
      <select
        value={qty}
        onChange={(e) => qtyChangeHandler(_id, e.target.value)}
        className="cartItem__select"
      >
        {[...Array(10).keys()].map((x) => (
          <option key={x + 1} value={x + 1}>
            {x + 1}
          </option>
        ))}
      </select>
      <button
        className="cartItem__deleteBtn"
        onClick={() => removeHandler(_id)}
      >
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default CartItem;
