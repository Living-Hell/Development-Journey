/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  let memo = new Map();
  return function (...args) {
    const inp = JSON.stringify(args);
    if (memo.has(inp)) return memo.get(inp);
    const result = fn(...args);
    memo.set(inp, result);
    return result;
  };
}

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */
