/**
 * @param {string} s
 * @return {string}
 * 557
 */
var reverseWords = function(s) {
    return s.split(" ").reverse().join(' ').split('').reverse().join('');
};
