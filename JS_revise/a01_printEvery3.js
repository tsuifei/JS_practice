// 編寫一個名為“printEvery3()”的函式，它打印出等差數列 1, 4, 7, …, 88。

function printEveryNum(maxNum, num) {
  for (let i = 1; i <= maxNum; i += num) {
    console.log(i);
  }
}

printEveryNum(88, 3);

// 此函式可給最大數與間隔為參數，例如每個3的倍數直到88
