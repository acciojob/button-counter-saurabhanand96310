
import React from "react";
import './../styles/App.css';
import { useState } from "react";

const App = () => {
const [count, setCount] =useState(0);

  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Button click { count} times</h1>
        <button onClick={ () => setCount(count+1)}>Click me</button>
    </div>
  )
}

export default App;
