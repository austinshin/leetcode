/**
 * @param {number[]} nums
 * @return {number}
 * 136
 */
const singleNumber = function(nums) {
  const seen = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num in seen) {
      seen[num] += 1;
    } else {
      seen[num] = 1;
    }
  }
  for (const key in seen) {
    if (seen[key] === 1) {
      return parseInt(key);
    }
  }
};
