import React, { useState } from'react';
import "../src/App.css";
import ViewCounter from './commponent/ViewCounter';
import ViewText from './commponent/ViewText';


function App() {
  const[count,setCount]=useState(0)
  const name= "Abbass"
  const counterHandller = ()=>{
    setCount(count+1)
  }
  return (
    <div className="App">
      <ViewCounter count={count} counterHandller={counterHandller}/>
      <ViewText text = {name}/>
    </div>
  );
}

export default App;
