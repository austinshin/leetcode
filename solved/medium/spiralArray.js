const spiralArray = arr => {
  let result = [];
  const helper = (arr, result) => {
    if (arr.length === 0 || arr[0].length === 0) {
      return result;
    }
    const first = arr[0];
    let last = arr[arr.length - 1];
    if (arr.length === 1) {
      last = [];
    }
    arr.splice(0, 1);
    arr.splice(arr.length - 1, 1);
    result = result.concat(first);
    if (first.length === 1 && last.length === undefined) {
      return result;
    }
    for (let i = 0; i < arr.length; i++) {
      result = result.concat(arr[i][arr[i].length - 1]);
      arr[i].splice(arr[i].length - 1, 1);
    }
    for (let j = last.length - 1; j >= 0; j--) {
      result = result.concat(last[j]);
    }
    for (let k = arr.length - 1; k >= 0; k--) {
      if (arr[k][0]) {
      result = result.concat(arr[k][0]);
      }
      arr[k].splice(0, 1);
    }
    return helper(arr, result);
  };
  return helper(arr, result);
};

console.log(spiralArray([[1],[2],[3]]));
//console.log(spiralArray([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
