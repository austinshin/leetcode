/**
 * 532 easy
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
  if (k < 0) return 0;
  let hashTable = {};
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    if (hashTable.hasOwnProperty(nums[i])) {
      hashTable[nums[i]] += 1;
    } else {
      hashTable[nums[i]] = 1;
    }
  }
  for (let key in hashTable) {
    let diff = key - k;
    if (hashTable.hasOwnProperty(diff)) {
      if (diff == key) {
        if (hashTable[key] > 1) {
          result.push([key, diff]);
        }
      } else {
        result.push([key, diff]);
      }
    }
  }
  return result.length;
};

