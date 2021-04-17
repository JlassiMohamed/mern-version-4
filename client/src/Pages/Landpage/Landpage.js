import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSellers } from "../../JS/actions/seller";
import SellerCard from "../../Components/SellerCard/SellerCard";

const Landpage = (history) => {
  const [address, setAdress] = useState("");
  // const load = useSelector((state) => state.sellerReducer.load);
  const sellerList = useSelector((state) => state.sellerReducer.sellerList);

  const dispatch = useDispatch();
  useEffect(() => {
    if (address) {
      dispatch(getSellers());
    }
  }, [dispatch, address]);

  return (
    <div>
      <br />
      <h6>
        Enter your address to show the list of the nearby restaurant from you
      </h6>
      <input
        value={address}
        onChange={(e) => setAdress(e.target.value)}
        placeholder="enter your adress"
        style={{ width: "400px" }}
      />
      {address ? (
        <div>
          {sellerList
            .filter((el) =>
              el.address.toLowerCase().includes(address.toLowerCase())
            )
            .map((el) => (
              <SellerCard seller={el} key={el._id} />
            ))}
        </div>
      ) : null}
    </div>
  );
};

export default Landpage;
