// 編寫一個名為reverse的函式，參數為一個String，回傳值為順序反轉的String。

function reverse(str) {
  let newString = '';
  for (let i = 0; i < str.length; i++) {
    newString += str[str.length - 1 - i];
  }
  return newString;
}

console.log(reverse('abcd')); // returns "dcba"
console.log(reverse('I am a good guy.')); // returns ".yug doog a am I"
console.log(reverse('I am best.')); // returns ".yug doog a am I"

/** 以 index 來看字串長度，從字串長度後面開始累計，就可以反轉字串 */
