import React, { useState } from "react";
import { Card, Button, Row, Container, Figure } from "react-bootstrap";

const BasketItem = ({ img, title, price }) => {
  return (
    <Container className="mb-3">
      <Row className="border rounded d-flex flex-row justify-content-between">
        <Figure.Image width={171} height={180} src={img} style= {{
            margin: "0"
        }} />
        <h5
          className="align-self-center"
          style={{
            fontWeight: "bold",
          }}
        >
          {title}
        </h5>

        <h5 className="align-self-center mr-3">£{price}</h5>
      </Row>
    </Container>
  );
};

export default BasketItem;
