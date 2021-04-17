import React from "react";
import { useSelector } from "react-redux";
import AddItem from "../AddItem/AddItem";
import ItemCard from "../ItemCard/ItemCard";

const Items = ({ itemList }) => {
  const edit = useSelector((state) => state.editReducer.edit);
  // const load = useSelector((state) => state.itemReducer.load);

  return (
    <div>
      <h4>List Of Items:</h4>
      {itemList
        ? itemList.map((el) => <ItemCard item={el} key={el._id} />)
        : null}
      {edit ? <AddItem /> : null}
    </div>
  );
};

export default Items;
// add
