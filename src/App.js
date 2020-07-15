import React from "react";
import "./App.css";

function Box() {
  return <div className="box">Box</div>;
}

function App() {
  return (
    <div className="app">
      <Box></Box>
      <Box></Box>
      <Box></Box>
    </div>
  );
}

export default App;
