/**
 * @param {number} x
 * @return {number}
 * 7
 */
var reverse = function(x) {
    //−2,147,483,648 to 2,147,483,647
    let flag = false;
    if (x < 0) {
        flag = true;
        x = 0 - x;
    }
    let mod;
    let p = x;
    let res = 0;

    while (p > 0) {
        mod = p % 10;
        res = res * 10 + mod;
        p = p / 10 - mod / 10; // p = 123.4 - 0.4
    }

    if (flag) {
        res = 0 - res;
    }

    //overflow
    if (res > 2147483647 || res < -2147483648) {
        return 0;
    }

    return res;
};
