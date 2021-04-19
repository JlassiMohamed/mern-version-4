import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSellers } from "../../JS/actions/seller";
import SellerCard from "../../Components/SellerCard/SellerCard";
import { currentUser } from "../../JS/actions/user";
import Footer from "../../Components/Footer/Footer";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import "./Landpage.css";

const useStyles = makeStyles((theme) => ({
  presentation: {
    display: "flex",
    width: "90%",
    margin: "auto",
    minHeight: "80vh",
    alignItems: "center",
    // eslint-disable-next-line
    ["@media (max-width:1024px)"]: {
      flexDirection: "column",
    },
  },
  introduction: {
    flex: 1,
    paddingLeft: 60,
    height: "340px",
    position: "relative",
  },
  safeFood: {
    fontSize: 50,
    fontWeight: 400,
  },
  delivery: {
    color: "#d2691e",
    fontSize: "300%",
    fontWeight: "bold",
    marginTop: -30,
    marginBottom: 20,
    marginLeft: "1%",
  },
  paragraph: {
    width: 400,
    fontSize: 18,
    marginRight: "100%",
    color: "#881515",
  },
  cover: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    height: "72vh",
  },
  coverImg: {
    height: "500px",
    width: "700%",
    marginLeft: "170%",
    marginTop: "-10%",
    position: "relative",
  },
  ctaOrder: {
    fontSize: 18,
    backgroundColor: "#380303",
    color: "#d2691e",
    marginTop: 30,
    marginLeft: "5%",
  },
  input: {
    marginTop: "45%",
    left: "26%",
    zIndex: 999,
    width: 760,
    height: "15%",
  },
  /*header: {
    position: "fixed",
  },*/
}));

const Landpage = (history) => {
  const [address, setAdress] = useState("");
  const load = useSelector((state) => state.sellerReducer.load);
  const sellerList = useSelector((state) => state.sellerReducer.sellerList);
  // console.log(sellerList);

  // const subscriber = useSelector((state) => state.userReducer.user);
  // console.log(subscriber);
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    if (address) {
      dispatch(getSellers());
    }
  }, [dispatch, address]);

  return (
    <header className={classes.header}>
      <section className={classes.presentation}>
        <div className={classes.introduction}>
          <Typography className={classes.safeFood} noWrap></Typography>
          <Typography className={classes.delivery} noWrap>
            DELIFOOD
          </Typography>
          <Typography variant="body2" className={classes.paragraph}>
            Welcome In Our Delivery Food App We Want To Make You Life Easier So
            You Can Deliver From Home Make An Account in Our APP And You Can See
            The Menu Of The Restaurents Available In Your Localisation And You
            Can Order Whatever You Want
          </Typography>
          <Button variant="outlined" className={classes.ctaOrder}>
            ORDER NOW
          </Button>
        </div>
        <div className={classes.cover}>
          <img
            src="https://appinventiv.com/wp-content/uploads/sites/1/2016/06/Restaurant-App-Development-Benefits-Of-Online-Food-Ordering-Services.png"
            alt="safe-delivery"
            className={classes.coverImg}
          />
        </div>
      </section>

      <div className={classes.input}>
        <span>Enter your address and select the nearby restaurant</span>
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
    </header>
  );
};

export default Landpage;
