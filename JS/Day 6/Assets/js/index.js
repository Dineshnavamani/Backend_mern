// objects

// let obj={
//     name:"Dinesh",
//     age:23,
//     place:"chennai"
// };
// console.log(obj["age"]);// bracket notation

// console.log(obj.name); // dot notation


// function stored inside an object  is called method

// const person ={
//     name:"Kumar",
//     outline(){
//         console.log("Hello ,"+this.name);
        
//     }
// };
// person.outline();// function call

// object constains the other object

// const user={
//     name:"john",
//     age:22,
//     course:"MERN",
//     address: {
//         city:"New York",
//         zip:10110
//     }
// };
// console.log(user.address.city);

// looping through an object

// const persons={
//     name:"allen",
//     age:25,
//     city:"chenani"
// };
// for(const key in persons){
//     console.log(key,persons[key]);
    
// }


// Object.entries(persons);

// object update

const obj={
    name:"dinesh",
    age:23,
}
obj.course="MERN";
console.log(obj);

console.log(Object.keys(obj));// give only the keys in array formate.
// ['name', 'age', 'course']

console.log( Object.values(obj));// give only thee values in the array formate.
//['dinesh', 23, 'MERN']

console.log( Object.entries(obj));// give both the keys and values in the array , one pair in one array.
// (2) ['name', 'dinesh']
// (2) ['age', 23]
// (2) ['course', 'MERN']


//delete

let student ={
    name:"Bharath",
    age:23,
    city:"chennai"
};

delete student.city;
console.log(student);


// Array of Objects
 // console.log(std[0].name)   --- array[index].property
 
let stu=[
    {name:"arun",age:23},
    {name:"kalyan",age:25},
    {name:"balu",age:24}
];

// for loop in array of objects.
// for (let g=0;g<stu.length;g++){
//     console.log(stu[g].name);
    
// }


// update the array of object

stu[1].age=26;
console.log(stu[1].age);
stu[1].course="MERN";
console.log(stu[1]);

// array of object delete
stu.splice(1,1);
console.log(stu);

