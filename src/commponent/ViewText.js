import React from "react";
import Text from "./Text";

function ViewText({ text , age}) {
  console.log("viewText component");

  const apiConnect = () => {
    for (let i = 0; i <= 500_000_000; i++) {}
    console.log("viewText component apiConnect");
  };
  apiConnect();
  return (
    <div className="viewText">
    <button onClick={age}>Age</button>
      <p>the include text:</p>
      <Text>{text.name}</Text>
    </div>
  );
}

export default React.memo(ViewText);
