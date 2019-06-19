import React from "react";

const Display = props => {
  return (
    <div>
      <p>balls: {props.balls}</p>
      <p>strikes:{props.strikes}</p>
      <p>fouls:{props.fouls}</p>
    </div>
  );
};

export default Display;
