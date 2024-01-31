import React, { children, Fragment } from "react";

function Text({ children }) {
  console.log("Text component");
  return (
    <Fragment>
      {children ? <span>{children}</span> : <span>no Text</span>}
    </Fragment>
  );
}

export default Text;
