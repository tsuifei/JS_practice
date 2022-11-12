/*
編寫一個名為table9to9的函式，它打印出九九乘法表的內容。
table9to9();
// 1 x 1 = 1
// 1 x 2 = 2
// 1 x 3 = 3
// ...
// 1 x 9 = 9
// 2 x 1 = 2
// 2 x 2 = 4
// ...
// 9 x 9 = 81
*/

function table9to9() {
  for (let i = 1; i <= 9; i++) {
    console.log(i);
    for (let j = 1; j <= 9; j++) {
      console.log(`${i} x ${j} = ${i * j}`);
    }
  }
}
// table9to9();

/* 可給參數指定要輸出的數字 */

function multiplicationTable(num1, num2) {
  for (let i = num1; i <= num2; i++) {
    for (let j = 1; j <= 9; j++) {
      console.log(`${i} x ${j} = ${i * j}`);
    }
  }
}

multiplicationTable(4, 4);
