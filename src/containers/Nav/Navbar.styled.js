import styled from "styled-components";
import React from "react";
import { Nav } from "reactstrap";

const NavigationBar = styled(Nav)`
  @import url("https://fonts.googleapis.com/css?family=Montserrat");

  .selected {
    background-color: #333;
    border-color: #333;
    color: #eee;
  }

  align-items: center;

  a {
    color: black;
    text-decoration: none;
    text-transform: uppercase;
    transition: 0.5s;
  }

  a:hover {
    color: white;
    background-color: #495357;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
`;

// .selected {
//   background-color: black;
// }
// .nav-link:hover {
//   background-color: pink;
//   transition: all 0.5s;
// }

export default NavigationBar;
