/**
 * Chevaux de course
 * 每次給幾個積分數字，然後查找出兩次之間最小差異的數
 * 所以先把這謝數字放入陣列中，先排序，再利用 map 去減去前面那個元素，並放入另一個陣列中
 * 把陣列再做一次排序，在去第一個
 */

const arrNumbers = [5, 15, 17, 3, 8, 11, 28, 6, 55, 7];
// const arrNumbers = [1, 3];

function getPowersDifference(arrNumbers) {
  // 排序
  arrNumbers = arrNumbers.sort((a, b) => a - b);
  // 取兩束之間的差異
  let newArrNumbers = arrNumbers
    .map((current, index, array) => current - array[index - 1])
    .slice(1)
    .sort((a, b) => a - b);
  console.log(newArrNumbers);

  return newArrNumbers[0];
}

let answer = getPowersDifference(arrNumbers);
console.log(answer);
