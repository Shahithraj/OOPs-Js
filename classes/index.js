class Car {
  constructor(name, color, engine) {
    // Instance property

    this.name = name;
    this.color = color;
    this.engine = engine;
  }

  // Instance Method

  drive() {
    console.log(`I a driving a ${this.name} car`);
  }
}

let car1 = new Car('Ferrari', 'Red', 'BS6');
let car2 = new Car('BMW', 'Blue', 'BS5');

car2.drive();

console.log(car2);
