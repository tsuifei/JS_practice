// 編寫一個名為isUpperCase的函式，唯一的參數是一個 String，其功能為來檢查參數中String的第一個字母是否為大寫。

function isUpperCase(str) {
  if (str.length == 0) return false;
  for (let i = 0; i <= str.length; i++) {
    if (str[i] == str[i].toUpperCase()) {
      // console.log(str[i]);
      return true;
    } else return false;
  }
}

// console.log(isUpperCase('ABcD')); // returns true
// console.log(isUpperCase('ABCD')); // returns true
// console.log(isUpperCase('')); // returns false
// console.log(isUpperCase('aBCD')); // returns false
