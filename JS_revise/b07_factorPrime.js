// 編寫一個名為factorPrime的函式，唯一的參數是個整數n，回傳值是一個String，表示n的質因數分解結果。
/**
 * 將數字以質因數分解的方式解開
 * 如果數字是120
 * 120 / 2 = 60
 * 60/2 =30
 * 30/2=15 這時無法被 2 整除，開始使用 3 除 結果
 * 15/3 = 5
 * 得到的公式是 2 的 3 次方 乘以 3 再乘以 5
 *
 * 1. 是否可以整除，如果是，n 會繼續被除以 p
 * n % p === 0 --> n = n/p  --> n/=p
 * 2.如果無法被整除，讓 p + 1
 * 3. 迴圈停止條件為 如果 p 繼續＋1 直到 p <= 餘數 迴圈就停止
 *
 */

function factorPrime(n) {
  let answer = n + ' = '; // 120 =
  let p = 2; // 第一個質數 拿來除 n
  while (p <= n) {
    if (n % p === 0) {
      n /= p;
      answer += p + ' X ';
    } else {
      p++;
    }
  }
  // 刪除多餘的 X 以 loop 放入新字串
  let answer2 = '';
  for (let i = 0; i < answer.length - 3; i++) {
    answer2 += answer[i];
  }
  console.log(answer2);
}

console.log(factorPrime(120)); // returns "2 x 2 x 2 x 3 x 5"
