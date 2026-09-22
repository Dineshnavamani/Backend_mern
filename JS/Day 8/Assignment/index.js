//TASK-1

// let customerName = "Dinesh";
// let unitsConsumed= 250;
// let bill;
// if(unitsConsumed<=100){
//    bill= unitsConsumed *2;
// }
// else if(unitsConsumed<=200)
// {
//     bill = (100 *2) +((unitsConsumed - 100) * 3);
// }
// else 
//     {
//     bill = (100*2) + (100 *3) +((unitsConsumed-200) *5)
// }
// console.log("customerName :"+customerName);
// console.log("unitsConsumed :"+unitsConsumed);
// console.log("bill: "+bill);

//TASK-2
// let balance=15000;
// let withdrawAmount=4000;

// if(withdrawAmount > 0){
//     if(withdrawAmount % 500==0){
//         if(withdrawAmount < balance){
//             console.log("withdrawAmount: "+withdrawAmount);
            
//         }
//         else
//         {
//             console.log("Insufficient Balance");
            
//         }
//     }
//     else{
//         console.log("Amount should be Multiple of 500");
        
//     }
// }
// else{
//     console.log("withdrawalAmount in to be more than 0 ");
    
// }

//TASK-3
// let correctPin=1234;
// let attempt=0;

// for(let p=1;p<=3;p++){

//     let pin= Number(prompt("enter the pin"));

//     if(pin==correctPin){
//         console.log("Login Successful");
//         break;
//     }
//     else{
//         attempt++;
//         console.log("Incorrect Pin");
        
//     }
    
// } 
// if(attempt === 3){
//     console.log("Account Blocked");
    
// }

//TASK -4

// let cost=250;
// for(let quantity=1;quantity<=5;quantity++){
//     let total=cost*quantity;
//     console.log("Quantity "+quantity+" = "+total );
    
// }

//TASK -5

// for(let r=1;r<=3;r++){
//     let seatrow ="row"+r;
//     for(let c=1;c<=5;c++){
//         let seatcol = "seat"+c;
//         console.log(seatrow,seatcol);
        
//     }
// }

//TASK-6
// function calculteDelivery(amount){
//     if(amount>=1000){
//         return "free delivery";
        
//     }else if(amount >=500 && amount<=999){
//         return "50 delivery charge";
        
//     }
//     else{
//         return "100 delivery charge";
        
//     }
// }
// console.log(calculteDelivery(500));

//TASK-7

// let sales=[12000,18000,9500,25000,16000];
// let highest = sales[0];
// for(let c=1;c<=sales.length;c++){
//     if(highest<sales[c]){
//         highest = sales[c];
//     }
    
// }
//     console.log(highest);

//TASK-8
// let numbers=[1,2,3,2,1];
// let palindrome =true;
// for(k=0;k<=numbers.length-1;k++){
//     if(numbers[k] !== numbers[numbers.length-1-k]){
        
//  // numbers[k] == give 0    numbers[numbers.length -1 -k] gives 5-1 -k[0] =4
//  //checks the index 4 is it == to o index.

        
//         palindrome = false;
//         break;
//     }
// }
// if(palindrome){
//     console.log("palindrome");
    
// }
// else{
//     console.log("Not palindrome");
    
// }

//TASK-9
// let marks=[45,78,32,90,67];

// let gracemark=marks.map(function(mark){
//     return mark+5
// });

// let rangemark=marks.filter(function(mark){
//     return mark>=50;
// });

// console.log("gracemark: "+gracemark);
// console.log("rangemark: "+rangemark);

//TASK-10

// let employees = [

// { id: 101, name: "Arun", salary: 25000 },

// { id: 102, name: "Priya", salary: 35000 },

// { id: 103, name: "Kumar", salary: 30000 }

// ];

// let employee  = employees.find(function(emp){
//     return emp.id === 102;
// });
// console.log("Employee Name: ",employee.name);
// console.log("Employee Salary: ",employee.salary);

//TASK-11
 
// let cart = [

// { name: "Shirt", price: 1000 },

// { name: "Shoes", price: 2500 },

// { name: "Bag", price: 1500 }

// ];
// let total =cart.reduce(function(acc,item){
//     return acc + item.price;
// },0);
// console.log("Total cart Amount: ",total);

//TASK -12
// function createAccount(){
//     let balance =5000;
//     return function(depositeAmount){
//         balance +=depositeAmount;
//         return balance;
//     };
// }
// let deposite =createAccount();

// console.log(deposite(1000));
// console.log(deposite(2000));
// console.log(deposite(500));

//TASK-13

// function processOrder(productName,callback){
//     console.log("Processing laptop "+productName );
   
//      setTimeout(function() {
//     console.log("Order confrimed");

//  },2000);
    
// }
//  processOrder("Laptop", function(result){
//     console.log(result);
    
//  });


//TASK-14

// function makePayment(amount){
//     return new Promise(function(resolve ,reject){
//         if(amount >0){
//             resolve("Payment Successful");
//         }
//         else{
//             reject("Invalid Payment Amount");
//         }
//     });
// }

// //checking with 2500
// makePayment(2500)
// .then(function(result){
//     console.log(result);

// })
// .catch(function(error){
//     console.log(error);
    
// })
// //checking with 0
// makePayment(0)
// .then(function(result){
//     console.log(result);
    
// })
// .catch(function(error){
//     console.log(error);
    
// })