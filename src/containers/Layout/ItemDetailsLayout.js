import React, { useState } from "react";
import { Container, Row, Col, Media, CardImg, Card } from "reactstrap";
import {
  Image,
  Button,
  DropdownButton,
  Dropdown,
  Toast,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { actionCreators } from "../../redux/actions";
import { useDispatch } from "react-redux";

const ItemDetailsLayout = (props) => {
  const dispatch = useDispatch();

  const [showAdd2CartToast, setAdd2CartToast] = useState(false);

  const toggleShowB = () => setAdd2CartToast(!showAdd2CartToast);

  const handleAddToCart = (item) => {
    dispatch(actionCreators.addToList(item));
    toggleShowB();
  };

  const { title, price, img, year, id } = props.location.state;
  return (
    <div className="pt-5 mb-5">
      <Row className="justify-content-end mr-5 mt-5">
        <Toast onClose={toggleShowB} show={showAdd2CartToast}>
          <Toast.Header ></Toast.Header>
          <Toast.Body>Added to Cart!</Toast.Body>
        </Toast>
      </Row>
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
                <Button
                  variant="danger"
                  onClick={() =>
                    handleAddToCart({ title, price, img, year, id })
                  }
                >
                  Add To Cart
                </Button>
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
