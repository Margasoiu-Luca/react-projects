import React from "react";

const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name">
        <button className="remove-player">✖</button>{props.name}
      </span>
      <div className="counter">
        <button className="counter-action decrement">-</button>
        <span className="counter-score">0</span>
        <button className="counter-action increment">+</button>
      </div>
    </div>
  );
};

export default Player;
