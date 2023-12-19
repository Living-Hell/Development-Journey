/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */

//M1
var join = function (arr1, arr2) {
  let res = {};
  for (let i = 0; i < arr1.length; i++) {
    res[arr1[i].id] = arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    if (res[arr2[i].id])
      for (const key in arr2[i]) res[arr2[i].id][key] = arr2[i][key];
    else res[arr2[i].id] = arr2[i];
  }
  return Object.values(res);
};

//M2
var join = function (arr1, arr2) {
  let res = {};
  arr1.forEach((item) => {
    res[item.id] = item;
  });
  arr2.forEach((item) => {
    if (res[item.id]) {
      Object.keys(item).forEach((key) => {
        res[item.id][key] = item[key];
      });
    } else {
      res[item.id] = item;
    }
  });
  return Object.values(res);
};
