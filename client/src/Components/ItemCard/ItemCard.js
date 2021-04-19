import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../JS/actions/cart";
import { deleteItem } from "../../JS/actions/item";
import AddItem from "../AddItem/AddItem";
import { Card, Button } from "react-bootstrap";
import "./ItemCard.css";
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
      <Card className="itemCard" style={{ width: "30rem", height: "20rem" }}>
        <Card.Img
          className="itemImg"
          src={imageUrl}
          alt="item"
          style={{ width: "100px" }}
        />
        <Card.Body>
          <Card.Title className="itemTitle">{title}</Card.Title>
          <Card.Text className="items">
            {description}
            {tags}
            <br />
            <p>{price} DT</p>
          </Card.Text>

          {!edit ? (
            <Button onClick={addToCartHandler}>Add To Cart</Button>
          ) : (
            <div>
              <AddItem id={_id} />
              <Button onClick={() => dispatch(deleteItem(item._id))}>
                Delete
              </Button>
            </div>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemCard;
// edit
