// CTCI 1.2
// Austin Shin

const checkPermutation = function (strA, strB) {
  if (strA.length !== strB.length) {
    return false;
  }
  let arrA = strA.split('');
  let arrB = strB.split('');

  for (var i = 0; i < arrA.length; i++) {
    let index = arrB.indexOf(arrA[i]);
    if (index === -1) {
      return false;
    } else {
      arrB.splice(index, 1);
    }
  }
  return true;
}

let strA = 'raw ear a';
let strB = ' a arewar';
checkPermutation(strA, strB);
