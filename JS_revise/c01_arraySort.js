// 編寫一個名為mySort的函式，參數為一個array of numbers，回傳值為一個將元素由小到大排序的array。

/**
 * 使用 quick sort
 * 取第一個元素為標準
 * 設兩個指標變數為最左和最右
 *
 */
function swap(x, y) {
  // 單純數字交換
  let temp = x;
  x = y;
  y = temp;
  // return `x: ${x}, y= ${y}`;
}
// console.log(swap(12, 42));

function swapArrayElement(array, x, y) {
  // 單純數字交換
  let temp = array[x];
  array[x] = array[y];
  array[y] = temp;
  return array;
}
// let test = [42, 1, 2, 3, 88];
// console.log(swapArrayElement(test, 0, test.length - 1));

function mySort(arr) {
  let workingIndex = arr.length - 1;
  // 找 index 0 到 workingIndex 區間最大的數
  while (workingIndex >= 0) {
    let biggest = arr[0];
    let biggestIndex = 0;
    for (let i = 0; i <= workingIndex; i++) {
      if (arr[i] > biggest) {
        biggest = arr[i];
        biggestIndex = i;
      }
    }
    // 將 biggest 與 arr[workingIndex] 互換
    let temp = arr[biggestIndex];
    arr[biggestIndex] = arr[workingIndex];
    arr[workingIndex] = temp;

    workingIndex--;
  }
  return arr;
}

let arr2 = [17, 0, -3, 2, 1, 0.5];
console.log(mySort(arr2));
// returns [-3, 0, 0.5, 1, 2, 17]
