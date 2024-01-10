// Person constructor
const Person = function (name, age) {
  this.name = name;
  this.age = age;
};

// Adding a method to the Person prototype
Person.prototype.getNameandAge = function () {
  console.log(`Name - ${this.name} and Age - ${this.age}`);
};

// Students constructor inheriting from Person
const Students = function (teacher, name, age) {
  // Call the Person constructor to set name and age
  Person.call(this, name, age);
  this.teacher = teacher;
};

// Inherit Person's prototype
Students.prototype = Person.prototype;

// Creating a new Students object
const s1 = new Students("Anand", "John", 20);

// Accessing Person object methods through the Students object
s1.getNameandAge(); // Output: Name - John and Age - 20

// Accessing Students-specific property
console.log(s1.class); // Output: 10
console.log(s1.name); // Output: John

