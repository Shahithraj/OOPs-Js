// Person - parent class
class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  welcome() {
    console.log(`welcome ${this.name}`);
  }
}

class Student extends Person {
  constructor(_name, _age, _gender, marks) {
    super(_name, _age, _gender);
    this.marks = marks;
  }
  callWelcome() {
    super.welcome();
    return this;
  }
}

class Teacher extends Person {
  constructor(_name, _age, _gender, strength) {
    super(_name, _age, _gender);
    this.strength = strength;
  }
  callWelcome() {
    super.welcome();
    return this;
  }
}

const student1 = new Student('shahith', 23, 'M', 80);
const teacher = new Teacher('raj', 53, 'M', 50);

console.log(student1.callWelcome());
console.log(teacher.callWelcome());
