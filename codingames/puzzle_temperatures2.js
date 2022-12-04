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

// const n = parseInt(readline()); // the number of temperatures to analyse
const n = parseInt('1 -2 0 4 5'); // the number of temperatures to analyse
console.log('n:', n);

function closestTo0(n) {
  var inputs = '1 -2 0 4 5'.split(' ');
  // var inputs = readline().split(' ');
  let result;
  //排除 0
  if (n === 0) {
    console.log(n);
  } else {
    // 以拿到的第一個值來初始化 做比較
    result = parseInt(inputs[0]);
    for (let i = 1; i < n; i++) {
      // index 0 已經取了，從 index1 開始比較
      console.log('n:', n);
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
    return `closest To 0 is: ${result}`;
  }
}

let ok = closestTo0(n);
console.log(ok);

/**
 * 給一個數字的字串，在這些字串的數字裡找出最靠近 0 的數字
 * 先把字串的數字拆開
 */
