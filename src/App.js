// import logo from './logo.svg';
// import React from 'react';
// import ReactDOM from 'react-dom';
import './App.css';
import CounterClass from './CounterClass';
import CountFn from './CountFn';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Class max=5</h2>
        <CounterClass max={5}/>
        <h2>Class max=10</h2>
        <CounterClass max={10} />
        <h2>Function max=10</h2>
        <CountFn min={2} max={7}/>
      </header>
    </div>
  );
}

export default App;
