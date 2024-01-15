// polyfill for bind

//if(!Function.prototype.bind) {

Function.prototype.myBind = function (thisContext, ...args) {
  thisContext = thisContext || window;
  thisContext.fn = this;
  thisContext.fn;
  //   {
  //     name : "shahith",
  //     agew : 24,
  //     fn : getDetails() {

  //     }
  //   }
  return function (...args2) {
    return thisContext.fn(...args, ...args2);
  };
};

//}

Function.prototype.myBind2 = function (...args) {
  let fn = this;

  let params = args.slice(1); // cut the 0th index

  return function (...args2) {
    // any one in below can be used
    // return fn.apply(args[0], [...params, ...args2]);
    return fn.call(args[0], ...params, ...args2);
  };
};

let student = {
  name: 'shahith',
  age: 24,
};

function getDetails(price, text) {
  console.log(`${this.name}`, price, text);
}

let fun = getDetails.myBind(student);
fun('2000', 'arg in second call');

let fun2 = getDetails.myBind2(student);
fun2('2000', 'arg in second call');
