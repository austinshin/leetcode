/**
 * @param {string} s
 * @param {string} t
 * @return {boolean
 * 392
 */
const isSubsequence = (s, t) => {
  let sArr = s.split('');
  for (let i = 0; i < t.length; i++) {
    if (sArr[0] === t[i]) {
      sArr = sArr.splice(1);
    }
  }
  if (sArr.length === 0) {
    return true;
  }
  return false;
};
