import React, { Fragment } from "react";
import spinner from "./spinner.gif";

export const Spinner = () => {
  return (
    // j) Fragment
    <Fragment>
      <img
        src={spinner}
        alt=""
        style={{ width: "200px", margin: "auto", display: "block" }}
      />
    </Fragment>
  );
};
