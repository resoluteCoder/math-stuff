import React, { useState } from "react";
import { operation } from "./utils";

const Equation = ({ eq, handleTrackScore, handleNextEquation }) => {
  const { first, second, operator } = eq;

  const [answer, setAnswer] = useState("");
  const [correct, setCorrect] = useState(null);

  const handleAnswerSubmit = (e) => {
    e.preventDefault();

    const value = parseInt(e.target.answer.value);
    const result = operation[operator](first, second);
    if (value === result) {
      setCorrect(true);
      handleTrackScore(true, value);
    } else {
      setCorrect(false);
      handleTrackScore(false, value);
    }
    setTimeout(() => {
      setCorrect(null);
      setAnswer("");
      handleNextEquation();
    }, 1000);
  };

  return (
    <div className="equation">
      {correct ? (
        <h1 style={{ color: "lightgreen" }}>Correct!</h1>
      ) : correct !== null ? (
        <h1 style={{ color: "orangered" }}>Incorrect</h1>
      ) : (
        <h1>You can do it!</h1>
      )}
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
