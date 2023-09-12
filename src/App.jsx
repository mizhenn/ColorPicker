import { useState } from 'react'


// Write your Color component here
import React, { useState } from 'react';
const Color = (props) => {
  return (
    <div
      className={props.color}
      onClick={() => props.onSelect(props.color)} 
    ></div>
  );
};
const App = () => {
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className="red">red</div>
      </div>
      <div id="colors-list">
      <Color color="red"/>
      <Color color="blue"/>
      <Color color="green"/>
         </div>
    </div>
  );
};

export default App;



