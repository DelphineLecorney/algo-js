/*
By reusing the function rand10() created in Exercise 2, 
write a function named multiRand(n) that returns an array of n numbers between 1 and 10. 
You should not modify anything in rand10() to achieve this.

Write a documentation for the multiRand(n) function.

Use that function to create a program that will ask the number of random numbers to 
generate then display that same number of random numbers.
*/
function rand10(){       
    return Math.floor(Math.random() * 10) + 1;
};

/**
 *  La fonction 
 * @multiRand () : génère un tableau contenant n nombres aléatoires 
 *  compris entre 1 et 10 à l'aide de la fonction rand10().
 * La fonction utilise une boucle for pour générer chaque nombre aléatoire 
 * et le stocker dans le tableau arr à l'aide de la méthode
 * @push () : ajoute les éléments spécifiés à la fin d'un tableau
 */

function multiRand(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
      arr.push(rand10());
    }
    return arr;
}

/**
 *@prompt () : demande  à l'utilisateur de fournir le nombre de 
 * nombres aléatoires à générer en utilisant la fonction prompt()
 * Le nombre fourni est stocké dans la variable n.
*/

n = prompt("Donnes moi le nombre de random souhaité : ")

/**
 * la fonction :
 *@multiRand () est appelée avec le nombre fourni par 
 * l'utilisateur comme argument, et le résultat est affiché 
 * dans la console avec console.log()
 */
console.log(multiRand(n));
