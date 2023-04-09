/*
Create a function named randomizeCast(tvSerie) that will take as argument 
the data structure you defined in the previous exercise and return a list 
of the same cast but in a random order.

Create a program that will use randomizeCast(tvSerie) and askTvSerie() 
to ask the user about a TV serie then display a randomized list of the 
previous cast that will form the new cast of 
your next serie.
 */


function randomizeCast(tvSerie) {
    // Création d'une copie du tableau de la distribution de la série
    let distribution = tvSerie.distribution.slice();

    // Création d'un tableau vide pour stocker la nouvelle distribution aléatoire
    let newDistribution = [];

    // Tant qu'il reste des membres dans la première distribution, 
    // on retire un membre aléatoire et on l'ajoute à la nouvelle distribution
    while (distribution.length > 0) {
        let randomIndex = Math.floor(Math.random() * distribution.length);
        let randomMembre = distribution.splice(randomIndex, 1);
        newDistribution.push(randomMembre[0]);
    }

    // Mise à jour de l'objet "tvSerie" avec la nouvelle distribution triée aléatoirement
    tvSerie.distribution = newDistribution;

    // Renvoie l'objet tvSerie
    return tvSerie;
}


function askTvSerie() {
    // Création de l'objet série
    let serie = {};

    // Demande à l'utilisateur un nom de série et stocke la réponse dans l'objet
    serie.nom = prompt("Donne-moi le nom de ta série préférée : ");

    // Demande à l'utilisateur l'année de production et la stocke la réponse dans l'objet
    serie.anneeProduction = prompt("Donne-moi l'année de production de cette série : ");

    // Demande à l'utilisateur les noms des membres de la distribution et stocke les réponses dans un tableau dans l'objet
    serie.distribution = [];

    let nomMembre = prompt("Donne-moi le nom du membre, si tu as terminé de les citer => enter : ");
    while (nomMembre !== "") {
        serie.distribution.push(nomMembre);
        nomMembre = prompt("Donne-moi le nom du membre, si tu as terminé de les citer => enter : ");
    }

    // Renvoie l'objet
    return serie;
}

// Appelle la fonction askTvSerie() pour générer un objet
let serie = askTvSerie();

// Génère une liste aléatoire des membres de la distribution de la série
let randomizedSerie = randomizeCast(serie);

// Affiche le nom de la série télévisée et la liste aléatoire des membres de la distribution dans la console
console.log("La série " + randomizedSerie.nom + " a été produite en " + randomizedSerie.anneeProduction + " et la liste aléatoire est :");
for (let i = 0; i < randomizedSerie.distribution.length; i++) {
    console.log((i + 1) + ". " + randomizedSerie.distribution[i]);
} // (i + 1) pour faire une liste numérotée à la sortie