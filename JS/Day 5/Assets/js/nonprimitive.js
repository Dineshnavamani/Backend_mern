//shallow copy

let arr=[1,3,4,5,[6,7]];
let arr2=arr;
//let arr2=structuredClone(arr)
console.log(arr2);
arr2.push(46);
console.log(arr2);
console.log(arr);


// arr2=arr.pop();
// console.log(arr2);


//deep copy

// let arr=[10,20,{name:"Dinesh"}];

// let arr2 = structuredClone(arr);

// arr2[2].name="kumar";


// console.log(arr);
// console.log(arr2);

//nested array

// let arr=[10,20,[30,40]];
// // let arr2=[...arr]; --- shallow
// let arr2=structuredClone(arr); -- deep
// arr2.push(50);
// console.log(arr);
// console.log(arr2);

// deep 
// let man=[1,7,9,8];
// let woman = structuredClone(man);

// woman.push(12);
// console.log(woman);
// console.log(man);

//shallow

// let boys=[11,12,13,[14,15]];
// let girls=[...boys];
// girls[3].push(16)

// console.log(girls);
// console.log(boys);





