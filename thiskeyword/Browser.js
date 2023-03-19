// // In Browser - non-strict mode

// console.log(this); // --> window object

// function showValue() {
//     console.log(this , "inside function") // Window oject
// }

// showValue()

// let obj = {
//     name:"shahith",
//     getVal: function () {
//         console.log(this,"inside object") // object itself
//     }
// }

// obj.getVal();

// let obj2 = {
//     name:"raj",
//     fn1: function () {
//         function fn2(){
//             console.log(this) // Window object
//         }
//         fn2()
//     }
// }

// obj2.fn1()

// In Browser - Strict mode

'use strict';

console.log(this); // --> window object

function showValue() {
  console.log(this, 'inside function'); // undefined
}

showValue();

let obj = {
  name: 'shahith',
  getVal: function () {
    console.log(this, 'inside object'); // object itself
  },
};

obj.getVal();

let obj2 = {
  name: 'raj',
  fn1: function () {
    function fn2() {
      console.log(this); // undefined
    }
    fn2();
  },
};

obj2.fn1();
