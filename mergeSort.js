/*
 * mergesort algorithm
 */

const mergeSort = arr => {
  if (arr.length <= 1) {
    return arr;
  } else {
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle, arr.length);
    return merge(mergeSort(left), mergeSort(right));
  }
};

const merge = (left, right) => {
  let i = j = 0;
  const merged = [];
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      merged.push(left[i]);
      i += 1;
    } else {
      merged.push(right[j]);
      j += 1;
    }
     var remaining = i < left.length ? left.slice(i) : right.slice(j);
  }
  return merged.concat(remaining);
};

console.log(mergeSort([4, 5, 8, 3, 2, 1, 9, 7]));
