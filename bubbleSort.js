/*
 * bubble sort algorithm
 */

const bubbleSort = array => {
  let noPasses = true;
  while (noPasses) {
    noPasses = false;
    for (let i = 0; i < array.length; i++) {
      let next = i + 1;
      if (next !== array.length) {
        if (array[i] > array[next]) {
          swap(array, i, next);
          noPasses = true;
        }
      }
    }
  }
  return array;
};

const swap = (array, i, j) => {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

console.log(bubbleSort([7,3,2,6,3,2,5,7,9,1,3, 2, 1])); // [1, 1, 2, 2, 2, 3, 3, 3, 5, 6, 7, 7, 9]
