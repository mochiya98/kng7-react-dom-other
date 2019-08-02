import React, { useEffect, useMemo, useRef } from "react";
import CanvasManager from "./CanvasManager/CanvasManager";

const context = new React.createContext(null);
function CanvasContainer({ children, width = 400, height = 150 }) {
  const manager = useMemo(() => new CanvasManager(), []);
  const canvasRef = React.createRef(null);
  useEffect(() => {
    manager.bindCanvas(canvasRef.current);
  }, [canvasRef, manager]);
  return (
    <>
      <canvas width={width} height={300} ref={canvasRef} />
      <context.Provider value={manager}>{children}</context.Provider>
    </>
  );
}
export { context };
export default CanvasContainer;
