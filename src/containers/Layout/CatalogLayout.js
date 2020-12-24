import React, { useState } from "react";

import { Container, Row } from "reactstrap";
import { Dropdown, DropdownButton, Form, Col, Spinner } from "react-bootstrap";
import RangeSlider from "react-bootstrap-range-slider";
import CardsLayout from "./CardsLayout";
import getItems from "../../webapi/CarApiUtil";
import EPaceImage from "../../assets/items/e-pace.jpg";
import FPaceImage from "../../assets/items/f-pace.jpg";
import XJImage from "../../assets/items/xj.jpg";
import XFImage from "../../assets/items/xf.jpg";

// var items = [
//   {
//     img: EPaceImage,
//     title: "Jaguar E-Pace 2020",
//     year: "2020",
//     price: 80000,
//     key: 1,
//   },

//   {
//     img: FPaceImage,
//     title: "Jaguar F-Pace 2020 SUV ",
//     year: "2020",
//     price: 10000,
//     key: 2,
//   },

//   {
//     img: XJImage,
//     title: "Jaguar XJ Coupe 2016",
//     year: "2016",
//     price: 45646,
//     key: 3,
//   },

//   {
//     img: XFImage,
//     title: "Jaguar XF Coupe 2012",
//     year: "2012",
//     price: 87898,
//     key: 4,
//   },
// ];

const CatalogLayout = () => {
  const [loading, setLoading] = useState(false);
  const items = getItems(setLoading);
  const [cars, setCarsList] = useState(items);
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const results = !searchTerm
    ? cars
    : cars.filter((car) =>
        car.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())
      );

  function sortByYearAsc() {
    const sortedCars = [...cars].sort((a, b) => a.year - b.year);
    setCarsList(sortedCars);
  }

  function sortByYearDesc() {
    const sortedCars = [...cars].sort((a, b) => b.year - a.year);
    setCarsList(sortedCars);
  }

  function sortByPriceAsc() {
    const sortedCars = [...cars].sort((a, b) => a.price - b.price);
    setCarsList(sortedCars);
  }

  function sortByPriceDesc() {
    const sortedCars = [...cars].sort((a, b) => b.price - a.price);
    setCarsList(sortedCars);
  }

  if (!loading) {
    return (
      <div className="pt-5 mt-5 mb-5 pb-5 d-flex justify-content-center">
        <Spinner
          animation="border"
          role="status"
          className="justify-content-center"
        >
          <span className="sr-only justify-content-center align-self-center">
            Loading...
          </span>
        </Spinner>
      </div>
    );
  } else
    return (
      <div className="pt-5">
        <Container>
          <Row className="pt-5 justify-content-between">
            <Form>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Control
                    placeholder="Search"
                    value={searchTerm}
                    onChange={handleChange}
                    onKeyPress={(e) => {
                      e.key === "Enter" && e.preventDefault();
                    }}
                  />
                </Form.Group>
              </Form.Row>
            </Form>
            <DropdownButton variant="secondary" title="Sort By">
              <Dropdown.Item eventKey="1" active>
                Popularity
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="2" onClick={sortByYearAsc}>
                Year Asc
              </Dropdown.Item>
              <Dropdown.Item eventKey="3" onClick={sortByYearDesc}>
                Year Desc
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="4" onClick={sortByPriceAsc}>
                Price Asc
              </Dropdown.Item>
              <Dropdown.Item eventKey="5" onClick={sortByPriceDesc}>
                Price Desc
              </Dropdown.Item>
            </DropdownButton>
          </Row>
        </Container>
        <Container
          className="pt-5 d-flex flex-wrap justify-content-around center"
          style={{
            maxWidth: "1300px",
          }}
        >
          <CardsLayout items={results} />
        </Container>
      </div>
    );
};

export default CatalogLayout;
