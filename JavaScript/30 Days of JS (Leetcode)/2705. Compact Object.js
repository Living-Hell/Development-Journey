/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function (obj) {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  if (Array.isArray(obj)) {
    const res = [];
    for (let i = 0; i < obj.length; i++) {
      let arr = compactObject(obj[i]);
      if (arr) {
        res.push(arr);
      }
    }
    return res;
  }

  const res = {};
  for (let key in obj) {
    const arr = compactObject(obj[key]);
    if (arr) {
      res[key] = arr;
    }
  }
  return res;
};
