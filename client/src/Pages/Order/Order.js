import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSeller } from "../../JS/actions/seller";
import Items from "../../Components/Items/Items";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Button } from "react-bootstrap";
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
    fontSize: "300%",
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
    height: "300px",
    width: "300%",
    marginLeft: "7%",
    marginTop: "-5%",
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
    marginTop: "40%",
    left: "26%",
    zIndex: 999,
    width: 760,
    height: "15%",
  },
}));
const Order = ({ match, history }) => {
  const classes = useStyles();
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
      <header className={classes.header}>
        <section className={classes.presentation}>
          <div className={classes.introduction}>
            <Typography className={classes.safeFood} noWrap></Typography>
            <Card border="danger" style={{ width: "25rem" }}>
              <h1 className={classes.paragraph} noWrap>
                {name}
              </h1>
              <Card.Body>
                <Card.Title className={classes.paragraph}>{email}</Card.Title>
                <Card.Title className={classes.paragraph}>{phone}</Card.Title>
                <Card.Text className={classes.paragraph}>{address}</Card.Text>
                <Card.Title className={classes.paragraph}>{tags}</Card.Title>
                <Card.Title className={classes.paragraph}>
                  {minOrderAmount} DT
                </Card.Title>
                <button
                  style={{
                    color: "white",
                    backgroundColor: "Highlight",
                    marginTop: "2%",
                  }}
                  onClick={() => history.goBack()}
                >
                  Go Back
                </button>
                {edit ? (
                  <Button>
                    <Link to="/setting">setting</Link>
                  </Button>
                ) : null}
              </Card.Body>
            </Card>
          </div>
          <div className={classes.cover}>
            <Card.Img
              src={imageUrl}
              alt="safe-delivery"
              className={classes.coverImg}
            />
            {edit ? (
              <Button>
                <Link to="/setting">setting</Link>
              </Button>
            ) : null}
          </div>
        </section>
      </header>
      <hr />
      <Items itemList={items} />
    </div>
  );
};

export default Order;
