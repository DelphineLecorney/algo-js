/*Create a function named rand10() that returns a random integer 
between 1 and 10. Create a program that will display the result 
of that function each time it is run.

Write a documentation for the rand10() function.

You will have to search on Google how to generate random numbers 
in JavaScript for this exercise.
*/


/** Ce code est une fonction JavaScript appelée rand10 qui utilise la méthode 
 *  
 *@Mathfloor () :  pour générer un nombre aléatoire entre 0 (inclus) et 1 (exclus)
 * puis multiplie ce nombre par 10 et utilise la fonction :
 * 
 *@Mathfloor () :  pour arrondir le résultat à l'entier inférieur.
 * 
 * 1 est ajouté au résultat pour obtenir un nombre entier aléatoire 
 * compris entre 1 et 10 (inclus).
 * Si on ajoutait 1 directement, le résultat pourrait être 11 
*/
function rand10(){       
    return Math.floor(Math.random() * 10) + 1;
};

/** L'appel console.log(rand10()) 
 *  exécute la fonction rand10 et affiche le résultat sur la console.
 *  C'est pourquoi on ajoute 1 après l'application de la fonction Math.floor() 
 *  pour garantir que le résultat final est compris entre 1 et 10 (inclus).
 */

console.log(rand10());
