import React, { PureComponent } from "react";
import {
  UncontrolledCarousel,
  Col,
  Container,
  Jumbotron,
  Button,
} from "reactstrap";
import Image from "../assets/img/wall04.jpg";
import HomeLayout from "../containers/Layout/HomeLayout";

class Home extends React.Component {
  render() {
    return <HomeLayout />;
  }
}

export default Home;
