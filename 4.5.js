/*
Create a function named calcDistance which takes the coordinates of two different
 points A and B in a 2D space. That function must return the distance between those two points.

Examples results:

Point A = [1, 1], point B = [2, 2] => 1.41
Point A = [1, 1], point B = [3, 1] => 2
Point A = [4, 1], point B = [1, 1] => 3
Point A = [-2, 2], point B = [2, -2] => 5.65
Create a program to use that function.

Write a documentation for the calcDistance function.

Note: You probably need to make some search on Google to learn the mathematical 
formula to do that. You will also probably need to search for useful functions 
in JavaScript to help you making complex mathematical formulas...
*/


/**
 * La fonction 
 * @calcDistance () permet de calculer la distance entre deux points dans un espace 2D.
 * Elle prend en entrée deux tableaux représentant les coordonnées des deux points
 * et retourne la distance entre ces deux points.
 * Elle commence par calculer la différence de coordonnées en x et en y entre les deux
 * points en soustrayant les coordonnées du point A des coordonnées du point B.
 * Elle calcule ensuite la distance entre les deux points en utilisant la formule mathématique
 * la distance euclidienne :
 * distance = racine carrée de ((différence de coordonnées en x)^2 + 
 * (différence de coordonnées en y)^2 ) avec la méthode
 * @Matsqrt () : méthode  pour calculer la racine carrée et l'opérateur ** pour calculer la puissance.
 * La distance est ensuite retournée en utilisant la méthode :
 * @toFixed () : pour limiter à 2 décimales.
 */

function calcDistance(A, B){
    let x = B[0] - A[0];
    let y = B[1] - A[1];
    let distance = Math.sqrt(x ** 2 + y ** 2);
    return distance.toFixed(2);
  }

let pointA = [1, 1];
let pointB = [2, 2];
let distance = calcDistance(pointA, pointB);
console.log(distance);
