/*
Créez une fonction nommée askTvSerie()qui demandera à l'utilisateur les données 
suivantes sur sa série TV préférée :

Nom
Année de production
Noms des membres de la distribution (il peut y en avoir autant que l'utilisateur le souhaite)
Cette fonction doit rassembler toutes les données dans un seul objet et le renvoyer. 
La structure des données doit être élégante.

Créez un programme qui utilise cette fonction pour générer un objet de série télévisée et 
l'afficher à l'utilisateur au format JSON.
*/

function askTvSerie() {

    // Création de l'objet série
    let serie = {};

    // Demande à l'utilisateur un nom de membre et stocke la réponse dans l'objet
    serie.nom = prompt("Donnes moi le nom de ta série préférée : ");

    // Demande à l'utilisateur l'année de production et la stocke la réponse dans l'objet
    serie.anneeProduction = prompt("Donnes moi l'année de production de cette série : ");

    // Demande à l'utilisateur les noms des membres de la distribution et stocke les réponses dans un tableau
    serie.distribution = []; // dans l'objet et stocke les réponses dans un tableau dans l'objet

    let nomMembre = prompt("Donnes moi le nom du membre, si tu as terminé de les citer => enter : ");
    while (nomMembre != "") { // La boucle tourne tant que l'utilisateur donne un nom de membre
        serie.distribution.push(nomMembre); // ajoute le nom d'un membre au tableau de la distribution dans l'objet
        nomMembre = prompt("Donnes moi le nom du membre, si tu as terminé de les citer => enter : ");
    }
    return serie // Renvoie l'objet
}
// Appelle la fonction askTvSerie() pour générer un objet
let serie = askTvSerie();

// Affiche l'objet de série au format JSON à l'utilisateur dans la console du navigateur
console.log(JSON.stringify(serie, null, 2));