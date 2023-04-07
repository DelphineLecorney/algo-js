/* Create a function named calcSurface that takes the length and width of a rectangle 
and returns its surface. Then create a program that asks the length and width of a 
rectangle to the user then displays the surface of that rectangle. That program must 
use the function you created.

Write a documentation for the calcSurface function.
 */


/** La fonction calcSurface d'un rectangle :
 * 
 * @calcSurface () :  fonction nommée "calcSurface"
 * qui prend deux paramètres :
 * @param {string} lenght
 * @param {string} width
 * La fonction multiplie simplement ces deux valeurs pour obtenir la surface du rectangle
 * @return L'instruction return met fin à l'exécution d'une fonction et définit une valeur à renvoyer à la fonction appelante.
 */ 

function calcSurface(lenght, width){
    return lenght * width;    
}



/** La saisie utilisateur :
 * 
 * Les deux lignes suivantes permettent de demander à l'utilisateur
 * de saisir la longueur et la largeur d'un rectangle en utilisant la fonction :
 * @prompt
 * La saisie est stockée dans les variables:
 * @length
 * @width
 */

length = prompt("Donne moi la longueur d'un rectangle : ");
width = prompt("Donne moi la largeur d'un rectangle : ");




/** Le calcul de la surface :
 * 
 * La ligne suivante appelle la fonction "calcSurface" avec les valeurs saisies par l'utilisateur
 * pour calculer la surface du rectangle. Cette valeur est stockée dans la variable "surface".
 * @variable {string{surface}} 
 */

surface = calcSurface(length, width);



/** L'affichage du résultat :
 * 
 *  La dernière ligne utilise la fonction "console.log" pour afficher un message dans
 *  la console du navigateur. Le message indique la valeur de la surface calculée
 *  à l'aide de la fonction "calcSurface".
 * 
 *  @console.log () La méthode console.log() affiche un message dans la console Web.
 */

console.log("La surface du rectangle est de : " + surface);

/** 
 * En résumé, ce code permet de calculer la surface d'un rectangle à partir de sa longueur
 * et de sa largeur, en utilisant une fonction qui multiplie ces deux valeurs.
 * La saisie utilisateur est gérée à l'aide de la fonction "prompt",
 * et le résultat est affiché dans la console du navigateur avec la fonction "console.log".
*/  