import React, { Suspense } from "react";
import ReactDOM from "react-dom";
// import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/app";
import Spinner from "./utils/spinner/spinner";
import "./i18n";
import "./global/global.scss";

ReactDOM.render(
  <Suspense fallback={<Spinner />}>
    {/* <Router> */}
      <App />
    {/* </Router> */}
  </Suspense>,
  document.getElementById("root")
);
