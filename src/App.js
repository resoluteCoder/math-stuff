import React, { useState } from "react";
import "./App.css";
import Equation from "./Equation";
import ScoreTracker from "./ScoreTracker";
import Results from "./Results";
import { randNumberFrom } from "./utils";

const equations = [...Array(5)].map((_, index) => ({
  id: index + 1,
  first: randNumberFrom(10, 100),
  second: randNumberFrom(10, 100),
  operator: "+",
}));

function App() {
  const [isFinished, setIsFinished] = useState(false);
  const [index, setIndex] = useState(0);
  const [eq, setEq] = useState(equations[0]);
  const [score, setScore] = useState(
    equations.map(({ id }) => ({ id, status: "" }))
  );

  const handleTrackScore = (isCorrect, answer) => {
    console.log(answer);
    setScore(
      score.map((s) => {
        if (s.id === eq.id) {
          if (isCorrect) {
            return { ...s, status: "correct", answer };
          } else {
            return { ...s, status: "incorrect", answer };
          }
        }
        return s;
      })
    );
  };

  const handleNextEquation = () => {
    if (index + 1 === equations.length) {
      setIsFinished(true);
    }
    const newIndex = index + 1;
    setIndex(newIndex);
    setEq(equations[newIndex]);
  };

  return (
    <div className="App">
      {isFinished ? (
        <Results equations={equations} score={score}>
          djfk
        </Results>
      ) : (
        <>
          <ScoreTracker score={score} />
          <Equation
            eq={eq}
            handleTrackScore={handleTrackScore}
            handleNextEquation={handleNextEquation}
          />
        </>
      )}
    </div>
  );
}

export default App;
