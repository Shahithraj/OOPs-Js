let obj = {};

console.log(obj);

const Person = function (name, age) {
  this.name = name;
  this.age = age;

  this.getNameandAge = function () {
    console.log(`Name - ${this.name} and Age - ${this.age}`);
  };
};

// every object will have the getNameandAge function it will repeating of code, so make it as single prototype

Person.prototype.getNameandAge = function () {
  console.log(`Name - ${this.name} and Age - ${this.age}`);
};

const person1 = new Person('Steve', 30);
const person2 = new Person('Elon', 40);

console.log(person1);
