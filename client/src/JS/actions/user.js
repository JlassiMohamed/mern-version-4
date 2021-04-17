import {
  CURRENT_USER,
  FAIL_USER,
  LOAD_USER,
  LOGIN_USER,
  REGISTER_USER,
  LOGOUT_USER,
  VIDE_ERRORS,
} from "../actionTypes/user";

import axios from "axios";
import { toggleOrder, toggleSeller } from "./edit";

export const register = (newUser, history) => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    const result = await axios.post("/api/user/signup", newUser);
    dispatch({ type: REGISTER_USER, payload: result.data }); //payload={msg , token , user}
    result.data.user.role === "user"
      ? history.push("/")
      : history.push("/addrestaurant");
  } catch (error) {
    // error.response.data.errors.map((el) => alert(el.msg));
    dispatch({ type: FAIL_USER, payload: error.response.data.errors });
  }
};

export const login = (user, history) => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    const result = await axios.post("/api/user/signin", user);
    dispatch({ type: LOGIN_USER, payload: result.data }); //msg , token , user
    if (result.data.user.role === "user") {
      history.push("/");
      dispatch(toggleOrder());
    } else {
      history.push(`/seller/dashboard/${result.data.user.restaurant._id}`);
      dispatch(toggleSeller());
    }
  } catch (error) {
    // error.response.data.errors.map((el) =>
    //   setTimeout(function () {
    //     alert(el.msg);
    //   }, 3000)
    // );
    dispatch({ type: FAIL_USER, payload: error.response.data.errors });
  }
};

export const currentUser = () => async (dispatch) => {
  try {
    const config = {
      headers: { Authorization: localStorage.getItem("token") },
    };
    const result = await axios.get("/api/user/current", config);
    dispatch({ type: CURRENT_USER, payload: result.data });
    result.data.role === "seller"
      ? dispatch(toggleSeller())
      : dispatch(toggleOrder());
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response.data });
  }
};

export const logout = () => {
  return {
    type: LOGOUT_USER,
  };
};

export const videErrors = () => {
  return {
    type: VIDE_ERRORS,
  };
};
