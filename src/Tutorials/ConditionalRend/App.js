/*
Conditional rendering is a term to describe the ability to render different user interface (UI) markup if a condition is true or false or conditions specified by user. we will have 2 type of conditon
1. if, else if
2. if, else
3. ternatory operator

https://www.digitalocean.com/community/tutorials/7-ways-to-implement-conditional-rendering-in-react-applications

https://reactjs.org/docs/hooks-state.html
*/

import React, { useState, useEffect } from "react";
import "./App.css";
import Blue from "./Blue";
import False from "./False";
import Red from "./Red";
import True from "./True";
let select = "";
const App = () => {
  const [color, newColor] = useState("");
  const [bool, setBool] = useState("");

  const onClick = (e) => {
    newColor(e.target.innerText);
    console.log(color);
  };

  const setBoolFalse = (e) => {
    setBool(false);
  };
  const setBoolTrue = (e) => {
    setBool(true);
  };

  useEffect(() => {
console.log(bool);

    if (bool === true) {
      select = <True />;
    } if (bool === false) {
      select = <False />;
    }
  }, [bool]);

  return (
    <div>
      <div className="ifElse">
        <h1>Color Selector</h1>
        <h3>Select your comp</h3>
        <button onClick={onClick}>Blue</button>
        <button onClick={onClick}>Red</button>
        <button onClick={onClick}>Reset</button>
        {(() => {
          if (color === "Red") {
            return <Red />;
          } else if (color === "Blue") {
            return <Blue />;
          }
        })()}
      </div>
      {/* this is setting state within the element  */}
      <div className="ifElse">
        <h1>Choose a boolean value</h1>
        <button onClick={setBoolFalse}>false</button>
        <button onClick={setBoolTrue}>true</button>
        {select}
      </div>
    </div>
  );
};

export default App;
