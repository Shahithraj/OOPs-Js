Promise.racePolyfill = function (promises) {
  return new Promise((resolve, reject) => {
    if (!promises || !promises.length) {
      reject(new Error(`undefined is not iterable`));
      return;
    } else {
      promises.forEach((promise) => {
        Promise.resolve(promise)
          .then((res) => {
            resolve(res);
            return;
          })
          .catch((err) => {
            reject(new Error(err));
            return;
          });
      });
    }
  });
};

function action1(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`My name is ${name}`);
    }, 1000);
  });
}

function action2(age) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`My age is ${age}`);
    }, 300);
  });
}

function action3(occupation) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(`I am a ${occupation}`);
    }, 500);
  });
}

const allPromise = [
  action1('shahith'),
  action2(24),
  action3('Software Developer'),
];

Promise.racePolyfill([])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
