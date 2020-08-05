import React from "react";
import { Link } from "react-router-dom";
import "./error404.scss";

const Error404 = () => {
  return (
    <div className="error404">
      <h2>Error404!</h2>

      <h3>
        Go to the <Link to="/">{"> Home <"}</Link> page
      </h3>
    </div>
  );
};

export default Error404;
