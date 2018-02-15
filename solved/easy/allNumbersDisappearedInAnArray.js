/**
 * @param {number[]} nums
 * @return {number[]}
 * 448
 */
var findDisappearedNumbers = function(nums) {
    //create an array from 1 to nums.length
    //iterate through nums array, if seen, remove it from array.
    //return array
   var result = [];
   var test = {};
   for (var i = 1; i < nums.length + 1; i++) {
     test[i] = i;
   }
   for (var j = 0; j < nums.length; j++) {
     var strNum = '' + nums[j];
     if (test.hasOwnProperty(strNum)) {
       delete(test[strNum]);
     }
   }

   for (var key in test) {
     result.push(test[key]);
   }
   return result;

};

