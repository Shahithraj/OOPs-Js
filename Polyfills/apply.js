// polyfill for apply

//if(!Function.prototype.apply) {

Function.prototype.myApply = function (thisContext, args = []) {
  if (!Array.isArray(args)) {
    throw new Error('Excepted array as an argument');
  }
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

function getDetails(num, dob) {
  console.log(`${this.name}`, num, dob);
}

getDetails.myApply(student, ['5', '15/05/1999']);
