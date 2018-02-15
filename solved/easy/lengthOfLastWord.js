/**
 * @param {string} s
 * @return {number}
 * 58
 */
var lengthOfLastWord = function(s) {
    let arr;
    arr = s.split(' ');
    while (arr[arr.length-1] === '') {
        arr.pop();
        if (arr.length === 0) {
            return 0;
        }
    }

    return arr[arr.length-1].length;
};
