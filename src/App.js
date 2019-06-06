import React from 'react';
import './App.css';
import Context from './Components/Context.js/Context'
import Start from './Components/Start/Start'

function App() {
  return (
    <div className="App">
      <Context>
        <Start/>
      </Context>
    </div>
  );
}

export default App;
