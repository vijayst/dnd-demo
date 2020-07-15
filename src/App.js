import React from "react";
import "./App.css";

function Card() {
  return <div className="card">Card</div>;
}

function Box({ card }) {
  return <div className="box">{card ? <Card /> : "Box"}</div>;
}

function App() {
  return (
    <div className="app">
      <Box card></Box>
      <Box></Box>
      <Box></Box>
    </div>
  );
}

export default App;
