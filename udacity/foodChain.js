// https://learn.udacity.com/courses/ud803/lessons/28d1f80a-111b-4cc4-a5d4-1937907d668d/concepts/ce98c50e-b195-4b6d-bd25-96f81958ce91

/*
 * Programming Quiz - Navigating the Food Chain (3-8)
 *
 * Use a series of ternary operator to set the category to one of the following:
 *   - "herbivore" if an animal eats plants
 *   - "carnivore" if an animal eats animals
 *   - "omnivore" if an animal eats plants and animals
 *   - undefined if an animal doesn't eat plants or animals
 *
 * Notes
 *   - use the variables `eatsPlants` and `eatsAnimals` in your ternary expressions
 *   - `if` statements aren't allowed ;-)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have the variables `eatsPlants`, `eatsAnimals`
 * - Your code should include ternary statements. Do not use if....else statement.
 * - Your code should produce the expected output
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 *
 * conditional ? (if condition is true) : (if condition is false)
 */

// change the values of `eatsPlants` and `eatsAnimals` to test your code
var eatsPlants = false;
var eatsAnimals = false;

/*
 * Test your code agaist the followig possible input/output combinations of (`eatsPlants`, `eatsAnimals`, expected output):
 * - (true, true, omnivore)
 * - (false, true, carnivore)
 * - (true, false, herbivore)
 * - (false, false, undefined)
 */

var category = eatsPlants
  ? eatsAnimals
    ? 'omnivore'
    : 'herbivore'
  : eatsAnimals
  ? 'carnivore'
  : 'undefined';

/* your code goes here */
// 'herbivore' ? teatsPlants : eatsAnimals;
// 'carnivore' ? teatsPlants : eatsAnimals;
// 'omnivore' ? eatsPlants : eatsAnimals;

console.log(category);
