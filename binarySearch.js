// binary search of a sorted array.

const binarySearch = (arr, element) => {
  console.log(arr);
  let midIndex = Math.floor(arr.length / 2);
  let middle = arr[midIndex];
  if (middle === element) {
    console.log('found');
    return true;
  }
  if (arr.length === 1) {
    console.log('not found');
    return false;
  }
  if (middle < element) {
    //search right half
    return binarySearch(arr.slice(midIndex), element);
  } else {
    return binarySearch(arr.slice(0, midIndex), element);
  }
};

binarySearch([1, 2, 5, 8, 11, 14, 20, 25, 30], 30);
