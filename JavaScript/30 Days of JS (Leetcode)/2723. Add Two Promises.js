/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function (promise1, promise2) {
  return new Promise(async (res) => {
    //M1
    promise1.then((val1) => {
      promise2.then((val2) => {
        res(val1 + val2);
      });
    });

    //M2
    const sum = await Promise.all([promise1, promise2]);
    res(sum[0] + sum[1]);

    //M3
    const sum = await Promise.all([promise1, promise2]);
    let ans = sum.reduce((acc, currVal) => acc + currVal);
    res(ans);
  });
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
