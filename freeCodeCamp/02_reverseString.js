// Reverse a String
// Reverse the provided string.

// You may need to turn the string into an array before you can reverse it.

// Your result must be a string.

function reverseString(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    result += str[str.length - 1 - i];
  }
  str = result;
  return str;
}
console.log(reverseString('hello'));
