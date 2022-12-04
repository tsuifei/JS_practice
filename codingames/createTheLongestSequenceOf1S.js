/**
 * 在二進位的連續序列裡，找出可以以 1 取代 0 ，而可得到最長的連續 1 並回傳其長度
 * ex. 01010 把中間的 0 取代成 1 就會得到 長度 3 的 1 如 01110
 */

let bits = '01010';

function getLongestSequence1(bits) {
  // 以 0 分開
  bits = bits.split('0');
  bits = bits.map((b) => b.length);
  console.log(bits);
  bits = bits.map((current, index, array) => {
    return array[index - 1] > array[index + 1]
      ? current + array[index - 1] + 1
      : current + array[index + 1] + 1;
  });
  // 取得每個區段後，得到每個區塊的長度，長度來做排序，即可得到最長的數
  bits = bits.sort((a, b) => b - a);

  return bits;
}

let result = getLongestSequence1(bits);
console.log(result);
