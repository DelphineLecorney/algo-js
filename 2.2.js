let min = prompt("Give me a minimum number!");
let max = prompt("Give me a maximum number!");
let current = prompt("Give me a current number!");
if(min>max){
    console.log("You didn't understand correctly, you gave a maximum number instead of a minimum number");
}else if(min>current<max){
    console.log("Cuurent is between min and max !");
}