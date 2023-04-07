/*
Create a function factorial(a) that returns the factorial of a number.
That function must be recursive.
*/

/**
 * Cette fonction vérifie si la valeur de a est égale à 0 ou 1.
 * Si c'est le cas, elle retourne 1, car la factorielle de 0 et 1 est toujours 1.
 * Si a est supérieur à 1, la fonction calcule la factorielle en multipliant a par 
 * la factorielle de a-1, qui est calculée en appelant récursivement la fonction 
 * @factoriel ()
 * 
 * 1 = 1.
 * 2 = 1 × 2 = 2.
 * 3 = 1 × 2 × 3 = 6.
 * 4 = 1 × 2 × 3 × 4 = 24.
 * 5 = 1 x 2 x 3 x 4 x 5 = 120.
 */

function factoriel(a) {
    if (a == 0 || a == 1) {
      return 1;
    } else {
      return a * factoriel(a - 1);
    }
  }

console.log(factoriel(5))
