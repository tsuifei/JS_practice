// 編寫一個名為position的函式，唯一的參數是一個String，其功能為找到參數String當中的第一個大寫字母，並且回傳大寫字母的值以及其index位置。
function position(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] == str[i].toUpperCase()) {
      return `${str[i]} ${i}`;
    }
    return -1;
  }
}
// console.log(position('abcd')); // prints -1
// console.log(position('AbcD')); // prints A 0
// console.log(position('abCD')); // prints C 2

/**
 * 回傳所有字串裡的大寫與 index
 */

function getPositionArr(str) {
  let arr = [];
  if (str.length == 0) return -1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == str[i].toUpperCase()) {
      arr.push(str[i], i);
    }
  }
  return arr;
}

console.log(getPositionArr('abcd')); // prints -1
console.log(getPositionArr('AbcD')); // prints A 0
console.log(getPositionArr('abCD')); // prints C 2
