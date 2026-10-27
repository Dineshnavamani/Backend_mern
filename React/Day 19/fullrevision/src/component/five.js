let word="I LOVE JAVASCRIPT"
let rev =[];
let split=word.split(" ")
console.log(split);


for(let i=split.length-1;i<=0;i--){

    rev.push(split[i])
}
console.log(rev.join(" "));
