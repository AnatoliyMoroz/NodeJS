import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

import Counter from './Counter'
import CounterForm from "./CounterForm";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter cnt={counter}/>
        <CounterForm  onChange={()=>setCounter( counter +1 ) }/>
        <p>Template
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
