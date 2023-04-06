let n = prompt("Entrez un nombre : ");
let sum = 0;
for (let i = 1; i <= n; i++) {
let num = prompt("Entrez le nombre " + i + " : ");
sum += parseInt(num);
}
console.log("La somme est : " + sum);