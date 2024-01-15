// polyfill for reduce

//if(!Array.prototype.reduce) {

Array.prototype.myReduce = function (callback, initialValue) {
  let arr = this;
  let index = 0;
  let accumulator = initialValue;
  if (accumulator == null || accumulator == undefined) {
    accumulator = arr[0];
    index = 1;
  }
  for (let i = index; i < arr.length; i++) {
    accumulator = callback(accumulator, arr[i]);
  }
  return accumulator;
};

//}

let numbers = [1, 2, 3, 4];

let sum = numbers.myReduce((prev, curr) => {
  return prev + curr;
});

console.log(sum);
