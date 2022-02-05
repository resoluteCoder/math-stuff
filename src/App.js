import React, { useState } from "react";
import "./App.css";
import Equation from "./Equation";
import ScoreTracker from "./ScoreTracker";
import { randNumberFrom } from "./utils";

function App() {
  const equations = [
    {
      id: 1,
      first: randNumberFrom(0, 10),
      second: randNumberFrom(0, 10),
      operator: "+",
    },
    {
      id: 2,
      first: randNumberFrom(0, 10),
      second: randNumberFrom(0, 10),
      operator: "+",
    },
  ];

  const [score, setScore] = useState(
    equations.map(({ id }) => ({ id, status: "" }))
  );

  return (
    <div className="App">
      <ScoreTracker score={score} />
      <Equation equations={equations} setScore={setScore} />
    </div>
  );
}

export default App;
