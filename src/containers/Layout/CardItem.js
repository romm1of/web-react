import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardItemBody = ({ img, title, year, price }) => {
  return (
    <Card style={{ width: "18rem" }} className="mb-5">
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          Dolorem magnam est est quisquam numquam. Non quiquia consectetur sed
          magnam quiquia sit magnam.
        </Card.Text>
        <hr />
        <Card.Text>OTR Price From £{numberWithCommas(price)}</Card.Text>
        <Link
          exact
          to={{
            pathname: "/car",
            state: { img, title, year, price },
          }}
        >
          <Button variant="danger">Learn More</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default CardItemBody;
