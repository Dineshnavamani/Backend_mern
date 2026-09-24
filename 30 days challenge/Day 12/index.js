//Find total salary of each employee

let sales = [
    [1000, 2000, 1500],
    [2500, 3000, 1200],
    [1800, 2200, 2800] 
];

for(let s=0;s<sales.length;s++){
    let total =0;
    for(let g=0;g<sales[s].length;g++){
        total = total +sales[s][g];
    }
    console.log("Employee "+s    +" - "+total);
    
}

// the sales array contains 3 employee , 3 days salary.
//outer loop take the outer array , and the inner loop runs untill the
//loop ends
// the inner for loop gets the values and store to the total .
//this sales[s][g]- gives the 3 array with values inside.
// the we print the total salary of an each employee.
