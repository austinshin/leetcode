/**
 * @param {string[]} words
 * @return {string[]}
 * 500
 */
var findWords = function(words) {
    let row1 = {q: 1, w: 1, e: 1, r: 1, t: 1, y: 1, u: 1, i: 1, o: 1, p: 1};
    let row2 = {a: 1, s: 1, d: 1, f: 1, g: 1, h: 1, j: 1, k: 1, l: 1};
    let row3 = {z: 1, x: 1, c: 1, v: 1, b: 1, n: 1, m: 1};
    const result = [];
    for (let i = 0; i < words.length; i++) {
      let currStr = words[i];
      for (let j = 0; j < currStr.length; j++) {
        // row 1
        if (!row1.hasOwnProperty(currStr[j].toLowerCase())) {
          break;
        } else {
          if (j === currStr.length - 1) {
            result.push(currStr);
          }
        }
      }
      for (let j = 0; j < currStr.length; j++) {
        // row 2
        console.log(currStr[j]);
        if (!row2.hasOwnProperty(currStr[j].toLowerCase())) {
          break;
        } else {
          if (j === currStr.length - 1) {
            result.push(currStr);
          }
        }
      }
      for (let j = 0; j < currStr.length; j++) {
        // row 3
        if (!row3.hasOwnProperty(currStr[j].toLowerCase())) {
          break;
        } else {
          if (j === currStr.length - 1) {
            result.push(currStr);
          }
        }
      }
    }
    return result;
};
