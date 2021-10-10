const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];

function sum(array) { 
    let sum = 0; 
    for (let i = 0; i < arr.length; i++) 
        sum += arr[i]; 

    return sum; 
} 

function maxNumber(array){
let max = array[0];
array.forEach(element => {
    if(element> max){
        max =element
    }
});
console.log(max);
}

function reverseArray(array){
array.reverse()
}

function starsPatterns(number){
    let starts = "";

    for (let i = 1; i <= number; i++) {
      for (let j = 0; j < i; j++) {
        starts += "*";
      }
      starts += "\n";
    }
    console.log(starts);

}

function prime(number){
  if (number===1) {
        console.log("Number is not prime");
      }
  else if(number === 2){
    console.log("Number is prime")
  }

  
    for(var i = 2; i < number; i++){
      if(number % i === 0){
        console.log("Number is NOT prime");
        return
      } else{
        console.log("Number is prime");
      }
    }
    
}

// Bonus

function second(array){

   let  result = array.map(({ mass}) => ({mass}));
    console.log(result);
    const reducer = (previousValue, currentValue) => previousValue + currentValue;
    console.log(result.reduce(reducer));
    
}
function first(array){
let result = array.map(({ name, height }) => ({name, height }));
console.log(result);
// names
 result = array.map(({ name}) => ({name}));
console.log(result);
}


