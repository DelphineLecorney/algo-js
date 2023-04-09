/*
Créez un nom de classe avec Rectangleles attributs topLeftXPos, et . 
Ajoutez une méthode nommée qui renvoie uniquement si le rectangle actuel 
entre en collision avec .topLeftYPoswidthlengthcollides(otherRectangle)trueotherRectangle

Testez la collides(otherRectangle)méthode en utilisant plusieurs cas de test.
*/

// Création de la classe
class Rectangle {
  constructor(topLeftXPos, topLeftYPos, width, length) {
    this.topLeftXPos = topLeftXPos;
    this.topLeftYPos = topLeftYPos;
    this.width = width;
    this.length = length;
  }
  // Création de la méthode pour vérifier si les rectangles entrent en collison
  collides(otherRectangle) {
    // Vérification sur l'axe horizontal que les rectangles n'entrent pas en collision
    if (
      this.topLeftXPos + this.width < otherRectangle.topLeftXPos ||
      otherRectangle.topLeftXPos + otherRectangle.width < this.topLeftXPos ||
      // Vérification sur l'axe vertical que les rectangles n'entrent pas en collision
      this.topLeftYPos + this.length < otherRectangle.topLeftYPos ||
      otherRectangle.topLeftYPos + otherRectangle.length < this.topLeftYPos
    ) {
      return false; // False s'ils n'entrent pas en collision
    }
    return true; // True s'ils entrent en collision
  }
}

// Création de deux rectangles
let rect1 = new Rectangle(0, 0, 10, 10);
let rect2 = new Rectangle(5, 5, 10, 10);

// Vérification qu'ils entrent en collision
console.log(rect1.collides(rect2));

// Création de deux autres rectangles qui n'entrent pas en collision
let rect3 = new Rectangle(20, 20, 10, 10);
let rect4 = new Rectangle(30, 30, 10, 10);

// Vérification qu'ils n'entrent pas en collision
console.log(rect3.collides(rect4));
