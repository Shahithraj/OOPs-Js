// let person = {
//   alive: true,
// };

// let music = {
//   plays: true,
// };

// person.__proto__ = music;

// console.log(music);
// console.log(person);

let options = {
  id: '1',
  clas: 'dropdown-item',
};

function callCommonFn(functionName, option) {
  let fn = window[functionName]; // it will not work for local scope such as let and const which is function assigning to value
  if (typeof fn == 'function') {
    fn.call(option);
  }
}

function dropdown() {
  const { id, clas } = this;
  console.log(id, clas);
}

function activeClass() {}
// console.log(this);

callCommonFn('dropdown', options);
