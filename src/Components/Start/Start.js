import React, { useContext } from "react";
import {charContext} from '../Context.js/Context';
import "./start.css";

const Start = () => {  
  const [name, setName] = useContext(charContext);
  console.log(name)
  return (
    <div className="container">
      <div className="main">
        <div className="titleContainer">
          <h1>Enter your characters name to get started</h1>
        </div>
        <div className="inputButtonContainer">
          <input type='text' value={name} onChange={e => setName(e.target.value)} className="nameInput" placeholder="Enter a name..." />
          <button className="enterButton">Enter</button>
        </div>
      </div>
    </div>
  );
};

export default Start;
