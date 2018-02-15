/**
 * @param {number[][]} envelopes
 * @return {number}
 * #354
 */
const maxEnvelopes = function(envelopes) {
  let sorted = envelopes.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1]
    } else {
      return a[0] - b[0];
    }
  });
  let currWidth = 0;
  let currHeight = 0;
  let count1 = 0;
  for (let i = 0; i < sorted.length; i++) {
    if (currWidth < sorted[i][0] && currHeight < sorted[i][1]) {
      currWidth = sorted[i][0];
      currHeight = sorted[i][1];
      count1 += 1;
    }
  }
  let sorted2 = envelopes.sort((a, b) => {
      return a[1] - b[1]
  });
  currWidth = sorted[0][0];
  currHeight = sorted[0][1];
  let count2 = 1;
  for (let j = 0; j < sorted2.length; j++) {
    if (currWidth < sorted[j][0] && currHeight < sorted[j][1]) {
      currWidth = sorted[j][0];
      currHeight = sorted[j][1];
      count2 += 1;
    }
  }
  return Math.max(count2, count1);
};

// tests
console.log(maxEnvelopes([[8,100],[2,100],[3,200],[4,300],[5,500],[5,400],[5,250],[6,370],[6,360],[7,380]]));
console.log(maxEnvelopes([[30,50],[12,2],[3,4],[12,15]]));


/*
 * 1. sort the array by ascending width and then by height
 * 2. find the longest subsequence by recursion? use dp/memoization to make it faster?
 */
