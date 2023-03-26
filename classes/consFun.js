// Constructor Function instead of class

function Car(_name, _age, _engine) {
  this.name = name;
  this.color = color;
  this.engine = engine;

  this.drive = function () {
    console.log(`welcome ${this.name}`);
  };
}

// let car1 = new Car('Ferrari', 'Red', 'BS6');
// let car2 = new Car('BMW', 'Blue', 'BS5');

// car1.drive();
