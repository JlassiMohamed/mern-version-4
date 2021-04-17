import axios from "axios";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../actionTypes/cart";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/cart/${id}`);
  dispatch({
    type: ADD_TO_CART,
    payload: {
      _id: data._id,
      title: data.title,
      description: data.description,
      imageUrl: data.imageUrl,
      price: data.price,
      qty,
    },
  });
  localStorage.setItem("cart", JSON.stringify(getState().cartReducer.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: id,
  });
  localStorage.setItem("cart", JSON.stringify(getState().cartReducer.cartItems));
};
