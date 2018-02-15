/**
 * @param {number[]} nums
 * @return {number}
 * 561
 */
var arrayPairSum = function(nums) {
     nums.sort(function(a,b){return a-b});
    var count = 0;
    for (var i = 0; i < nums.length; i+=2) {
        count = count + nums[i];
    }
    return count;

};
