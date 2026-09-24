// function fact(n){
//     let result =1;
//      for(let h=2;h<=n;h++){
//         result*=h;
//      }
//      return result;
// }
// console.log(fact(5));


let marks = [
    [80, 75, 90, 85],
    [60, 70, 65, 75],
    [90, 95, 85, 92]
];


for(let n=0;n<marks.length;n++){
   let total =0;
   for(let d=0;d<marks[n].length;d++){
      total = total +marks[n][d];
   }
   console.log("student "+(n+1)+"Total = "+total);
   
}