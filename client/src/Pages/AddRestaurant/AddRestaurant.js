import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postSeller, editSeller } from "../../JS/actions/seller";

const AddRestaurant = ({ history }) => {
  const [seller, setSeller] = useState({});
  const sellerToEdit = useSelector(state => state.sellerReducer.seller)
  const edit = useSelector(state => state.editReducer.edit)
  useEffect(() => {
    !edit ? setSeller({}) : setSeller(sellerToEdit);
  }, [edit, sellerToEdit]);
  const handleChange = (e) => {
    setSeller({ ...seller, [e.target.name]: e.target.value });
  };
  const dispatch = useDispatch();
  const handleData = () => {
    edit
      ? dispatch(editSeller(sellerToEdit._id, seller, history))
      : dispatch(postSeller(seller, history));
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <label> Restaurant Name</label>
      <input
        name="name"
        value={seller.name}
        onChange={handleChange}
        placeholder="enter your name"
        style={{ width: "400px" }}
      />
      <label>Restaurant Email</label>
      <input
        name="email"
        value={seller.email}
        onChange={handleChange}
        placeholder="register your email"
        style={{ width: "400px" }}
      />
      <label>Restaurant Phone</label>
      <input
        name="phone"
        value={seller.phone}
        onChange={handleChange}
        placeholder="enter your contact phone"
        style={{ width: "400px" }}
      />
      <label>Restaurant address</label>
      <input
        name="address"
        value={seller.address}
        onChange={handleChange}
        placeholder="enter the address of your restaurant"
        style={{ width: "400px" }}
      />
      <label>image Url</label>
      <input
        name="imageUrl"
        value={seller.imageUrl}
        onChange={handleChange}
        placeholder="type the image Url"
        style={{ width: "400px" }}
      />
      <label>tags</label>
      <input
        name="tags"
        value={seller.tags}
        onChange={handleChange}
        placeholder="discribe your restaurant"
        style={{ width: "400px" }}
      />
      <label>min Order Amount</label>
      <input
        name="minOrderAmount"
        value={seller.minOrderAmount}
        onChange={handleChange}
        placeholder="type the min Order Amount"
        style={{ width: "400px" }}
      />
      <button onClick={handleData} style={{ margin: "20px" }}>
        {edit ? "Save" : "Add"}
      </button>
    </div>
  );
};

export default AddRestaurant;
