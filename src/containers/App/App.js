import Navbar from "../Nav/Navbar";
import FooterStyled from "../Footer/Footer";
import "./App.css";
import Body from "./App.styled";
import { Provider } from "react-redux";
import reducer from "../../redux/reducers";
import { createStore } from "redux";

const store = createStore(reducer);

const App = () => {
  return (
    <Provider store={store}>
      <Body>
        <Navbar />
        <FooterStyled />
      </Body>
    </Provider>
  );
};

export default App;
