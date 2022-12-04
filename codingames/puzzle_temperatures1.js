/**
 * ègles
Écrivez un programme qui affiche la température la plus proche de 0 parmi les données d'entrée. Si deux nombres sont aussi proches de zéro, alors l'entier positif sera considéré comme étant le plus proche de zéro (par exemple, si les températures sont -5 et 5, alors afficher 5).
 	Entrées du jeu
Votre programme doit lire les données depuis l'entrée standard et écrire le résultat sur la sortie standard.
Entrée
Ligne 1 : Le nombre N de températures à analyser.

Ligne 2 : Une chaine de caractères contenant les N températures exprimées sous la forme de nombres entiers allant de -273 à 5526

Sortie
Affichez 0 (zéro) si aucune température n'est fournie. Sinon, affichez la température la plus proche de 0
Contraintes
0 ≤ N < 10000
 */

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const n = parseInt(readline()); // the number of temperatures to analyse
var inputs = readline().split(' ');
let result;

if (n === 0) {
  console.log(n);
} else {
  result = parseInt(inputs[0]);

  for (let i = 1; i < n; i++) {
    const t = parseInt(inputs[i]); // a temperature expressed as an integer ranging from -273 to 5526
    if (Math.abs(result) > Math.abs(t)) {
      result = t;
    } else if (Math.abs(result) === Math.abs(t)) {
      if (t > 0) {
        result = t;
      }
    }
  }
  // Write an answer using console.log()
  // To debug: console.error('Debug messages...');
  console.log(result);
}

/** 第二種方法 以排序來找 ************** */
const count = parseInt(readline()); // the number of temperatures to analyse
var temps = readline().split(' ');

console.error(temps);

let tempsSorted = temps.sort((a, b) => Math.abs(a) - Math.abs(b) || b - a);

console.error(tempsSorted);

console.log(tempsSorted[0] || 0);
