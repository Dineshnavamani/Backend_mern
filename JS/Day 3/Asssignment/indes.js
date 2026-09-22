function createBankAccount(){
    let balance=5000;
function CheckBalance(){
    console.log("Account Balance: ",balance);
    
}
return CheckBalance;

}

let account = createBankAccount();
let balance = 100000;
console.log("Outside balance: "+balance);
account();

//TASK_2
function createAccount(){
    let balance= 1000;
    function deposit(amount){
        balance+=amount;
    }
    function getBalance(){
        console.log(balance);
    }

return{
    deposit,
    getBalance
};
}
let acccount=createAccount();
acccount.deposit(500);
acccount.getBalance();

acccount.deposit(200);
acccount.getBalance();

//Task-3
function createCounter(){
    let count=0;
    function increment(){
        count++;
    }
    function decrement(){
        count--;
    }
    function getCount(){
        console.log(count);
        
    }
    return{
        increment,
        decrement,
        getCount
    };
}
let counter = createCounter();
let count=100;
counter.increment();
counter.increment();
counter.increment();
counter.decrement();
counter.getCount();

//Task 4

function createEmployee(name,initialSalary){
    let salary=initialSalary;
    function getName(){

        return name;
    }
    function getSalary(){


        return salary;
    }
    function increaseSalary(amount){

        if(amount >=0){
            salary+=amount;
        }
    }
    return{
        getName,
        getSalary,
        increaseSalary
    };
}
let employee = createEmployee("Arun",25000);
employee.increaseSalary(5000);

console.log(employee.getName());
console.log(employee.getSalary());

