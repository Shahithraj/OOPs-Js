Promise.allPolyfill = function (promises) {
  return new Promise((resolve, reject) => {
    const results = [];
    if (!promises) {
        reject(new Error(`undefined is not iterable`));
      return;
    } else if (!promises.length) {
      resolve(results);
      return;
    } else {
      promises.forEach((promise) => {
        Promise.resolve(promise)
          .then((res) => {
            results.push(res);
            if (promises.length === results.length) {
              resolve(results);
            }
          })
          .catch((err) => reject(new Error(err)));
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
    }, 1000);
  });
}

function action3(occupation) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`I am a ${occupation}`);
    }, 1000);
  });
}

const allPromise = [
  action1('shahith'),
  action2(24),
  action3('Software Developer'),
];

Promise.allPolyfill(allPromise)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
