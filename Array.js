//For loop
//Write a function that takes an array of numbers as a parameter, and print the sum of all the elements in the array
function sum(array){
let sum=0; 
for(i=0;i<array.length;i++){  
    
sum=sum+array[i]
}
console.log("The sum of all the elements is : " + sum)
}

//for loop
// Write a function that takes an array of numbers as a parameter, and print the maximum number of this array to the console.

function maximum(array){

    let Maximum = 0;

for (i = 0; i < array.length; i++) {
    if (Maximum<array[i]) {
        Maximum = array[i];
    }
}
console.log(Maximum)
}

//for loop 
 //Write a function that takes an array of numbers as a parameter, and print the array's content in a reverse order
 function reverse(array)
{
    for (let i = array.length - 1; i >= 0; i--){
    
        
   console.log(array[i]);
  }

   
}
//# Nested for loop
//that takes a number as a parameter, and Print a right angle triangle using stars to the console. 
function str(number){
    
for (var i = number; i >= 1; i--) {
let stars = "";
    for (var j = i; j <= number; j++) {
        
    stars =stars +"*";
       }
   console.log(stars);
  }}

  //# While loop
//Write a function that takes a number as a parameter, and print true to the console if the number is prime

function prime(number){
  if (number==1){
    return false;
  }
  else if (number>=2){
  let i=2;
    while(i<number){
   
      if(number%i===0){
  
       return false;
      
    }i++;
    }
    
  console.log(number + " is prime ")

}
}


