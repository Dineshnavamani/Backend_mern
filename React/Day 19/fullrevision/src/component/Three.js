let fruit='banana'
let result ={}

for(let i=0;i<fruit.length;i++){
    if(result[fruit[i]]){
        result[fruit[i]]++
    }
    else{

        result[fruit[i]]=1

    }
}
console.log(result);
