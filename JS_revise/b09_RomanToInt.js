let romanToInt = function (string) {
  const obj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;
  for (let i = 0; i < string.length; i++) {
    // 有幾種例外：
    // I 在 V 或 X 之前 就減掉 V 或 X 之前的數
    if (string[i] === 'I' && (string[i + 1] === 'V' || string[i + 1] === 'X')) {
      result--;
      // X 在 L 或 C 之前 就減掉 V 或 X 之前的數
    } else if (
      string[i] === 'X' &&
      (string[i + 1] === 'L' || string[i + 1] === 'C')
    ) {
      result -= 10;
      // C 在 D 或 M 之前 就減掉 V 或 X 之前的數
    } else if (
      string[i] === 'C' &&
      (string[i + 1] === 'D' || string[i + 1] === 'M')
    ) {
      result -= 100;
    } else {
      // 其餘的依照對照的obj相加
      result = result + obj[string[i]];
    }
  }
  return result;
};

console.log(romanToInt('IV')); // 4
console.log(romanToInt('XXXVII')); // 37
console.log(romanToInt('CXLIII')); // 143
console.log(romanToInt('MCCXXXIV')); // 1234
