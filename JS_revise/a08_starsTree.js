// 編寫一個名為stars的函式，功能為按以下模式打印出星星層：

function starsTree(number) {
  for (let i = 1; i <= number; i++) {
    let star = '';
    for (let j = 1; j <= i; j++) {
      star += `*`;
    }
    console.log(star);
  }
}

starsTree(1);
// *
console.log('====================');
starsTree(4);
// *
// **
// ***
// ****
console.log('====================');
