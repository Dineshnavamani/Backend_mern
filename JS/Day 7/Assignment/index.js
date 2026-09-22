//TASK =1
const calculate = (num1,num2,cb) => {
    result =num1+num2;
    
    cb();
};

const calling = () => {
    console.log(result);
    
};
calculate(10,20,calling);

//TASk -2
//promise

const checkNumber=(num)=> {
    return new Promise((resolve,reject)=>{
    if(num>10){
        resolve("Valid Number")
    }
    else{
        reject("Invalid NUmber")
    }
})
};

checkNumber(2)
.then((result) => {
    console.log("Success");
    
})
.catch((error) => {
    console.log("Error");
    
})

//TASK-3

const verifyNumber=async () =>{
    try{
        const result= await checkNumber(20);
        console.log(result);
    }
    catch(error){
        console.log("error");
        
    }
};
verifyNumber();