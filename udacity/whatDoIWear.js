// What do I Wear? (3-7)
// https://learn.udacity.com/courses/ud803/lessons/28d1f80a-111b-4cc4-a5d4-1937907d668d/concepts/103179fb-057c-452a-9ab9-9fa6c90841eb

/*
 * Programming Quiz: What do I Wear? (3-7)
 *
 * Using if/else statements, create a series of logical expressions that logs the size of a t-shirt based on the measurements of:
 *   - shirtWidth
 *   - shirtLength
 *   - shirtSleeve
 *
 * Use the chart above to print out one of the following correct values:
 *   - S, M, L, XL, 2XL, or 3XL
 */

/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have the variables `shirtWidth`, `shirtLength`, and `shirtSleeve`
 * 2. Your code should include an `if...else` conditional statement
 * 3. Your code should use logical expressions
 * 4. Your code should produce the expected output
 * 6. Your code should not be empty
 * 7. BE CAREFUL ABOUT THE EXACT CHARACTERS TO BE PRINTED.
 */

// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code

/*
 * To gain confidence, check your code for the following combination of [shirtWidth, shirtLength, shirtSleeve, expectedSize]:
 * [18, 28, 8.13, 'S']
 * [19.99, 28.99, 8.379, 'S']
 * [20, 29, 8.38, 'M']
 * [22, 30, 8.63, 'L']
 * [24, 31, 8.88, 'XL']
 * [26, 33, 9.63, '2XL']
 * [27.99, 33.99, 10.129, '2XL']
 * [28, 34, 10.13, '3XL']
 * [18, 29, 8.47, 'NA']
 */
var shirtWidth = 23; // size L (large)
var shirtLength = 30; // size L (large)
var shirtSleeve = 8.71; // size L (large)
var size = 'NA';
// WRITE YOUR CODE HERE
if (
  shirtWidth >= 18 &&
  shirtWidth <= 19.99 &&
  shirtLength >= 28 &&
  shirtLength <= 28.99 &&
  shirtSleeve >= 8.13 &&
  shirtSleeve <= 8.379
) {
  size = 'S';
} else if (
  shirtWidth >= 20 &&
  shirtWidth <= 21.99 &&
  shirtLength >= 29 &&
  shirtLength <= 29.99 &&
  shirtSleeve >= 8.38 &&
  shirtSleeve <= 8.629
) {
  size = 'M';
} else if (
  shirtWidth >= 22 &&
  shirtWidth <= 23.99 &&
  shirtLength >= 30 &&
  shirtLength <= 30.99 &&
  shirtSleeve >= 8.63 &&
  shirtSleeve <= 8.879
) {
  size = 'L';
} else if (
  shirtWidth >= 24 &&
  shirtWidth <= 25.99 &&
  shirtLength >= 31 &&
  shirtLength <= 32.99 &&
  shirtSleeve >= 8.88 &&
  shirtSleeve <= 9.629
) {
  size = 'XL';
} else if (
  shirtWidth >= 26 &&
  shirtWidth <= 27.99 &&
  shirtLength >= 33 &&
  shirtLength <= 33.99 &&
  shirtSleeve >= 9.63 &&
  shirtSleeve <= 10.129
) {
  size = '2XL';
} else if (shirtWidth >= 28 && shirtLength >= 34 && shirtSleeve >= 10.13) {
  size = '3XL';
} else {
  size = 'NA';
}
console.log('your size is ' + size);
