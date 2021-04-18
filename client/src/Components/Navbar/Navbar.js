import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../JS/actions/user";
import "./Navbar.css";
const Navbar = () => {
  const user = useSelector((state) => state.userReducer.user);
  const seller = useSelector((state) => state.sellerReducer.seller);
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const edit = useSelector((state) => state.editReducer.edit);
  const dispatch = useDispatch();
  return (
    <header>
      <Link to="/">
        <h2>Food Delivery App</h2>
      </Link>
      {isAuth && edit ? (
        <div className="welcome">
          {seller.name}
          <Link to="/checkout">
            <a className="btn-area" href="/">
              Orders
            </a>
          </Link>
          <Link to={`/seller/dashboard/${user.restaurant}`}>
            <a className="btn-area" href="/">
              Dashboard
            </a>
          </Link>
          <Link to="/signin" onClick={() => dispatch(logout())}>
            <a href="/" className="btn-area">
              Logout
            </a>
          </Link>
        </div>
      ) : isAuth && !edit ? (
        <div className="welcome">
          hello, {user.name}
          <Link to="/checkout">
            <a className="btn-area" href="/">
              Orders
            </a>
          </Link>
          <Link to="/cart">
            <a className="btn-area" href="/">
              Cart
            </a>
          </Link>
          <Link to="/signin" onClick={() => dispatch(logout())}>
            <a href="/" className="btn-area">
              Logout
            </a>
          </Link>
        </div>
      ) : (
        <div className="btns">
          <Link to="/signup">
            <a href="/" className="btn-area">
              SignUp
            </a>
          </Link>

          <Link to="/signin">
            <a href="/" className="btn-area">
              SignIn
            </a>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
