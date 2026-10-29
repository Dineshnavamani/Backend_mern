let arr= [ 10, 45, 20, 45, 30]
let largest=1;
let smallest=0;

for (let i=0;i<=arr.length;i++){
    if(arr[i]>largest){

        smallest=largest;
        largest=arr[i];
    }
    else if( arr[i]>smallest && arr[i]!==largest) {
         smallest=arr[i] 
    };
}
console.log(smallest)