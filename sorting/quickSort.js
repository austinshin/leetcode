const quickSort = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  quickSortHelper(arr, left, right);
  return arr;
};

const quickSortHelper = (arr, left, right) => {
  let index = partition(arr, left, right);
  if (left < index - 1) {
    quickSortHelper(arr, left, index - 1);
  }
  if (index < right) {
    quickSortHelper(arr, index, right);
  }
  return arr;
};

const swap = (i, j, arr) => {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

const partition = (arr, left, right) => {
  let index = Math.floor((left + right) / 2);
  let pivot = arr[index];
  while (left < right) {
    while (arr[left] < pivot) {
      left++;
    }
    while (arr[right] > pivot) {
      right--;
    }
    if (left <= right) {
      swap(left, right, arr);
      left++;
      right--;
    }
  }
  return left;
};

console.log(quickSort([4, 6, 8, 1, 3, 2, 9, 10, 11, 5]));


/*
 * nlogn avg, worst case is n^2 if partition is set as the first element
 * pseudocode for quickSort
 *
 */
