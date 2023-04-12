/*
Vous devez concevoir une fonction qui calcule le changement pour un montant donné 
et renvoie le moins de pièces possible.

function computeChange(price, moneyHanded){
}
*/

function computeChange(price, moneyHanded) {
  // Vérification des entrées
  if (
    typeof price !== "number" ||
    typeof moneyHanded !== "number" ||
    price < 0 ||
    moneyHanded < 0 ||
    moneyHanded < price
  ) {
    return [];
  }

  // Définition des valeurs des billets et pièces disponibles
  const currencyValue = [
    500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01,
  ];

  // Tableau vide pour le changement
  let change = [];

  // Conversion en centimes pour éviter les problèmes d'arrondi avec les nombres décimaux
  let conversionCents = (moneyHanded - price) * 100;

  // Parcours de la liste des billets et pièces disponibles
  for (let i = 0; i < currencyValue.length && conversionCents > 0; i++) {
    // Conversion en centimes pour éviter les problèmes d'arrondi avec les nombres décimaux
    const valueCent = currencyValue[i] * 100;

    // Calcul du nombre de billets ou pièces nécessaires
    const ticketValue = Math.floor(conversionCents / valueCent);

    // Ajout du nombre de billets ou pièces nécessaires à la liste du changement
    if (ticketValue > 0) {
      for (let j = 0; j < ticketValue; j++) {
        change.push(currencyValue[i]);
      }

      // Mise à jour du montant restant à rendre
      conversionCents -= ticketValue * valueCent;
    }
  }
  // Renvoi de la liste du changement
  return change;
}

console.log((change1 = computeChange(12.3, 50)));
console.log((change2 = computeChange(17.41, 20)));