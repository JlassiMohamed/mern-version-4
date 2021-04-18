import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../../Components/CartItem/CartItem";
import { addToCart, removeFromCart } from "../../JS/actions/cart";
import "./Cart.css";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartReducer.cartItems);
  const dispatch = useDispatch();

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getCartSubTotal = () => {
    return cartItems
      .reduce((price, item) => price + item.price * item.qty, 0)
      .toFixed(2);
  };
  const [address, setAddress] = useState({});
  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };
  const [checkout, setCheckout] = useState(false);
  const handleChechout = () => {
    if (checkout === false && cartItems.length !== 0) {
      setCheckout(true);
    }
  };

  return (
    <>
      <div className="cartscreen">
        <div className="cartscreen__left">
          {cartItems.length === 0 ? (
            <div>
              Your Cart Is Empty <Link to="/">Go Back</Link>
            </div>
          ) : checkout ? (
            <form>
              <label>Appartement Number</label>
              <input
                name="appartement"
                value={address.appartement}
                onChange={handleChange}
                placeholder="enter your name"
                style={{ width: "200px" }}
              />
              <label>Street</label>
              <input
                name="street"
                value={address.street}
                onChange={handleChange}
                placeholder="enter your contact phone"
                style={{ width: "200px" }}
              />
              <label>Locality</label>
              <input
                name="locality"
                value={address.locality}
                onChange={handleChange}
                placeholder="register your email"
                style={{ width: "200px" }}
              />
              <label>ZipCode</label>
              <input
                name="zipCode"
                value={address.zipCode}
                onChange={handleChange}
                placeholder="enter the address of your restaurant"
                style={{ width: "200px" }}
              />
            </form>
          ) : (
            cartItems.map((item) => (
              <CartItem
                key={item._id}
                item={item}
                qtyChangeHandler={qtyChangeHandler}
                removeHandler={removeFromCartHandler}
              />
            ))
          )}
        </div>
        <div className="cartscreen__right">
          <div className="cartscreen__info">
            <p>Subtotal ({getCartCount()}) items</p>
            <p>${getCartSubTotal()}</p>
          </div>
          <div>
            <button onClick={handleChechout}>
              {!checkout ? (
                "Proceed To Checkout"
              ) : (
                <Link to="/checkout">Place Order</Link>
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
