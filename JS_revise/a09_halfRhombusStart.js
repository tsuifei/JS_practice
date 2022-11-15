// 編寫一個名為 09_halfRhombusStart 的函式，功能為按以下模式打印出星星層：

function halfRhombusStart(num) {
  // 正常次序 n 層
  for (let i = 1; i <= num; i++) {
    let star = '';
    for (let j = 1; j <= i; j++) {
      star += '*';
    }
    console.log(star);
  }
  // 倒反次序的 n -1 層
  for (let i = num - 1; i >= 1; i--) {
    let star = '';
    for (let j = 1; j <= i; j++) {
      star += '*';
    }
    console.log(star);
  }
}

halfRhombusStart(1);
// *
console.log('====================');
halfRhombusStart(2);
// *
// **
// *
console.log('====================');
halfRhombusStart(3);
// *
// **
// ***
// **
// *
console.log('====================');
halfRhombusStart(4);
// * i = 1
// ** i = 2
// *** i = 3
// **** i = 1, num = 4
// *** num - 1
// ** num - 2
// * num - 4

/**
 * 可以將菱形拆成上下，在第一層的時候遞增，第二層時，因為是遞減。
 * 利用兩個迴圈，將星星印出來，但是在第二層遞減時，利用 num 長度 -1 的方式，以for 印出
 */
