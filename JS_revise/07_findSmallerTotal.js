// 編寫一個名為findSmallerTotal的函式，其參數為一個整數的array以及另一個整數，回傳值為array中小於第二個參數的所有元素的總和。

function findSmallerTotal(array, number) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < number) {
      total += array[i];
    }
  }
  return total;
}

console.log(findSmallerTotal([1, 2, 3], 3)); // returns 3
console.log(findSmallerTotal([1, 2, 3], 1)); // returns 0
console.log(findSmallerTotal([3, 2, 5, 8, 7], 999)); // returns 25
console.log(findSmallerTotal([3, 2, 5, 8, 7], 0)); // returns 0
