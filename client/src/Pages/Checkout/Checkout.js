import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./Checkout.css";

const Checkout = () => {
  const user = useSelector((state) => state.userReducer.user);
  console.log(user);
  const cartItems = useSelector((state) => state.cartReducer.cartItems);
  const [placed, setPlaced] = useState(true);
  const handleOrder = () => {
    if (placed) {
      setPlaced(false);
    }
  };
  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };
  const getCartSubTotal = () => {
    return cartItems
      .reduce((price, item) => price + item.price * item.qty, 0)
      .toFixed(2);
  };

  return (
    <div className="orderscreen">
      <div className="orderscreen__right">
        <div className="orderscreen__right">
          {cartItems.map((item) => (
            <div key={item._id}>
              <p>{item.title}</p>
            </div>
          ))}
          <p>Subtotal of {getCartCount()} items</p>
          <p>DT {getCartSubTotal()}</p>
        </div>
        <div>
          {placed ? <p>✅ order accepted</p> : <p>❌ order cancelled</p>}
          {placed ? <button onClick={handleOrder}>Cancel</button> : null}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
