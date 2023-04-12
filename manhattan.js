/*
Concevez une fonction manhattanqui prend 4 arguments streetA& avenueA(le point de départ
     en termes de rue et d'avenue), streetB& streetB(le point d'arrivée en termes de rue
      et d'avenue) et calcule le nombre de blocs entre deux points.
*/

// La fonction prend en entrée quatre arguments : les coordonnées de deux points dans une grille
function manhattan(streetA, avenueA, streetB, avenueB) {

    // La fonction Math.abs renvoie la valeur absolue d'un nombre (sa valeur sans signe).
    // Ici, on calcule la différence entre les coordonnées des deux points sur chaque axe, 
    // puis on prend la valeur absolue de ces différences.
    // Cela permet de s'assurer que le résultat final est toujours positif.
    let streetDistance = Math.abs(streetB - streetA);
    let avenueDistance = Math.abs(avenueB - avenueA);
  
    // On retourne la somme des distances calculées sur chaque axe,
    // conformément à la formule de la distance de Manhattan.
    return streetDistance + avenueDistance;
  }
console.log(manhattan(1, 1, 2, 2));
console.log(manhattan(1, 1, 1, 1));
console.log(manhattan(5, 4, 3, 2));