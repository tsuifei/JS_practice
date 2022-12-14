// 回文是指，正著讀或反著讀都一樣的句子。例如:【上海自來水來自海上】是迴文。寫一個名為palindrome的函式，它接受一個String作為參數，回傳值為一個boolean，告訴我們參數是否為回文。
/**
 * 先把字串反轉過來，再與原字串做比對
 */

const palindrome = (str) => {
  let newStr = str.split('').reverse().join('');
  // console.log(newStr);
  return newStr === str;
};

console.log(palindrome('bearaeb')); // true
console.log(palindrome('whatever revetahw')); // true
console.log(palindrome('Aloha, how are you today?')); // false
