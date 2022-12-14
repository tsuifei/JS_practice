// 編寫一個名為pyramid的函式，功能為按以下模式打印出星星層：
/**  等插數列  公式：
 * a1 = 1, d = 2
 * an = a1 + (n-1)d = 1+(n-1)2 = 2n-1
 * 四層 的最後一層為 2 * 4 - 1
 * ___*  3 space 1 start
 * __**  2 space 5 start
 * _***  1 space 5 start
 * ****  0 space 7 start
 *
 * 公差數是 2
 * 左邊的空格為遞減，且第一排的空格為高度 n - 1
 *
 * 先把 空格 space 和 的函式寫出來
 */

function printStart(space, star) {
  let result = '';
  for (let i = 0; i < space; i++) {
    result += ' ';
  }
  for (let i = 0; i < star; i++) {
    result += '*';
  }
  return result + '\n';
}

function pyramid(n) {
  let star = 1;
  let space = n - 1;
  let print = '';
  while (space >= 0) {
    print += printStart(space, star);
    star += 2; // 公差數
    space -= 1;
  }
  return print;
}

let result1 = pyramid(1);
console.log(result1);
//*
console.log('=============');
let result2 = pyramid(2);
console.log(result2);
console.log('=============');
//  *
// ***
let result3 = pyramid(4);
console.log(result3);
console.log('=============');
//
//   ***
//  *****
// *******
