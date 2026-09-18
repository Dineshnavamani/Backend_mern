// syntax callback

// const  mainfucntion=(callback) => {
//     console.log("main function");
//     callback();
// };
// const secondfunction=() => {
//     console.log("second function");
    
// };
// mainfucntion(secondfunction);

//Asynchronous callback

// A asynchronous callback runs later after an asynchronous operation is ready.

// console.log("start");

// setTimeout ( () =>{
//     console.log("Datas Transfered");

// },2000); // this line print after 2 seconds

// console.log("end");// this line won't wait for previous to print.



//callback hell

// const loginUser = ( () => {
//     const getProfile = ( () => {
//        const getOrders = ( () => {
//            const makePayment = ( () => {
//                 console.log("completed");
                
//             });
//             makePayment();
//         });
//         getOrders();
//     });
//     getProfile();
// });
// loginUser();

// promise

// Promise is an object that represents the future result of an  asynchronous function.

// const order = new Promise((resolve , reject) => {
//     let success = true;
//     if (success){
//         resolve("Task Completed");
//     }
//     else{
//         reject("Task failed");
//     }
// } );


// const apply = new Promise ((resolve,reject) => {
//     let applied= false;
//     if(applied){
//         resolve("Job Applied");
//     }

//     else{
//         reject("Not Applied");
//     }
    
// });

// apply.then((result) => {   //  only for the  true .
//     console.log(result);

// })
// .catch((error) => {      // only for false.
//     console.log(error);
    
// })

// promise chaining

//A .then() can return a value or another promise.
// the next .then() receives that result.


// const login = new Promise((resolve, reject) => {
//     resolve(100);
// });
// login.then((result) => {
//     console.log(result);
//     return result + 100;
// })
// .then((result) => {
//     console.log(result);
//     return result + 100;
// })
// .then ((result) => {
//     console.log(result);
    
// });


// Async /Await

// const loginn= new Promise((resolve , reject) => {
//         resolve("yes");
// });

// async function gettingData() {
//     console.log("Waiting...");
    
//     const result = await loginn;
//     console.log(result);
    
// }
// gettingData();


//Async / await with setTimeout


function get() {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve("Data received");
        },2000);
    });
}

// async function showData(){
//     console.log("Waiting ...");
//     const result = await get();
//     console.log(result);
    
// }
// showData()

//Async  /Await error Handling

const mypro = new Promise((resolve, reject) => {
    setTimeout(() =>{
    let success = false;
    if(success){
        resolve("Completed");
    }
    else{
        reject("Not Completed");
    }
    },2000);
});

async function test(){
    try{
        const result = await mypro;
        console.log(result);
    }
    catch(error) {
        console.log(error);
        
    }
    finally{
        console.log("proccess completedd");
        
    }
}

test();