let num =13
let count=1

for(let i=0;i<num;i--){
if(num%i==0){
count+++
}
}
if(count == 2){
console.log("False")
}else{
console.log("True")
}