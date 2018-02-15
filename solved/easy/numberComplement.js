/**
 * @param {number} num
 * @return {number}
 * 476
 */
var findComplement = function(num) {
  // 1. Convert decimal to binary.
  strNum = convertToBinary(num);

  // 2. Find the binary complement by iterating through.
  for (let i = 0; i < strNum.length; i++) {
    if (strNum[i] === '0') {
      strNum[i] = 1;
    } else {
      strNum[i] = 0;
    }
  }

  // 3. Convert from binary to decimal.
  let total = 0;
  for (let j = 0; j < strNum.length; j++) {
    if (strNum[j] === 1) {
      total += Math.pow(2, j);
    }
  }
  return total;
};

var convertToBinary = (num) => {
  let binaryArr = [];
  let result = '';
  while (num !== 0) {
    let toAdd = ''
    if (num % 2 === 0) {
      toAdd = '0'
      binaryArr.push(toAdd)
    } else {
      toAdd = '1'
      binaryArr.push(toAdd);
    }
    result = toAdd + result;
    num = Math.floor(num / 2);
  }
  return binaryArr;
};

//binary complement algorithm:
//1. if even, add a 0
//2. if odd, add a 1
//3. add it to the left...
//4. divide by 2 (floor)
//5. go to step 1.

