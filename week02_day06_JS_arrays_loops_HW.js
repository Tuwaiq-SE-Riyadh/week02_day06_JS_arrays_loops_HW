// Numbers' summations

const array = [1, 2, 3, 4];
let sum = 0;

for (let i = 0; i < array.length; i++) {
    sum += array[i];
}
console.log(sum);



//   Maximum number

const numbers = [14,10,2];
let max = numbers[0];

for(i = 0; i<numbers.length; i++){
    if (numbers >= max){
       max = numbers[i];  
    }
     
}
console.log(max);



// Reverse Array

const arr = [1, 2, 3, 4, 5];
 
for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}



// stars pattern

var i,j;
 for(i=1; i <= 5; i++)
 {
  for(j=1; j<=i; j++)
 {
   
   document.write('*');
  }
   document.write('<br />');
  }


//   While loop


  function test_prime(n)
{

  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}

console.log(test_prime(90));



