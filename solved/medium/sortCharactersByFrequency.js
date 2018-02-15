/**
 * @param {string} s
 * @return {string}
 * 451
 */
const frequencySort = s => {
  let frequencySortedString = '';
  const storage = {};

  for (let i = 0; i < s.length; i++) {
    if (!storage.hasOwnProperty(s[i])) {
      storage[s[i]] = 1;
    } else {
      storage[s[i]] += 1;
    }
  }

  const sortedObject = [];
  for (const key in storage) {
    sortedObject.push([key, storage[key]]);
  }
  sortedObject.sort((a, b) => a[1] - b[1]);
  for (let j = sortedObject.length - 1; j >= 0; j--) {
    let count = sortedObject[j][1];
    while (count !== 0) {
      frequencySortedString += sortedObject[j][0];
      count--;
    }
  }
  return frequencySortedString;
};
