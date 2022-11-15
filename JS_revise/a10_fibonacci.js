/**
 在數學上，費波那契數是以遞迴的方法來定義：

 首幾個費波那契數是：0、1、 1、 2、 3、 5、 8、 13、 21、 34、 55、 89、 144、 233、 377、 610、 987、…。
 編寫一個名為fib的函式，唯一的參數是個整數n，回傳值為斐波那契數列的第n項。
 規則是倒數兩個數相加，可得到下一個數
 如果把序列放在陣列裡，那麼倒數第一＋到數第二，也就是array長度-1, -2 相加就可得到
 *  */

function fibonacci(num) {
  if (num == 0) return 0;
  else if (num == 1) return 1;

  let fibSequence = [0, 1];
  while (fibSequence.length <= num) {
    let lastElement = fibSequence[fibSequence.length - 1];
    let secondLastElement = fibSequence[fibSequence.length - 2];
    fibSequence.push(lastElement + secondLastElement);
  }
  return fibSequence[fibSequence.length - 1];
}
console.log('++++++++++');
console.log(fibonacci(0)); // returns 0
console.log('++++++++++');

console.log(fibonacci(1)); // returns 1
console.log('++++++++++');

console.log(fibonacci(2)); // returns 1
console.log('++++++++++');

console.log(fibonacci(3)); // returns 2
console.log('++++++++++');

console.log(fibonacci(8)); // returns 21
