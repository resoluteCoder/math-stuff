import React, { useState } from "react";
import { operation } from "./utils";

// left off on syncing score with current equation

const Equation = ({ equations, setScore }) => {
  const [index, setIndex] = useState(0);
  const [eq, setEq] = useState(equations[0]);
  const { first, second, operator } = eq;

  const [answer, setAnswer] = useState("");
  const [correct, setCorrect] = useState(false);

  const handleAnswerSubmit = (e) => {
    e.preventDefault();

    const value = parseInt(e.target.answer.value);
    const result = operation[operator](first, second);
    if (value === result) {
      setCorrect(true);
      setScore((prev) => {});

      setTimeout(() => {
        setCorrect(false);
        setAnswer("");

        const newIndex = index + 1 === equations.length ? 0 : 1;
        setIndex(newIndex);
        setEq(equations[newIndex]);
      }, 1000);
    }
  };

  return (
    <div className="equation">
      {correct ? <h1 style={{ color: "lightgreen" }}>Correct!</h1> : <h1></h1>}
      <h1>
        {`${first} ${operator} ${second}`}
        <form onSubmit={handleAnswerSubmit}>
          <input
            onChange={(e) => setAnswer(e.target.value)}
            name="answer"
            className="answer-input"
            maxLength={String(first + second).length}
            type="numeric"
            value={answer}
          />
        </form>
      </h1>
    </div>
  );
};

export default Equation;
