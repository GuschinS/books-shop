import { newTag } from "./create-element";
import { BookCatalog } from "./book-catalog";

class Main {
  constructor() {
    this.main = newTag("main");
    this.container = newTag("div", { className: "container" });
  }
  render() {
    this.main.append(this.container);
    this.container.append(new BookCatalog().render());

    return this.main;
  }
}

export { Main };
