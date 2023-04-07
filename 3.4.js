// Write a program that will display the minimum and maximum elements of a given array.

let arr = [1, 2, 3, 4, 5, 100, 101, 102];

let min = arr[0];
let max = arr[0];
for(let i = 1; i<arr.length; i++){
    if(arr[i] < min){
        min =arr[i];
    }
    else if(arr[i] > max){
        max = arr[i]
    };
};
console.log("Le minimum est : " + min);
console.log("Le maximum est : " + max);