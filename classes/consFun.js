In JavaScript, a constructor function is a special type of function that is used to create and initialize objects. 
Constructor functions are often used in conjunction with the new keyword to create instances of objects(create memory for object). 
The purpose of a constructor function is to define a blueprint for creating objects with specific properties and methods

// Constructor function
function Person(name, age) {
  // Properties - instance variable
  this.name = name;
  this.age = age;

  // Method - instance method
  this.sayHello = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  };

  static greeting () {
    // static function is only accessed by class not by an object (or instance)
    console.log("Hello from Person object");
}

// Creating instances using the constructor function
var person1 = new Person('John', 25);
var person2 = new Person('Jane', 30);

// Calling the method
person1.sayHello(); // Output: Hello, my name is John and I am 25 years old.
person2.sayHello(); // Output: Hello, my name is Jane and I am 30 years old.

person1.greeting() // Error - it is not a function
Person.greeting(); // it will print


Example 2 :

function Car(_name, _age, _engine) {
  this.name = name;
  this.color = color;
  this.engine = engine;

  this.drive = function () {
    console.log(`welcome ${this.name}`);
  };
}

 let car1 = new Car('Ferrari', 'Red', 'BS6');
 let car2 = new Car('BMW', 'Blue', 'BS5');

 car1.drive();



