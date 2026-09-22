//TAsk -1  students Name;
let students=["Dinesh","Bobby","Jack","ken","kavin"];

console.log(students[0]);
console.log(students[2]);
console.log(students[4]);


//TAsk -2
let ProductPrices = [1500, 2500, 3500, 4500, 5500];

console.log(ProductPrices[0]);
console.log(ProductPrices[2]);
console.log(ProductPrices[4]);
let total=ProductPrices[0]+ProductPrices[4];

console.log(total);

//Task -3  find array Value using Index;

let arr=["HTML", "CSS", "JavaScript", "React", "Node"];

console.log(arr[2]);
console.log(arr[3]);

let last=arr.length-1;
console.log(arr[last]);
// alter 
console.log(arr[arr.length-1]);

//Task-4  Nested Array

let data=[["Arun",80],["Bala",75],["kumar",90]];
//let data2=[...data];

console.log(data[0][0]);//first 0 indicates the level 1
//second 0 indecates the level 2 array.

console.log(data[0][1]);//--arun's mark

console.log(data[1][0]);
console.log(data[2][1]);//--kumar's mark

//Task -5 Logical  array access

let numbers=[10,20,30,40,50];

let second=numbers[1]; // access the second number in array.
let secondLast=numbers[numbers.length-2];// -- Access the  second last number 
let add=second+secondLast; // adding the last value
console.log(add);










