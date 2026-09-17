// TAsk-1 

let salaries = [15000, 20000, 25000, 30000, 35000];

let updatedSalaries=salaries.map(function (salary){
    return salary +2000;
});;
console.log("Original Salaries: "+salaries);

console.log("updated Salaries: "+updatedSalaries);

//Task-2
let marks=[35,78,42,90,25,67,55];

let eligible=marks.filter(function(mark){
    return mark >=50;
});
console.log("eligible "+eligible);


//task-3
let products = [ 
    { id: 101, name: "Laptop", price: 55000 }, 
    { id: 102, name: "Mouse", price: 800 }, 
    { id: 103, name: "Keyboard", price: 1500 },
     { id: 104, name: "Monitor", price: 12000 }
     ];


let product =products.find(function(item){
    return item.id === 103;
});
console.log("complete product: "+product);

console.log("product name "+product.name);


//Task-4
let cart = [
    { name: "Shirt", price: 1200 }, 
    { name: "Shoes", price: 2500 }, 
    { name: "Watch", price: 3000 }, 
    { name: "Bag", price: 1500 } 
];
let total =cart.reduce(function(a,i){
    return a + i.price
},0)
console.log("Total cart price: "+total);

