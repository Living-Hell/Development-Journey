/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function (arr, fn) {
  // arr.sort(function(a,b){
  //     return fn(a) - fn(b);
  // });
  arr.sort((a, b) => fn(a) - fn(b));
  return arr;
};
