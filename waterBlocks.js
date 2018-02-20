const waterBlocks = blocks => {
  let start = 0;
  let count = 0;
  for (let i = 1; i < blocks.length; i++) {
    if (blocks[start] < blocks[i]) {
      start = i;
      break;
    }
  }
  const helper = (start, count) => {
    let startIndex = start + 1;
    if (blocks[start + 1] === undefined) {
      return count;
    }
    let endIndex = null;
    for (let i = start + 1; i < blocks.length; i++) {
      let curr = blocks[i];
      if (curr < blocks[i+1]) {
        endIndex = i;
        break;
      }
    }
    console.log(endIndex);
    if (endIndex === null) {
      return count;
    } else {
      count += getWaterCount(startIndex, endIndex, blocks);
    }
    helper(endIndex, count);
  };
  helper(start, count);
  return count;
};

const getWaterCount = (start, end, arr) => {
  let count = 0;
  for (let i = start; i < end + 1; i++) {
    count = count + arr[end] - arr[i];
  }
  return count;
}

console.log(waterBlocks([5, 2, 3, 2, 1, 3])); // 4
/*
#
#
# - # - - #
# # # # - #
# # # # # #
5 2 3 2 1 3
*/
