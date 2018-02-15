/**
 * @param {number} num
 * @return {boolean}
 * 507
 */
var checkPerfectNumber = function(num) {
    if (num === 1) {
        return false;
    }
    let nums = getDivisors(num);
    let res = nums.reduce((total, amt) => total + amt);
    console.log(res);
    return num === res;
};

var getDivisors = function(num) {
    let a = [1];
    let b = [];

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) { // if divisible, add it to list
            if (num/i === i) {
                a.push(i);
            } else {
                a.push(i);
                b.push(num/i);
            }
        }
    }

    let c = [...a, ...b];
    return c;

}

