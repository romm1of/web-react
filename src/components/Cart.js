import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../redux/actions";
import { Container } from "react-bootstrap";
import { Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import BasketItem from "../containers/Layout/BasketItem";

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);

  const removeItem = (index) => {
    dispatch(actionCreators.removeItem(index));
  };

  return items.length > 0 ? (
    <div className="pt-5 pb-5">
      <Container
        className="mt-5"
        style={{
          maxWidth: "1300px",
        }}
      >
        <div className="d-flex flex-wrap justify-content-around center">
          {items.map((item) => (
            <BasketItem
              img={item.value.img}
              title={item.value.title}
              price={item.value.price}
            />
          ))}
        </div>
        <Row className="justify-content-end mb-3">
          <h5>Total amount: £{totalPrice(items)}</h5>
        </Row>
        <Row className="justify-content-between">
          <Link exact to="/browse">
            <Button variant="outline-dark">Back to Browse</Button>
          </Link>
          <Link exact to="cart/checkout">
            <Button variant="danger">Checkout</Button>
          </Link>
        </Row>
      </Container>
    </div>
  ) : (
    <Container className="pt-5 pb-5">
      <h6>Hello</h6>
    </Container>
  );
};

function totalPrice(items) {
  return items.map((it) => it.value.price).reduce((a, b) => a + b);
}

export default Cart;
