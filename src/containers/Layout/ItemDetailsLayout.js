import React from "react";
import { Container, Row, Col, Media, CardImg, Card } from "reactstrap";
import { Image, Button, DropdownButton, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const ItemDetailsLayout = (props) => {
  const { title, price, img, year } = props.location.state;
  return (
    <div className="pt-5 mb-5">
      <Container className="mt-5 pt-5">
        <Row className=" align-content-around mb-5">
          <Container style={{ maxHeight: "500px", maxWidth: "450px" }}>
            <Image src={img} fluid rounded />
          </Container>
          <Col>
            <h3>{title}</h3>
            <p>
              Porro labore quisquam adipisci porro dolor numquam est. Labore
              dolorem labore aliquam neque. Ut quiquia sit dolorem modi eius
              quiquia. Quiquia ipsum consectetur sed dolorem ut. Consectetur
              ipsum eius eius sit eius dolorem.
            </p>
            <hr />
            <Row className="justify-content-between mb-3">
              <h5 className="ml-3">Price: {numberWithCommas(price)}£</h5>
              <DropdownButton
                id="dropdown-basic-button"
                title="Available colours"
                variant="secondary"
              >
                <Dropdown.Item href="#">Silver</Dropdown.Item>
                <Dropdown.Item href="#">Dark</Dropdown.Item>
                <Dropdown.Item href="#">Bright red</Dropdown.Item>
              </DropdownButton>
            </Row>
            <Row className="justify-content-end">
              <Row className="align-self-around">
                <Link exact to="/browse">
                  <Button variant="outline-dark" className="mr-1">
                    Go Back
                  </Button>
                </Link>
                <Button variant="danger">Add To Cart</Button>
              </Row>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default ItemDetailsLayout;