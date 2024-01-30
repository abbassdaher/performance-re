import React, { Fragment } from "react";

function Text() {
    console.log("Text component");
  return (
    <Fragment>
      <span>{this.props.children}</span>
    </Fragment>
  );
}

export default Text;
