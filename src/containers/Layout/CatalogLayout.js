import React from "react";

import { Container, Row } from "reactstrap";
import { Button, Dropdown, DropdownButton } from "react-bootstrap";
import CardsLayout from "./CardsLayout";
import EPaceImage from "../../assets/items/e-pace.jpg";
import FPaceImage from "../../assets/items/f-pace.jpg";
import XJImage from "../../assets/items/xj.jpg";
import XFImage from "../../assets/items/xf.jpg";

const items = [
  {
    img: EPaceImage,
    title: "Jaguar E-Pace 2020",
    year: "2020",
    price: 80000,
  },

  {
    img: FPaceImage,
    title: "Jaguar F-Pace 2020 SUV ",
    year: "2020",
    price: 10000,
  },

  {
    img: XJImage,
    title: "Jaguar XJ Coupe 2016",
    year: "2016",
    price: 45646,
  },

  {
    img: XFImage,
    title: "Jaguar XF Coupe 2012",
    year: "2012",
    price: 87898,
  },
];

const CatalogLayout = () => {
  return (
    <div className="pt-5">
      <Container>
        <Row className="pt-5 justify-content-end">
          <DropdownButton variant="secondary" title="Sort By">
            <Dropdown.Item eventKey="1" active>
              Popularity
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="2">Year Asc</Dropdown.Item>
            <Dropdown.Item eventKey="3">Year Desc</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="4">Price Asc</Dropdown.Item>
            <Dropdown.Item eventKey="5">Price Desc</Dropdown.Item>
          </DropdownButton>
        </Row>
      </Container>
      {/* <Button variant="dark">Apply</Button> */}
      <Container
        className="pt-5 d-flex flex-wrap justify-content-around center"
        style={{
          maxWidth: "1300px",
        }}
      >
        <CardsLayout items={items} />
      </Container>
    </div>
  );
};

export default CatalogLayout;
