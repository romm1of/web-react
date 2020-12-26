import React from "react";
import { Container, Nav, NavItem, Row, NavbarText } from "reactstrap";
import Home from "../../components/Home";
import Catalog from "../../components/Catalog";
import Cart from "../../components/Cart";
import { BrowserRouter, Switch, Route, NavLink, Link } from "react-router-dom";
import NavigationBar from "./Navbar.styled";
import Logo from "../../assets/logo.png";
import ItemDetailsLayout from "../../containers/Layout/ItemDetailsLayout";
import Checkout from "../../components/Checkout";
import SuccessCart from "../../components/SuccessCart";

class Navbar extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Row className=" fixed-top" style={{ backgroundColor: "white" }}>
          <Container>
            <Row className=" justify-content-between mb-3">
              <Link exact to="/">
                <a href="/">
                  <img
                    className=" align-self-center mx-5"
                    src={Logo}
                    style={{
                      width: "75px",
                      height: "75px",
                    }}
                  />
                </a>
              </Link>
              <NavigationBar>
                <NavItem>
                  <NavLink
                    className=" nav-link"
                    exact
                    to="/"
                    activeClassName="selected"
                  >
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className=" nav-link"
                    exact
                    to="/browse"
                    activeClassName="selected"
                  >
                    Browse
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className=" nav-link"
                    exact
                    to="/cart"
                    activeClassName="selected"
                  >
                    Cart
                  </NavLink>
                </NavItem>
              </NavigationBar>
              <div
                style={{
                  width: "150px",
                }}
              ></div>
            </Row>
          </Container>
        </Row>
        <Switch>
          <Route exact path="/browse" component={Catalog}></Route>
          <Route exact path="/cart" component={Cart}></Route>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/car" component={ItemDetailsLayout}></Route>
          <Route exact path="/cart/checkout" component={Checkout}></Route>
          <Route
            exact
            path="/cart/checkout/success"
            component={SuccessCart}
          ></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Navbar;
