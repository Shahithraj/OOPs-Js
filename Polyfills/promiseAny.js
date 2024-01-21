Promise.anyPolyfill = function (promises) {
  return new Promise((resolve, reject) => {
    let settledPromises = 0;
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
            settledPromises++;
            if (settledPromises === promises.length) {
              reject(new AggregateError('All promises are rejected'));
            }
          });
      });
    }
  });
};

function action1(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(`My name is ${name}`);
    }, 1000);
  });
}

function action2(age) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(`My age is ${age}`);
    }, 800);
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

Promise.anyPolyfill(allPromise)
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
