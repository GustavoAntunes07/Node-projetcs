export default class Person {
  constructor(name) {
    this.name = name;
  }

  saymyname() {
    return `your name is ${this.name}`;
  }
}
