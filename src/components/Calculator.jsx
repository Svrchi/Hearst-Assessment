import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [display, setDisplay] = useState(0);

  const updateDisplay = (e) => {
    if (display === 0) {
      setDisplay(e.target.value);
    } else if (typeof display === 'string') {
      setDisplay(display + e.target.value);
    }
  };

  const clearDisplay = () => {
    setDisplay(0);
  };

  const getResult = () => {
    let finalResult = eval(display).toString();
    setDisplay(finalResult);
  };

  return (
    <div className="c-wrapper">
      <div className="c-container">
        <input className="c-display" type="text" value={display} />
        <div className="c-keypad">
          <div className="c-left-keys">
            <div className="c-row">
              <button
                className="c-key"
                value="/"
                onClick={(e) => updateDisplay(e)}
              >
                ÷
              </button>
              <button
                className="c-key"
                value="*"
                onClick={(e) => updateDisplay(e)}
              >
                x
              </button>
              <button
                className="c-key"
                value="-"
                onClick={(e) => updateDisplay(e)}
              >
                -
              </button>
            </div>
            <div className="c-row">
              <button
                className="c-key"
                value="7"
                onClick={(e) => updateDisplay(e)}
              >
                7
              </button>
              <button
                className="c-key"
                value="8"
                onClick={(e) => updateDisplay(e)}
              >
                8
              </button>
              <button
                className="c-key"
                value="9"
                onClick={(e) => updateDisplay(e)}
              >
                9
              </button>
            </div>
            <div className="c-row">
              <button
                className="c-key"
                value="4"
                onClick={(e) => updateDisplay(e)}
              >
                4
              </button>
              <button
                className="c-key"
                value="5"
                onClick={(e) => updateDisplay(e)}
              >
                5
              </button>
              <button
                className="c-key"
                value="6"
                onClick={(e) => updateDisplay(e)}
              >
                6
              </button>
            </div>
            <div className="c-row">
              <button
                className="c-key"
                value="1"
                onClick={(e) => updateDisplay(e)}
              >
                1
              </button>
              <button
                className="c-key"
                value="2"
                onClick={(e) => updateDisplay(e)}
              >
                2
              </button>
              <button
                className="c-key"
                value="3"
                onClick={(e) => updateDisplay(e)}
              >
                3
              </button>
            </div>
            <div className="c-row">
              <button
                className="c-key"
                value="0"
                onClick={(e) => updateDisplay(e)}
              >
                0
              </button>
              <button
                className="c-key"
                value="."
                onClick={(e) => updateDisplay(e)}
              >
                .
              </button>
              <button
                className="c-key"
                onClick={() => {
                  clearDisplay();
                }}
              >
                C
              </button>
            </div>
          </div>
          <div className="c-right-keys">
            <button
              className="c-key-plus"
              value="+"
              onClick={(e) => updateDisplay(e)}
            >
              +
            </button>
            <button
              className="c-key-equal"
              onClick={() => {
                getResult();
              }}
            >
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
