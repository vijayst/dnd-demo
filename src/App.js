import React, { useState } from "react";
import "./App.css";
import { useDrag, useDrop } from "react-dnd";

function Card() {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: "card",
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));
  return (
    <div
      className="card"
      ref={dragRef}
      style={{
        backgroundColor: isDragging ? "#fbb" : "palegoldenrod",
      }}
    >
      Card
    </div>
  );
}

function Box({ card, moveCard }) {
  const [{ isOver }, dropRef] = useDrop(() => ({
    accept: "card",
    drop: () => moveCard(),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));
  return (
    <div
      className="box"
      ref={dropRef}
      style={{ backgroundColor: isOver ? "#bbf" : "rgba(0,0,0,.12" }}
    >
      {card ? <Card /> : "Box"}
    </div>
  );
}

function App() {
  const [index, setIndex] = useState(1);

  function moveCard(i) {
    setIndex(i);
  }

  return (
    <div className="app">
      <Box card={index === 1} moveCard={moveCard.bind(null, 1)}></Box>
      <Box card={index === 2} moveCard={moveCard.bind(null, 2)}></Box>
      <Box card={index === 3} moveCard={moveCard.bind(null, 3)}></Box>
    </div>
  );
}

export default App;
