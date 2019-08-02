import React from "react";
import ReactDOM from "react-dom";

import CanvasContainer from "./CanvasContainer/CanvasContainer";
import Circle from "./CanvasContainer/Circle";

function App() {
  const circles = [
    {r: 50, x:200, y:30},
    {r: 70, x:30, y:140},
  ];
  return (
    <div className="App">
      <CanvasContainer>
        {circles.map(({r,x,y})=><Circle r={r} x={x} y={y}/>)}
      </CanvasContainer>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
