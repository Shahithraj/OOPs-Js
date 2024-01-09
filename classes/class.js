class Person {
  // Constructor method
  constructor(name, age) {
    // Properties
    this.name = name;
    this.age = age;
  }

  // getter and setter
  get getName () {
    return this.name
  }
  
  set changeName(value) {
    this.name = value
  }

  // Method
  sayHello() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Creating instances using the class
const person1 = new Person('John', 25);
const person2 = new Person('Jane', 30);


// accessing getter methods
console.log(person1.getName); // John

// trying to access as a method
console.log(person1.getName()); // error

// change(set) object property using a setter
person1.changeName = "shahith";

// Calling the method
person1.sayHello(); // Output: Hello, my name is shahith and I am 25 years old.
person2.sayHello();

