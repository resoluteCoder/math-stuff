import React from "react";

const ScoreTracker = ({ score }) => {
  return (
    <div className="circle-container">
      {score.map((status, index) => (
        <div className={`circle ${status !== "" && status}`} key={index}></div>
      ))}
    </div>
  );
};

export default ScoreTracker;
