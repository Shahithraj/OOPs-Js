// 1.
var a = 5;

function getVal() {
  console.log(this.a); // 5 --> Window object
}

const val = () => {
  console.log(this.a); // 5  --> Window object
};

val();
getVal();

// 2. Arrow function will take this from the parent function

let obj = {
  name: 'shahith',
  getDetails: function () {
    console.log(this.name); // shahith
  },
  getName: () => {
    console.log(this.name); // empty
  },
  nestedArrow: function () {
    const nested = () => console.log(this.name); //  this will point the refernce of nestedArrow. so it print shahith
    nested();
  },
  nestedFn: function () {
    function fn2() {
      console.log(this.name); // empty --> point to window object
    }
    fn2();
  },
};

obj.getDetails();
obj.getName();
obj.nestedArrow();
obj.nestedFn();

// 3.

function makeUser() {
  return {
    user: 'raj',
    ref: this,
  };
}

console.log(makeUser().ref.user); // --> window object return undefined

function makeUser() {
  return {
    user: 'raj',
    ref: function () {
      return this.user; // raj
    },
  };
}

// console.log(makeUser().ref()); // --> ref to user obj return raj

// 4. use of setTimeout

let user = {
  name: 'something',
  logName: function () {
    console.log(this);
  },
};

setTimeout(user.logName, 1000); // --> refer to window object

setTimeout(user.logName(), 1000); // --> refer to user object

setTimeout(() => {
  user.logName(); // --> refer to user object
}, 1000);

// 5. function arguments

var length = 1;

function callback() {
  console.log(this.length);
}

let object = {
  length: 2,
  method: function () {
    console.log(arguments); // --> [callback,2,3,4]
    arguments[0](); // --> 4 -> length of the argument array
  },
};

object.method(callback, 2, 3, 4);

let btn = document.querySelector('button');

btn.addEventListener('click', btnFn);

function btnFn() {
  console.log(this, 'btnnnnn'); --> refer to button element
}

window.addEventListener('click', () => {
  console.log(this, 'window'); --> refer to window element
});

let calc = {
   total:0,
  add(a) {
     this.total += a;
    return this;
  },
 sub(a) {
     this.total -= a;
    return this;
  },
   mul(a) {
     this.total *= a;
    return this;
  },
   div(a) {
     this.total /= a;
    return this;
  },
}

const result = calc.add(10).sub(5).mul(2).div(5)
console.log(result.total) --> result will have calc object, so it will return total of calc obj.


