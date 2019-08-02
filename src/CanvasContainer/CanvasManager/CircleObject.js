import ChildObject from "./ChildObject";
class CircleObject extends ChildObject {
  constructor({ x, y, r }) {
    super();
    this.x = x;
    this.y = y;
    this.r = r;
  }
  update({ x, y, r }) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.manager.render();
  }
  render() {
    if (!this.manager) return;
    const {x,y,r,manager}=this;
    const {ctx}=manager;
    ctx.beginPath();
    ctx.arc(x+r, y+r, r, 0, Math.PI*2, false);
    ctx.stroke();
  }
}
export default CircleObject;
