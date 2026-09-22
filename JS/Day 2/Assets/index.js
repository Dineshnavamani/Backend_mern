// for(let x=0;x<10;x++)
// {
//     console.log(x);
// } 


// for(let l=1;l<100;l++)
// {
//     console.log(l);
// }

// for(let f=10;f>0;f--)
// {
//     console.log(f);
    
// }

// for(let n=0;n<=20;n++){
//     if(n%2==0){
//     console.log(n);
//     }
// }

// for(let e=1;e<=20;e++)
// {
//     if(e%2!=0){
//         console.log(e);
        
//     }
// }

// for(let r=1;r<=50;r++)
// {
//     console.log(r);
    
// }

// for(let s=1;s<=5;s++)
// {
//     console.log("Hello Javascript");
    
// }

// for(let j=5;j<=15;j++)
// {
//     console.log(j);
    
// }

// for(let m=5;m<50;m++)
// {
//     if(m%5==0)
//     {
//         console.log(m);
        
//     }
// }

// for(let q=10;q<=100;q++)
// {
//     if(q%10==0){
//     console.log(q);
//     }
// }
// for(let e=20;e>=1;e--)
// {
//     console.log(e);
    
// }
//Find the sum of numbers from 1 to 10.
// let sum=0;
// for(let t=1;t<=10;t++)
// {
//    sum+=t;  
// }

//  console.log(sum);

//Find the sum of numbers from 1 to 100.

// let sum=0;
// for(let y=1;y<=5;y++)
// {
//     sum+= y;
// }
// console.log(sum);

// Find the sum of even numbers from 1 to 50.

// let sum=0;
// for(let e=1;e<=50;e++)
// {
//     if(e%2==0){
//         sum+=e;
//     }
// }
// console.log(sum);




// Find the sum of odd numbers from 1 to 50.
// let sum=0;
// for(let o=1;o<=50;o++)
// {
//     if(o%2!=0)
//     {
//         sum+=o
//     }
// }
// console.log(sum);

// Print the square of numbers from 1 to 10.
// let sq=o;
// for(let s=1;s<=10;s++)
// {
//     console.log(s**2);
// }


// Print the cube of numbers from 1 to 10.
// for(let c=1;c<=10;c++)
// {
//     console.log(c**3);
    
// }


// Find the factorial of 5.
// let fact=1;
// for(let f=1;f<=5;f++)
// {
//     fact*=f;
//     console.log(fact);
// }

//Find the factorial of a number entered by the user.

// TASK 1 – PRINT NUMBERS

// Using a for loop, print numbers from 1 to 10.

// for(let l=1;l<=10;l++)
// {
//     console.log(l);
// }
// TASK 2 – EVEN NUMBERS

// Using a for loop and if condition, print only even numbers from 1 to 20.

// for(let e=1;e<=20;e++)
// {
//     if(e%2==0)
//     {
//         console.log(e);
        
//     }
// }
// TASK 3 – MULTIPLICATION TABLE

// Create a variable:

// let num = 5;

// Using a for loop, print the multiplication table of 5.

// let num=5;
// for(let t=1;t<=10;t++)
// {
//     console.log(num+"*"+t+"="+num*t);
    

// }
// TASK 4 – STAR PATTERN

// Using a nested for loop, create the following pattern.

// for(let r=1;r<=5;r++)
// {
//     let row="";
//     for(let c=1;c<=r;c++){
//         row+="*";
//     }
//     console.log(row);
    
// }

// TASK 5 – NUMBER PATTERN

// Using a nested for loop, create the following number pattern.

// for(let s=1;s<=5;s++)
// {
//     let out="";
//     for(let t=1;t<=s;t++){
//         out+=t;
//     }
//     console.log(out);
// }

// let sum=0;
// for(let p=1;p<=100;p++)
// {
//     sum+=p;
// }
// console.log(sum);

// let sum=0;
// for(let u=1;u<=50;u++)
// {
//     if(u%2==0){
//         sum+=u;
//     }
// }
//  console.log(sum);

// let sum=0;
// for(let o=1;o<=50;o++)
// {
//     if(o%2!=0)
//     {
//         sum+=o;
//     }
// }
// console.log(sum);

// let fact=1;
// for(let z=1;z<=5;z++)
// {
//     fact*=z;
// }
// console.log(fact);

// let count=0;
// for(let k=1;k<=100;k++)
// {
//     if(k%3==0){
//         count++;
//     }
// }
// console.log(count);

// for(let c=1;c<=50;c++)
// {
//     if(c%5==0){
//         console.log(c)
//     }
// }
// for(let m=5;m>=1;m--)
// {
//     let r="" ;
//     for(let n=5;n>=m;n--)
//     {
//          r+="*";
//     }
//     console.log(r);
// }
 
// print numbers that divisible  by 5 from 1 to 50
// for(let c=1;c<=50;c++)
// {
//     if(c%5==0){
//         console.log(`the value is ${c}`)
//     }
// }

// Explaination
// 1.c =1 -> starts from 1;
// 2.c<=50; -> condition ,ends in 50;
// 3.c++; iterate after condition true;
// 4,if(c%5==0); this gives the number is divisible by 5;
// 5.log(c); prints the divisible by 5 numbers;


// function  dinesh(age){
//     console.log(age);
// }
// dinesh(23);

// function data(name,age,place){
//     console.log("name"+" "+ name);
//     console.log("age"+" "+age);
//     console.log(place);
// }
// data("dinesh",23,"chennai")

// function add(a,b){
//     console.log(a+b);
// }
// add(10,20);

// function works(a,b){
//     console.log(a+b);
//     console.log(a-b);
//     console.log(a*b);
// }
// works(10,20)


function add(a,b){
    return a+b;
}

let result=add(20,30)
console.log(result);

