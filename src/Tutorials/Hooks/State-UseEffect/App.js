/*
We will be learninig on Hook - Staate and useEffect

useEffect serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount. it's a lifecycle method which runs every time a component gets new props, or a state change happens. That's the trick. If we include a state in useEffect we would see an infinite loop bcos:

a setting of a state inside useEffect means useEffect will be triggered (cos of state/prop change), which means a state inside will get changed, which in turn triggers the useEffect (cos of state/prop change), and ad infinitum.

State

The names above can be anything you want, it doesn't matter for React. It is adviseable to use descriptive and meaningful variable names depending on the state's purpose.

The argument passed to useState is the actual initial state, the data that will be subject to changes. useState returns for you two bindings:

the actual value for the state (initToggle)
the state updater function for said state (newToggle)
argument passed to useState, actual initial state(true)
eg:
const [initToggle, newToggle] = useState(true);

*/

//1. import
import React, { useState, useEffect } from "react";
import MyState from "./MyState";

const App = () => {
  //2. set init value (initState) to true, and the name of the set state = 'newToggle'
  const [initToggle, newToggle] = useState(true);
  const [initCount, newCount] = useState(0);

  useEffect(() => {
    //this part trigggers when there is a change in props/state
    console.log(initCount);
  });

  const onClick = () => {
    //3. setting the new state value
    newToggle(!initToggle);
    counter();
  };

  const counter = () => {
    newCount(initCount + 1);
  };

  return (
    <div>
      <h1>You have clicked {initCount} times</h1>
      <p></p>
      {/* this button wil toggle false/true value on click */}
      <button onClick={onClick}>
        Click Me to toggle below child component!
      </button>
      {/* display below comp if state is true */}
      {initToggle && <MyState />}
    </div>
  );
};

export default App;
