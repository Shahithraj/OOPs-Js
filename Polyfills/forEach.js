//Polyfill for forEach

// if(!Array.prototype.forEach) {

Array.prototype.myForEach = function (callback) {
  let arr = this;
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
};

//}

let names = ['shahith', 'abith', 'raj'];

names.myForEach((ele) => {
  console.log(ele);
});
