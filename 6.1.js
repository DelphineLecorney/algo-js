/*
Créez une classe nommée Circle avec les attributs xPos, yPoset radius. 
Ajoutez une méthode nommée move(xOffset, yOffset)qui ajustera la position du cercle. 
Ajoutez un accesseur getter nommé surface qui renverra la surface du cercle.

Testez sa méthode et ses accesseurs en modifiant les valeurs et en vérifiant si tout est cohérent.
*/

// Création de la classe
class Circle {
  constructor(xPos, yPos, radius) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.radius = radius;
  }
  // Décalage horizontal et vertical
  move(xOffset, yOffset) {
    this.xPos += xOffset; // modification de la position en les ajoutant
    this.yPos += yOffset;
  }
  // Calcul de la surface d'un cercle
  get surface() {
    return Math.PI * this.radius * this.radius;
  }
}

// Test de la classe Circle
let circle = new Circle(0, 0, 5);

// Position du cercle: 0 0
console.log("Position du cercle: ", circle.xPos, circle.yPos);

// Surface du cercle: 78.53981633974483
console.log("Surface du cercle: ", circle.surface);

// Nouvelle position du cercle: 3 4
circle.move(3, 4);
console.log("Nouvelle position du cercle: ", circle.xPos, circle.yPos);

// Nouvelle surface du cercle: 78.53981633974483
console.log("Nouvelle surface du cercle: ", circle.surface);