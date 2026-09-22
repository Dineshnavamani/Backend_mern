// for(let f=1;f<=5;f++){
//     let g="";
//     for(let h=1;h<=f;h++){
//          g +=h;
//     }
//    console.log(g);
   
    
// }

// the loop starts from 1-f
// let g is the value print before the every start.
//inner loop contains the actual loop to print numbers.
//g += h -- prints the g value with the h giving values ,in a line and loop ends .
// then the loop is checks again f then gives values to g then comes h.
// coming to h the value will increase according to the f.
// finally the log print " " + h; 

// 1
// 12
// 123
// 1234
// 12345

let fruits=["Apple",'Banana',"Mango","Orange"];
for (let i=0;i<fruits.length;i++){
     console.log(fruits[i]);
     
}

let large=25;
let numbers=[25,10,45,5,30];
for(let r=0;r<=numbers.length;r++){
     if(r>large){
          large=r;
     }
     console.log(large);
     
}
