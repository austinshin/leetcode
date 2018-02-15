/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 * 728
 */
var selfDividingNumbers = function(left, right) {
    //get range from left to right
    //add them to an array.
    //iterate through array
    //convert it to a string
    //create another for loop comparing the original.
    // if zero, remove.
    // if not divisible, remove.
    //return output.
    var range = [];
    var result = [];
    for (var i = left; i <= right; i++) {
        range.push(i);
    }

    for (var j = 0; j < range.length; j++) {
        var num = range[j];
        var strNum = JSON.stringify(num);
        var state = true;
        for (var k = 0; k < strNum.length; k++) {
            if (strNum[k] === '0') {
                state = false;
            }
            if (num % parseInt(strNum[k]) !== 0) {
                state = false;
            }
        }
        if (state) {
            result.push(num);
        }
    }
    return result;
};
