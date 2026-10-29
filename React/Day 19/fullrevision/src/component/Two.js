let arr=[1, 2, 2, 3, 4, 4, 5]
let arrs=[]
for (let i=0;i<arr.length;i++){
    if(!arrs.includes(arr[i])){
        arrs.push(arr[i])
    }
}
console.log(arrs);
