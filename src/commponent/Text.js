import React, { children, Fragment } from "react";

function Text({children}) {
    console.log("Text component");
  return (
    <Fragment>
      <span>{children}</span>
    </Fragment>
  );
}

export default Text;
