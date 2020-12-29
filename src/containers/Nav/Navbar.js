import React, { useState, useEffect } from "react";
import { Container, Nav, NavItem, Row, NavbarText } from "reactstrap";
import Home from "../../components/Home";
import Catalog from "../../components/Catalog";
import Cart from "../../components/Cart";
import {
  BrowserRouter,
  Switch,
  Route,
  NavLink,
  Link,
  Redirect,
  useHistory,
} from "react-router-dom";
import NavigationBar from "./Navbar.styled";
import Logo from "../../assets/logo.png";
import ItemDetailsLayout from "../../containers/Layout/ItemDetailsLayout";
import Checkout from "../../components/Checkout";
import SuccessCart from "../../components/SuccessCart";
import Login from "../../components/Login";
import Signup from "../../components/Signup";

const isAuthenticated = () => {
  return localStorage.getItem("access_token") !== null;
};

const Navbar = () => {
  const handleLogoutClick = () => {
    localStorage.removeItem("access_token");
  };
  const [auth, setAuth] = useState(isAuthenticated());

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
              className=" align-self-center"
              style={{
                textDecoration: "none !important",
                width: "7.813vw",
              }}
            >
              {auth ? (
                <a
                  href="/"
                  onClick={handleLogoutClick}
                  style={{
                    textDecoration: "none !important",
                    color: "#0060B6",
                  }}
                >
                  Log Out
                </a>
              ) : (
                <Link exact to="/login">
                  <a
                    href="/login"
                    style={{
                      textDecoration: "none !important",
                      color: "#0060B6",
                    }}
                  >
                    Log In
                  </a>
                </Link>
              )}
            </div>
          </Row>
        </Container>
      </Row>
      <Switch>
        <Route exact path="/browse" component={Catalog}>
          {auth ? <Catalog /> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/cart" component={Cart}>
          {auth ? <Cart /> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/">
          {auth ? <Home /> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/car" component={ItemDetailsLayout}></Route>
        <Route exact path="/cart/checkout" component={Checkout}></Route>
        <Route
          exact
          path="/cart/checkout/success"
          component={SuccessCart}
        ></Route>
        <Route exact path="/login">
          <Login setAuth={setAuth} />
        </Route>
        <Route exact path="/register">
          <Signup setAuth={setAuth} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Navbar;
