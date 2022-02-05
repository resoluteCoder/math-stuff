import React from "react";

const Results = ({ equations, score }) => {
  console.log(equations, score);
  return (
    <div>
      <h1>Results:</h1>
      {equations.map(({ first, operator, second }, index) => (
        <h1
          className={
            score[index].status === "correct"
              ? "correct-text"
              : "incorrect-text"
          }
          key={index}
        >{`${first} ${operator} ${second} = ${score[index].answer}`}</h1>
      ))}
    </div>
  );
};

export default Results;
