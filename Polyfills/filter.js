// polyfill for filter

//if(!Array.prototype.filter) {

Array.prototype.myFilter = function (callback) {
  let arr = this;
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

//}

let numbers = [1, 2, 3, 4];

let oddNumbers = numbers.myFilter((ele) => {
  return ele % 2 == 1;
});

let evenNumbers = numbers.myFilter((ele) => {
  return ele % 2 == 0;
});

console.log(oddNumbers);
console.log(evenNumbers);
