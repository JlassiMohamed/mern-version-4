import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postSeller, editSeller } from "../../JS/actions/seller";
import { Button } from "react-bootstrap";
import "./AddRestaurant.css";
const AddRestaurant = ({ history }) => {
  const [seller, setSeller] = useState({});
  const sellerToEdit = useSelector((state) => state.sellerReducer.seller);
  const edit = useSelector((state) => state.editReducer.edit);
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
    <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
      <div className="card card0 border-0">
        <div className="row d-flex">
          <div className="col-lg-6">
            <img
              src="https://raw.githubusercontent.com/luisSuela/Stranger-Code/master/foodd.jpg"
              className="image"
              alt="signup img"
            />
          </div>
          <div className="col-lg-6">
            <div className="card2 card border-0 px-4 py-5">
              <div className="row mb-4 px-3"></div>
              <label className="mb-1">
                <h6 className="mb-0 text-sm">Restaurant Name </h6>
              </label>
              <input
                name="name"
                value={seller.name}
                onChange={handleChange}
                placeholder="enter your name"
                style={{ width: "400px" }}
              />
            </div>
            <div className="row px-3">
              <label className="mb-1">
                <h6 className="mb-0 text-sm">Restaurant Email</h6>
              </label>
              <input
                name="email"
                value={seller.email}
                onChange={handleChange}
                placeholder="register your email"
                style={{ width: "400px" }}
              />
            </div>
            <div className="row px-3">
              <label className="mb-1">
                <h6 className="mb-0 text-sm">Restaurant Phone</h6>
              </label>
              <input
                name="phone"
                value={seller.phone}
                onChange={handleChange}
                placeholder="enter your contact phone"
                style={{ width: "400px" }}
              />
            </div>
            <div className="row px-3">
              <label className="mb-1">
                <h6 className="mb-0 text-sm">Restaurant Address</h6>
              </label>
              <input
                name="address"
                value={seller.address}
                onChange={handleChange}
                placeholder="enter the address of your restaurant"
                style={{ width: "400px" }}
              />
            </div>
            <div className="row px-3">
              <label className="mb-1">
                <h6 className="mb-0 text-sm">Restaurant Image</h6>
              </label>
              <input
                name="imageUrl"
                value={seller.imageUrl}
                onChange={handleChange}
                placeholder="type the image Url"
                style={{ width: "400px" }}
              />
            </div>
            <div className="row px-3">
              <label className="mb-1">
                <h6 className="mb-0 text-sm">Restaurant Tags</h6>
              </label>
              <input
                name="tags"
                value={seller.tags}
                onChange={handleChange}
                placeholder="discribe your restaurant"
                style={{ width: "400px" }}
              />
            </div>
            <div className="row px-3">
              <label className="mb-1">
                <h6 className="mb-0 text-sm">Restaurant Min Order Amount</h6>
              </label>
              <input
                name="minOrderAmount"
                value={seller.minOrderAmount}
                onChange={handleChange}
                placeholder="type the min Order Amount"
                style={{ width: "400px" }}
              />
            </div>
            <Button onClick={handleData} style={{ margin: "20px" }}>
              {edit ? "Save" : "Add"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddRestaurant;
