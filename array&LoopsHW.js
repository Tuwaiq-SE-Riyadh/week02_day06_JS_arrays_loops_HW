//Number's summations
function summtion(array){
let sum=0;
for(i=0;i<array.length;i++){
    sum +=array[i]
}
console.log(sum)
}
//Maximum number
function findmax(array){
    let max=0;
    
    for(i=0;i<array.length;i++){
if(array[i]>max){
    max=array[i]
}
    }return max;
}
//Reverse an array
function reversearray(array){
array.reverse();
console.log(array)
}
//nasted for loop
function stars(number){
    let string="";
for(i=1;i<=number;i++){
for(j=0;j<i;j++){
string+="*";
}
string+="\n";
}
console.log(string)
}
//while loop
function isPrime(number){
    if(number==1){
        return false;
    }
    else if(number==2){
        return true;
    }
    else{
        let i=2;
       while(i<number){
    if(number%i===0){
        return false;
        
    }i++;
        }
        return true;
    }
    console.log(number)
    }