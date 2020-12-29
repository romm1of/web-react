import PublicApp from "./PublicApp";
import { useState } from "react";
import {
  Switch,
  UnauthenticatedRoute,
  AuthenticatedRoute,
} from "react-router-dom";

const App = () => {
  return (
    <div>
      <PublicApp />
    </div>
  );
};

export default App;
