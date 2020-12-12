import React from "react";
import {
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaGooglePlus,
  FaCar,
} from "react-icons/fa";

import {GrFacebook} from "react-icons/gr";

import Logo from "../../assets/logo.png";
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
import styled from "styled-components";
import FooterStyled from "./Footer.styled";

class Footer extends React.Component {
  render() {
    return (
      <>
        <FooterStyled className=" footer">
          <Container style={{ maxWidth: "1500px" }}>
            <Row className=" justify-content-between">
              <Col className=" col-2 justify-items-center small mt-2">
                <h6>Neque dolore voluptatem</h6>
                <p className=" ">
                  Aliquam quaerat est tempora aliquam etincidunt. Tempora neque
                  sed non. Dolor sed modi est non etincidunt.
                </p>
              </Col>
              {/* <FaCar className=" align-self-center" size={30} /> */}
              <img
                className=" align-self-center"
                src={Logo}
                style={{
                  width: "75px",
                  height: "75px",
                }}
              />
              <Nav className=" align-items-center">
                <NavItem>
                  <NavLink href="https://www.facebook.com">
                    <GrFacebook size={27} />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">
                    <FaTwitter size={27} onTouchMove />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">
                    <FaLinkedin size={27} />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">
                    <FaGooglePlus size={27} />
                  </NavLink>
                </NavItem>
              </Nav>
            </Row>
            <hr />
            <Row className=" justify-content-center small align-text-top">
              <div className=" copyright mb-3">
                {new Date().getFullYear()} IoT © Copyright all rights reserved
              </div>
            </Row>
          </Container>
        </FooterStyled>
      </>
    );
  }
}

// const Footer = () => (
//   <FooterStyled className=" footer mt-4">
//     <Container style={{ maxWidth: "1500px" }}>
//       <Row className=" justify-content-between">
//         <Col className=" col-2 justify-items-center small mt-2">
//           <h6>Neque dolore voluptatem</h6>
//           <p className=" ">
//             Aliquam quaerat est tempora aliquam etincidunt. Tempora neque sed
//             non. Dolor sed modi est non etincidunt.
//           </p>
//         </Col>
//         <FaCar className=" align-self-center" size={30} />
//         <Nav className=" align-items-center">
//           <NavItem>
//             <NavLink href="#">
//               <FaFacebook size={27} />
//             </NavLink>
//           </NavItem>
//           <NavItem>
//             <NavLink href="#">
//               <FaTwitter size={27} />
//             </NavLink>
//           </NavItem>
//           <NavItem>
//             <NavLink href="#">
//               <FaLinkedin size={27} />
//             </NavLink>
//           </NavItem>
//           <NavItem>
//             <NavLink href="#">
//               <FaGooglePlus size={27} />
//             </NavLink>
//           </NavItem>
//         </Nav>
//       </Row>
//       <hr />
//       <Row className=" justify-content-center small align-text-top">
//         <div className=" copyright">
//           {new Date().getFullYear()} IoT © Copyright all rights reserved
//         </div>
//       </Row>
//     </Container>
//   </FooterStyled>
// );

// const FooterStyled = styled.div`
//   color: black;
// `;

export default Footer;
