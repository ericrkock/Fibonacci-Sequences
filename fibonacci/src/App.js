import React from 'react';
//mport logo from './logo.svg';
import './App.css';

function App() {
  return (
//    <div className="App">
//      <header className="App-header">
//        <img src={logo} className="App-logo" alt="logo" />
//        <p>
//          Edit <code>src/App.js</code> and save to reload.
//        </p>
//        <a
//          className="App-link"
//          href="https://reactjs.org"
//          target="_blank"
//          rel="noopener noreferrer"
//        >
//          Learn React
//        </a>
//      </header>
//    </div>
    <div className="App">
      <h2>3 Ways to calculate the Fibonacci Sequences</h2>
        <div>
          <form>
            <fieldset>
              <legend> Give an index for each way </legend>
              <p className="form-label">1. SIMPLE LOOP WAY</p>
                <input className="form-field" type="text" placeholder="index ?" />
                <button type="submit">Calculate</button>
                <result id="resultLoopWay">Loop Way</result>
                <button type="submit">Reset Index</button>
              <p className="form-label">2. RECURSION WAY</p>
                <input className="form-field" type="text" placeholder="index ?" />
                <button type="submit">Calculate</button>
                <result id="resultLoopWay">Recursion Way</result>
                <button type="submit">Reset Index</button>
              <p className="form-label">3. REDUCE WAY</p>
                <input className="form-field" type="text" placeholder="index ?" />
                <button type="submit">Calculate</button>
                <result id="resultLoopWay">Reduce Way</result>
                <button type="submit">Reset Index</button>
              <p className="resetResults">
                <button id="btn-reset" type="submit">Reset all</button>
              </p>
            </fieldset>
          </form>
      </div> 
    </div>

  );
}

export default App;
// https://www.youtube.com/watch?v=VIqVW9XiWnk Form video