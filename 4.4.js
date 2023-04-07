/*
Create a function pickLearner(inputAr, n) that takes 2 parameters.

inputAr : An array of learners (the one you created in exercise 3.0 for example)
n : A number, that should be greater than 0 and less than the length of inputAr
The function should return an array of randomly selected learners.
*/

let inputAr = ["Abel", "Alexandra", "Anthony", "Benjamin", "Bruno", "Delphine", "Emilien", "Ethan", "Ismaël", "Jodie", "Julien", "Louka", "Loïc", "Luciano", "Marine", "Nikko", "Noa", "Steve", "Sylvain", "Thomas", "Willy"];

let n = Number(prompt("Enter a number : "));

/** 
 * La fonction :
 *@pickLearner () prend un tableau inputAr et un nombre n comme arguments, 
 * et renvoie un tableau de n éléments sélectionnés au hasard dans le tableau inputAr.
 * La fonction vérifie d'abord si n est un nombre valide 
 * (c'est-à-dire supérieur à 0 et inférieur ou égal à la longueur de inputAr).
 * Si n n'est pas valide, la fonction invite l'utilisateur à saisir un nouveau nombre
 * jusqu'à ce qu'un nombre valide soit fourni.
*/
function pickLearner(inputAr, n) {
    if (n <= 0 || n > inputAr.length) {
        n = prompt("Entrer un nombre entre 1 et le nombre d'apprenants : ");
    }
/**
 * La fonction initialise ensuite un tableau vide "result" pour stocker les apprenants
 * sélectionnés et entre dans une boucle qui se poursuit jusqu'à ce que "result"
 * contienne n apprenants.
 * À chaque itération de la boucle, la fonction génère un indice aléatoire
 * entre 0 et la longueur de inputAr à l'aide des méthodes
 * @Mathrandom () et
 * @Mathfloor ()
 * Elle sélectionne ensuite l'apprenant à cet index et vérifie si l'apprenant
 * n'est pas déjà dans le résultat.
 * la fonction l'ajoute au tableau à l'aide de la méthode
 * @push ()
 * La fonction renvoie le tableau des apprenants sélectionnés au hasard.
 * 
 */

let result = [];
while (result.length < n) {
    let index = Math.floor(Math.random() * inputAr.length);
    let learner = inputAr[index];
    if (!result.includes(learner)) {
        result.push(learner);
    }
}
return result;
}

/**
 * On appelle la fonction en lui passant un tableau d'apprenants et le nombre d'apprenants.
 */
let result = pickLearner(inputAr, n);
console.log(result);
