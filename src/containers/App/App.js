import Home from "../../components/Home";
// import HomeLayout from "../../containers/Layout/HomeLayout";
import Navbar from "../Nav/Navbar";
import FooterStyled from "../Footer/Footer";
import "./App.css";
import Body from "./App.styled";

const App = () => {
  return (
    <Body>
      <Navbar />
      <FooterStyled />
    </Body>
  );
};

export default App;
