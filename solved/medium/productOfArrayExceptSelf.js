/**
 * @param {number[]} nums
 * @return {number[]}
 * 238
 */
var productExceptSelf = function(nums) {
  // naive implementation
  let arr = [];
  for (let j = 0; j < nums.length; j++) {
    let multiplier = 1;
    for (let k = 0; k < nums.length; k++) {
      if (j === k) {
        //skip
      } else {
        multiplier *= nums[k];
      }
    }
    arr.push(multiplier);
  }
    return arr;
};
