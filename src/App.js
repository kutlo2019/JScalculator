import React, {useEffect, useState} from "react";

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <h1 id="header">JavaScript Calculator</h1>
        <div className="display">
          <div id="answer"></div>
          <div id="display-button"></div>
        </div>
        <div className="buttons">
          <div className="numbers">
            <div className="number" id="nine">9</div>
            <div className="number" id="eight">8</div>
            <div className="number" id="seven">7</div>
            <div className="number" id="1">6</div>
            <div className="number" id="1">5</div>
            <div className="number" id="four">4</div>
            <div className="number" id="three">3</div>
            <div className="number" id="two">2</div>
            <div className="number" id="one">1</div>
          </div>
          <div className="operations">
            <button id="multiply">{'\u00D7'}</button>
            <button id="divide">{'\u00F7'}</button>
            <button id="add">{'\u002B'}</button>
            <button id="subtract">{'\u2212'}</button>
            <button id="equals">=</button>
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
