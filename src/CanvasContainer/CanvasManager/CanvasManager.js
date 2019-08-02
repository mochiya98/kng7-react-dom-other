class CanvasManager {
  constructor() {
    this.elem = null;
    this.ctx = null;
    this.objects = {};
  }
  unbindCanvas() {
    this.elem = null;
    this.ctx = null;
  }
  bindCanvas(elem) {
    this.elem = elem;
    this.ctx = elem.getContext("2d");
    this.render()
  }
  addObject(obj) {
    obj.bindManager(this);
    this.objects[obj.id] = obj;
    this.render();
  }
  removeObject(obj) {
    obj.unbindManager();
    delete this.objects[obj.id];
  }
  render() {
    if (!this.elem) return;
    this.ctx.clearRect(0, 0, this.elem.width, this.elem.height);
    for (let i in this.objects) {
      this.objects[i].render();
    }
  }
}
export default CanvasManager;
