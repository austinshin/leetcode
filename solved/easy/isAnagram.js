/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  const hashTable = {};
  for (let i = 0; i < s.length; i++) {
    if (!hashTable.hasOwnProperty(s[i])) {
      hashTable[s[i]] = 1;
    } else {
      hashTable[s[i]] += 1;
    }
  }

  for (let j = 0; j < t.length; j++) {
    if (!hashTable.hasOwnProperty(t[j])) {
      return false;
    } else {
      hashTable[t[j]] -= 1;
      if (hashTable[t[j]] === -1) {
        return false;
      }
    }
  }

  for (let k in hashTable) {
    if (hashTable[k] !== 0) {
      return false;
    }
  }
  return true;
};

console.log(isAnagram('a', 'a'));
console.log(isAnagram('abfde', 'afdbe'));
