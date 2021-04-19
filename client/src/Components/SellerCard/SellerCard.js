import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Card, Button, ListGroupItem, ListGroup } from "react-bootstrap";
const SellerCard = ({ seller }) => {
  const {
    _id,
    name,
    email,
    phone,
    address,
    tags,
    minOrderAmount,
    imageUrl,
  } = seller;
  const edit = useSelector((state) => state.editReducer.edit);
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={imageUrl} alt="resto" />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{email}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>{phone}</ListGroupItem>
          <ListGroupItem>{address}</ListGroupItem>
          <ListGroupItem>{tags}</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Text>{minOrderAmount} DT</Card.Text>

          {!edit ? (
            <Button>
              <Link to={`order/${_id}`}>Order Online</Link>
            </Button>
          ) : null}
        </Card.Body>
      </Card>
    </div>
  );
};

export default SellerCard;
