import React, { useEffect, useState } from "react";

const oneToNine = [
  {
    num: 9,
    id: "nine",
    class: "number btn"
  },
  {
    num: 8,
    id: "eight",
    class: "number btn"
  },
  {
    num: 7,
    id: "seven",
    class: "number btn"
  },
  {
    num: 6,
    id: "six",
    class: "number btn"
  },
  {
    num: 5,
    id: "five",
    class: "number btn"
  },
  {
    num: 4,
    id: "four",
    class: "number btn"
  },
  {
    num: 3,
    id: "three",
    class: "number btn"
  },
  {
    num: 2,
    id: "two",
    class: "number btn"
  },
  {
    num: 1,
    id: "one",
    class: "number btn"
  }
]

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
    this.setState(state => {
      const string = state.displayInput;
      let answer = string
      if (string.charAt(0) === '0') {
        answer = string.substring(1);
      }
      const answerString = answer.slice(0, -1);
      const answerInt = eval(answerString);
      return {
        displayInput: answerInt,
        answer
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
    this.setState(state => {
      const newDisplay = state.displayInput.slice(0, -1);
      return {
        displayInput: newDisplay
      }
    }
    )
  }

  handleClick(e) {
    this.setState(state => {
      let text = e.target.innerText
      if (text === '\u00D7') // multiply
        text = '*'
      if (text === '\u00F7') // divide
        text = '/'
      if (text === '\u2212') // subtract
        text = '-'
      return {
        displayInput: state.displayInput + text
      }
    }
    )
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Display 
          answer={this.state.answer}
          displayInput={this.state.displayInput}
        />
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

function Display(props) {
  return (
    <div className="display">
    <div id="answer">{props.answer}</div>
    <div id="display-button">{props.displayInput}</div> 
    </div>
  );
}

function Header() {
  return (
    <h1 id="header">JavaScript Calculator</h1>
  );
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
      <Numbers />
      <Operations 
        handleEquals={props.handleEquals}
      />
      <div className="clean-up">
        <button onClick={props.handleDelete}>Del</button>
        <button onClick={props.clearScreen}>AC</button>
        <button>Off</button>
      </div>
    </div>
  );
}

const operations = [
  {
    operand: '\u00D7',
    id: 'multiply',
    class: 'btn'
  },
  {
    operand: '\u00F7',
    id: 'divide',
    class: 'btn'
  },
  {
    operand: '\u002B',
    id: 'add',
    class: 'btn'
  },
  {
    operand: '\u2212',
    id: 'subtract',
    class: 'btn'
  },
  {
    operand: 0,
    id: 'zero',
    class: 'number btn'
  },
  {
    operand: '=',
    id: 'equals',
    class: 'btn'
  },

]

function Operations(props) {
  return (
    <div className="operations">
      {operations.map(operand => {
        return (
          <button
            key={operand.id}
            className={operand.class}
            id={operand.id}
          >{operand.operand}</button>
        );
      })}
      <button className="btn" id="equals" onClick={props.handleEquals}>=</button>
    </div>
  );
}

function Numbers() {
  return (
    <div className="numbers">
      {oneToNine.map(digit => {
        return (
          <div
          key={digit.id}
          className={digit.class}
          id={digit.id}
          >{digit.num}</div>
        )
      })}
    </div>
  );
}

export default App;
