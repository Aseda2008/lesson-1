import React, { useState } from "react";


const Calculator = () => {
  const [input, setInput] = useState("");  // Калькулятордун киришин сактоо

  // Киришти жаңыртуу
  const handleClick = (value) => {
    setInput(input + value);
  };

  // Санды эсептөө
  const handleEvaluate = () => {
    try {
      setInput(eval(input).toString());  // eval() менен эсептөө
    } catch (error) {
      setInput("Error");  // Эгерде синтаксистик каталар болсо
    }
  };

  // Киришти тазалоо
  const handleClear = () => {
    setInput("");
  };

  // Киришти өчүрүү
  const handleDelete = () => {
    setInput(input.slice(0, -1));
  };

  return (
    <div className="calculator">
      <div className="screen">
        <input type="text" value={input} disabled />
      </div>
      <div className="buttons">
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("/")}>/</button>
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("*")}>*</button>
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("-")}>-</button>
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick(".")}>.</button>
        <button onClick={handleEvaluate}>=</button>
        <button onClick={() => handleClick("+")}>+</button>
        <button onClick={handleClear}>C</button>
        <button onClick={handleDelete}>DEL</button>
      </div>
    </div>
  );
};

export default Calculator;
