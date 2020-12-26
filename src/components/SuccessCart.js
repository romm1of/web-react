import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { TiTick } from "react-icons/ti";
import { Link } from "react-router-dom";
import SuccessSVG from "../assets/success.svg";

const SuccessCart = () => {
  return (
    <div>
      <Container className="pt-5 mt-5 pb-5 text-center">
        <Row className="justify-content-center">
          {/* <TiTick color="green" size="10vw" /> */}
          <Container className="mb-3"
            style={{
              maxWidth: "200px",
              maxHeight: "250px",
            }}
          >
            <img src={SuccessSVG} />
          </Container>
        </Row>
        <h3
          style={{
            fontWeight: "bold",
          }}
        >
          Success!
        </h3>
        <p>
          Your order was sent to processing!
          <br />
          Check your email box for further information.
        </p>
        <Link exact to="/browse">
          <Button variant="outline-dark">Go back to Browse</Button>
        </Link>
      </Container>
    </div>
  );
};

export default SuccessCart;
