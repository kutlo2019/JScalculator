import React, {useEffect, useState} from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayInput: 0,
      answer: ''
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState( state => {
        return {
          displayInput: state.displayInput + e.target.innerText
        }
      }
    )
  }

  render () {
    return (
      <div className="App">
        <h1 id="header">JavaScript Calculator</h1>
        <div className="display">
          <div id="answer"></div>
          <div id="display-button">{this.state.displayInput}</div>
        </div>
        <Buttons handleClick={this.handleClick} />
      </div>
    );
  }
  
}

function Buttons(props) {

  useEffect(() => {
    document.querySelectorAll('.btn').forEach(el => {
      el.addEventListener('click', props.handleClick);
    })

    return () => {
      document.querySelectorAll('.btn').forEach(el => {
        el.removeEventListener('click', props.handleClick)
      })
    }
  })

  return (
    <div className="buttons">
      <div className="numbers">
        <div
          className="number btn"
          id="nine"
        >9</div>
        <div className="number btn" id="eight">8</div>
        <div className="number btn" id="seven">7</div>
        <div className="number btn" id="1">6</div>
        <div className="number btn" id="1">5</div>
        <div className="number btn" id="four">4</div>
        <div className="number btn" id="three">3</div>
        <div className="number btn" id="two">2</div>
        <div className="number btn" id="one">1</div>
      </div>
      <div className="operations">
        <button className="btn" id="multiply">{'\u00D7'}</button>
        <button className="btn" id="divide">{'\u00F7'}</button>
        <button className="btn" id="add">{'\u002B'}</button>
        <button className="btn" id="subtract">{'\u2212'}</button>
        <button className="number btn" id="zero">0</button>
        <button className="btn" id="equals">=</button>
      </div>
      <div className="clean-up">
        <button>Del</button>
        <button>AC</button>
        <button>Off</button>
      </div>
    </div>
  );
}

export default App;
