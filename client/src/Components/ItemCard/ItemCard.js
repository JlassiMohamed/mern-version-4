import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../JS/actions/cart";
import { deleteItem } from "../../JS/actions/item";
import AddItem from "../AddItem/AddItem";

const ItemCard = ({ item }) => {
  const { _id, imageUrl, title, description, tags, price } = item;
  const dispatch = useDispatch();
  const edit = useSelector((state) => state.editReducer.edit);
  
  const addToCartHandler = () => {
    let qty = 1;
    dispatch(addToCart(_id, qty));
    alert("item added to cart");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "40px",
        flexWrap: "wrap",
      }}
    >
      <img src={imageUrl} alt="item" style={{ width: "100px" }} />
      <p>{title}</p>
      <p>{description}</p>
      <p>{tags}</p>
      <p>{price} dt</p>
      {!edit ? (
        <button onClick={addToCartHandler}>Add To Cart</button>
      ) : (
        <div>
          <AddItem id={_id} />
          <button onClick={() => dispatch(deleteItem(item._id))}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default ItemCard;
// edit
