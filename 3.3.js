// Write a program that will create a duplicate of a given array.

// Bonus: make a first version that will only do it using push(). Make a second version that uses a single method call to perform the copy. (You'll have to search on MDN or Google for this one.)

let arr = [1, 2, 3, 4, 5];
let arrDuplicate = [];
for(let i=0; i<arr.length; i++){
    arrDuplicate.push(arr[i]);
}
console.log(arrDuplicate);

//--------------------------------------------

let arr1 = [1, 2, 3, 4, 5];
let arr1Duplicate = [];
for(let i=0; i<arr1.length; i++){
    arr1Duplicate.slice(arr1[i]);
}
console.log(arrDuplicate);

//--------------------------------------------

let arr2 = [1, 2, 3, 4, 5];
let arr2Duplicate = Array.from(arr2);
console.log(arr2Duplicate);