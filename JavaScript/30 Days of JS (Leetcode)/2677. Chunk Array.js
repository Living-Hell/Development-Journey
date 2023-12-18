/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
  let res = [],
    i;
  if (arr.length === 0) return res;
  for (i = 0; i + size < arr.length; i += size) {
    res.push(arr.slice(i, i + size));
  }
  res.push(arr.slice(i));
  return res;
};
