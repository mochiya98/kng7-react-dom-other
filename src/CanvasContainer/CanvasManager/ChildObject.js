import { generateUuid } from "./utils";

class ChildObject {
  constructor() {
    this.id = generateUuid();
    this.manager = null;
  }
  render() {}
  unbindManager() {
    this.manager = null;
  }
  bindManager(manager) {
    this.manager = manager;
  }
}
export default ChildObject;
