// 編寫一個名為isAllUpperCase的函式，唯一的參數是一個String，其功能為來檢查參數中String的所有字母是否為大寫。

function isAllUpperCase(str) {
  if (str.length == 0) return false;
  // 第一種寫法
  // for (let i = 0; i < str.length; i++) {
  //   if (str[i] !== str[i].toUpperCase()) {
  //     return false;
  //   }
  //   return true;
  // }
  // 第二種寫法
  return str == str.toUpperCase();
}

console.log(isAllUpperCase('ABcD')); // returns false
console.log(isAllUpperCase('ABCD')); // returns true
console.log(isAllUpperCase('')); // returns false
console.log(isAllUpperCase('aBCD')); // returns false
console.log(isAllUpperCase('ABCDEFGHIJKLm')); // returns false
// 'a' .charCodeAt( 0 ) > 96  //小寫
// 'A' .charCodeAt( 0 ) < 90  //大寫

/* 後記
因為 for 裡的迴圈的 大於等於沒注意，花掉好幾個小時， Chris 一點就通了，自己也要多理解細節才行。大於和大於等於完全不同  
for 總是搭配 <
才有 0 起始計數的美感 ＿＿ Chris

第二種寫法是直接比較整個 str 是不是和變成大寫的 str 一樣，比較運算回傳的是布林值，所以不是全一樣自然回傳的會是 false 也不用一一檢查。 
*/
