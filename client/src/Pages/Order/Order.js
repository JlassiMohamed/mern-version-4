import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSeller } from "../../JS/actions/seller";
import Items from "../../Components/Items/Items";
import { Link } from "react-router-dom";

const Order = ({ match }) => {
  const { sellerId } = match.params;
  const seller = useSelector((state) => state.sellerReducer.seller);
  const {
    items,
    name,
    imageUrl,
    email,
    phone,
    address,
    tags,
    minOrderAmount,
  } = seller;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSeller(sellerId));
  }, [dispatch, sellerId, items]); // [dispatch, sellerId, items]
  const edit = useSelector((state) => state.editReducer.edit);
  return (
    <div>
      <hr />
      <img src={imageUrl} alt="resto" style={{ width: "400px" }} />
      <p>{name}</p>
      <p>{email}</p>
      <p>{phone}</p>
      <p>{address}</p>
      <p>{tags}</p>
      <p>{minOrderAmount} DT</p>
      {edit ? (
        <button>
          <Link to="/setting">setting</Link>
        </button>
      ) : null}
      <hr />
      <Items itemList={items} />
    </div>
  );
};

export default Order;
