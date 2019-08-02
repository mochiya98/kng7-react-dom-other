import { useMemo, useContext, useEffect } from "react";
import { context } from "./CanvasContainer";
import CircleObject from "./CanvasManager/CircleObject";

function Circle({ children, r = 20, x = 0, y = 0 }) {
  const circle = useMemo(() => new CircleObject(x, y, r), []);
  const manager = useContext(context);
  useEffect(() => {
    manager.addObject(circle);
    return () => manager.removeObject(circle);
  }, []);
  useEffect(() => {
    circle.update({ r, x, y });
  }, [r, x, y]);
  return children || null;
}
export default Circle;
