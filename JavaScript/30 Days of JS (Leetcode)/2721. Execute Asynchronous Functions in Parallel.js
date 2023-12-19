/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = async function (functions) {
  return await new Promise((res, rej) => {
    let arr = Array(functions.length);
    let toResolve = functions.length;

    for (let i = 0; i < functions.length; i++) {
      functions[i]()
        .then((result) => {
          arr[i] = result;
          if (--toResolve === 0) res(arr);
        })
        .catch(rej);
    }
  });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
