// polyfill for map

//if(!Array.prototype.map) {

Array.prototype.myMap = function (callback) {
  let arr = this;
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(callback(arr[i]));
  }
  return newArr;
};

//}

let numbers = [1, 2, 3, 4];

let squareNumbers = numbers.myMap((ele) => {
  return ele * ele;
});

console.log(squareNumbers);
