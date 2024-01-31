import React, { useState, useMemo, useCallback } from "react";
import "../src/App.css";
import ViewCounter from "./commponent/ViewCounter";
import ViewText from "./commponent/ViewText";

function App() {
  const [count, setCount] = useState(0);
  // useMemo prevent object to rebuild in runtime useMemo: objects,arrays and functions as return
  const name = useMemo(() => {
    return { name: "Abbass" };
  }, []);
  const counterHandller = () => {
    setCount(count + 1);
  };
  // Usecallback prevent function to rebuild in runtime
  const addAgeHandller = useCallback(() => {
    console.log("age");
  }, []);
  return (
    <div className="App">
      <ViewCounter count={count} counterHandller={counterHandller} />
      <ViewText text={name} age={addAgeHandller} />
    </div>
  );
}

export default App;
