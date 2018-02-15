/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
  const pairs = [];
  const count = {};
  for (let i = 0; i < nums.length; i++) {
    if (count.hasOwnProperty(nums[i])) {
      count[nums[i]].push(i);
    } else {
      count[nums[i]] = [i];
    }
  }
  for (let j = 0; j < nums.length; j++) {
    const pairToFind = target - nums[j];
    if (!count.hasOwnProperty(pairToFind)) {
      // do nothing
    } else {
      const pair = [];
      if (count[pairToFind].length < 2 && count[pairToFind] === nums[j]) {
        // do nothing
      } else {
        let x = count[nums[j]][0];
        count[nums[j]].splice(0, 1);
        let y = count[pairToFind][0];
        count[pairToFind].splice(0,1);
        if (x !== undefined && y!== undefined) {
          pairs.push([x,y]);
        }
      }
    }
  }
  return pairs[0];
};
