// 編寫一個名為swap的函式，參數為一個String，回傳值為大小寫反轉的String。

function swap(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i].charCodeAt(0) >= 65 && str[i].charCodeAt(0) <= 90) {
      result += String.fromCharCode(str[i].charCodeAt(0) + 32);
      // console.log(str[i].charCodeAt(0));
      // console.log(str[i]);
    } else if (str[i].charCodeAt(0) >= 97 && str[i].charCodeAt(0) <= 122) {
      result += String.fromCharCode(str[i].charCodeAt(0) - 32);
      // console.log(str[i]);
    } else {
      result += str[i];
    }
  }
  return result;
}

// 另一重寫法，遇到大寫使用toLowerCase() 轉成小寫
// 遇到小寫使用toUpperCase() 轉成大寫

console.log(swap('Aloha')); // returns "aLOHA"
console.log(swap('Love you, Paris')); // returns "lOVE YOU."

// ASCII碼：A-65、a-97，相差32。
// String.fromCharCode(nom.charCodeAt(0)+32) 大寫變小寫
// String.fromCharCode(nom.charCodeAt(0)-32) 小寫變大寫
