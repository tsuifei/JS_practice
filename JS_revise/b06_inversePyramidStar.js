// 編寫一個名為inversePyramid的函式，功能為按以下模式打印出星星層：
/**
 *
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

function inversePyramid(n) {
  let star = 2 * n - 1;
  let space = 0;
  let print = '';
  while (star > 0) {
    print += printStart(space, star);
    star -= 2;
    space += 1;
  }
  return print;
}

console.log(inversePyramid(4));
// *******
//  *****
//   ***
//    *
