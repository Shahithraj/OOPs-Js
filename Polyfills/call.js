// polyfill for call

//if(!Function.prototype.call) {

Function.prototype.myCall = function (thisContext, ...args) {
  thisContext = thisContext || window;
  thisContext.fn = this;
  thisContext.fn(...args);
  //   {
  //     name : "shahith",
  //     agew : 24,
  //     fn : getDetails() {

  //     }
  //   }
  delete thisContext.fn;
};

//}

let student = {
  name: 'shahith',
  age: 24,
};

function getDetails(price) {
  console.log(`${this.name}`, price);
}

getDetails.myCall(student, '2000');
