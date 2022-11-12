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

// 編寫一個名為isAllUpperCase的函式，唯一的參數是一個 String，其功能為來檢查參數中String的所有字母是否為大寫。

function isAllUpperCase(str) {
  if (str.length == 0) return false;
  for (let i = 0; i < str.length; i++) {
    // let code = str[i].charCodeAt(0);
    // if (code > 96) return false;
    // console.log();

    if (str[i] !== str[i].toUpperCase()) {
      return false;
    }
  }
  return true;
}
// isAllUpperCase('ABcD');
console.log(isAllUpperCase('ABcD')); // returns false
console.log(isAllUpperCase('ABCD')); // returns true
console.log(isAllUpperCase('')); // returns false
console.log(isAllUpperCase('aBCD')); // returns false

// 'a' .charCodeAt( 0 ) > 96  //小寫
// 'A' .charCodeAt( 0 ) < 90  //大寫

/* 後記
因為 for 裡的迴圈的 大於等於沒注意，花掉好幾個小時， Chris 一點就通了，自己也要多理解細節才行。大於和大於等於完全不同  
for 總是搭配 <
才有 0 起始計數的美感 ＿＿ Chris
*/
