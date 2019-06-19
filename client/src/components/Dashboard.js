import React from "react";

const Dashboard = props => {
  return (
    <div>
      <button onClick={props.strikeCount}>strike</button>
      <button onClick={props.ballCount}>ball</button>
      <button onClick={props.hitCount}>hit</button>
      <button onClick={props.foulCount}>foul</button>
    </div>
  );
};

export default Dashboard;
