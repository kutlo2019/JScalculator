import React, {useEffect, useState} from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayInput: '0',
      answer: 'expr ='
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.clearScreen = this.clearScreen.bind(this);
    this.handleEquals = this.handleEquals.bind(this);
  }

  handleEquals() {
    this.setState( state => {
        const string = state.displayInput;
        let answer = string
        if (string.charAt(0) === '0') {
          answer = string.substring(1);
        }
        const answerString = answer.slice(0,-1)
        const answerInt = eval(answerString)
        console.log(answerString);
        return {
          displayInput: answerInt,
          answer: answer
        }
      }
    )
  }

  clearScreen() {
    this.setState({
      displayInput: '0',
      answer: 'expr ='
    })
  }

  handleDelete() {
    this.setState( state => {
        const newDisplay = state.displayInput.slice(0,-1);
        return {
          displayInput: newDisplay
        }
      }
    )
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
          <div id="answer">{this.state.answer}</div>
          <div id="display-button">{this.state.displayInput}</div>
        </div>
        <Buttons 
          handleClick={this.handleClick}
          handleDelete={this.handleDelete}
          clearScreen={this.clearScreen}
          handleEquals={this.handleEquals}
        />
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
        <button className="btn" id="equals" onClick={props.handleEquals}>=</button>
      </div>
      <div className="clean-up">
        <button onClick={props.handleDelete}>Del</button>
        <button onClick={props.clearScreen}>AC</button>
        <button>Off</button>
      </div>
    </div>
  );
}

export default App;
