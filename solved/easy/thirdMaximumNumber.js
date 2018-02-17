/**
 * @param {number[]} nums
 * @return {number}
 * 414
 */
const thirdMax = function(nums) {
  if (nums.length < 3) {
    return findMax(nums);
  }

  const hashTableLengthOfThree = {};

  for (let i = 0; i < nums.length; i++) {
    const keys = Object.keys(hashTableLengthOfThree);
    if (keys.length < 3) {
      hashTableLengthOfThree[nums[i]] = nums[i];
    } else {
      // iterate through the hashtable and figure out which is the smallest.
      const smallest = findMin(keys);
      if (!hashTableLengthOfThree.hasOwnProperty(nums[i])) {
        if (nums[i] > smallest) {
          delete hashTableLengthOfThree[smallest];
          hashTableLengthOfThree[nums[i]] = nums[i];
        }
      }
    }
  }
  const keys = Object.keys(hashTableLengthOfThree);
  if (keys.length < 3) {
    return parseInt(findMax(keys));
  }

  return parseInt(findMin(keys));
};

const findMax = arr => {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    max = Math.max(max, arr[i]);
  }
  return max;
};

const findMin = arr => {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    min = Math.min(min, arr[i]);
  }
  return min;
};

