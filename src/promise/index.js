const someTimesWillHappen = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Hey!");
    } else {
      reject("Whoops!");
    }
  });
};

someTimesWillHappen()
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

const someTimesWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve("True");
      }, 2000);
    } else {
      const error = new Error("Whooops!");
      reject(error);
    }
  });
};

someTimesWillHappen2()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

Promise.all([someTimesWillHappen2(), someTimesWillHappen()])
    .then((res) =>console.log(["Array of results", res]))
    .catch(err => console.error('Array of errors', err))
