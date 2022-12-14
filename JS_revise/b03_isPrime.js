// 編寫一個名為isPrime的函式，它接受一個整數作為參數，回傳值為一個boolean，告訴我們參數是否為一個質數。

function isPrime(num) {
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < i; j++) {
      if (i % j == 0) {
        return true;
      } else return false;
    }
  }
}

console.log(isPrime(1)); // returns false
console.log(isPrime(5)); // returns true
console.log(isPrime(91)); // returns false
console.log(isPrime(1000000)); // returns false

// 6. 印出100以內的質數。(39:18 )
// 質數:只能被1和自己整除。
// 判斷質數的方法，迴圈，判斷每一個i是質數
// 所有2的倍數都不是質數

// 第一層for把100每一個數字都跑一遍

//第二層for，判斷是否是質數，用每一個數來除以1-100，看看能被整除幾次，如果只有兩次，就列印。
//用 count 來記錄被整除的次數，每次 count 都要歸零，好讓他下一個迴圈可歸零;
function primeNumberFilter(num) {
  let count = 0;
  let result = '';
  for (let i = 1; i < num; i++) {
    for (let j = 1; j <= i; j++) {
      if (i % j == 0) {
        count++;
      }
    }
    if (count == 2) {
      result += i + ' ';
    }
    count = 0;
  }
  return result;
}

// 如果要得到 100 平方米，有好幾種方法：
// 100 10 * 10
//     4 * 25
//     2 * 50
//     1 * 100
//     2,5 * 40
//     1.25 * 80
// 找出其種規律得到，兩個數最大範圍是 10 * 10
// 但要等同需要兩邊的數一邊增加、一邊減少，不會兩邊都一起增加，這就是規律。

// 6.用平方數做第六題，使用 Math.sqrt()給100可得到10。

function primeNumberFilter2(num) {
  let count = 0;
  let result = '';
  for (let i = 2; i < num; i++) {
    for (let j = 1; j <= Math.sqrt(i); j++) {
      if (i % j == 0) {
        count++;
      }
    }
    if (count == 1) {
      result += i + ' ';
    }
    count = 0;
  }
  return result;
}
