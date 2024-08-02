import React from "react";
import Score from "./Score.jsx";

const Learner = ({ name, bio, scores }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{bio}</p>
      <div>
        {scores.map((score, index) => (
          <Score key={index} {...score} />
        ))}
      </div>
    </div>
  );
};

export default Learner;