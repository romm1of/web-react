import Navbar from "../Nav/Navbar";
import FooterStyled from "../Footer/Footer";
import "./App.css";
import Body from "./App.styled";
import { Provider } from "react-redux";
import reducer from "../../redux/reducers";
import { createStore } from "redux";
import { useState, createContext } from "react";
import AuthenticationContext from "../../authentication/AuthenticationContext";
import { Redirect, Router, useHistory } from "react-router-dom";

const store = createStore(reducer);

const PublicApp = () => {
  return (
    <Provider store={store}>
      <Body>
        <Navbar />
        <FooterStyled />
      </Body>
    </Provider>
  );
};

export default PublicApp;
