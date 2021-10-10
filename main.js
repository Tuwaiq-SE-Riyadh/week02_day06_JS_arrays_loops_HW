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



//Numbers' summations     ////////////////////////////////////////////////////////////////////////////////////
function sumArr(arr){
    let result = 0
    for (let i = 0 ; i<arr.length;i++){
        result+=arr[i]
    }
    console.log(result)
}
sumArr([1,2,3])


//Maximum number       ////////////////////////////////////////////////////////////////////////////////////
function maxNum(arr){
    let max = 0
    for (let i = 0 ; i<arr.length;i++){
        if(max<arr[i]){
            max = arr[i]
        }
    }
    console.log(max)
}
maxNum([5,2,3])



//Reverse Array       ////////////////////////////////////////////////////////////////////////////////////
function reverseArray(arr){
    console.log(arr.reverse());
}
reverseArray([1,2,3])



//stars pattern     ////////////////////////////////////////////////////////////////////////////////////
function starsPattern(num){
    for(let i = 1 ; i <=num;i++){
      let x = ""
        for (let j = 0 ;j<i;j++){
          x = x+"*"
            
        }
        console.log(x)
    }
}
starsPattern(5)



//Prime number ////////////////////////////////////////////////////////////////////////////////////
function primeNumber(num){
    let isPrime = true
    for (let i =2 ; i< num;i++){
      if (num % i == 0){
        isPrime = false
        break
      }
    }
    if(isPrime==true){
      console.log("Prime Number")
    }
    else {
      console.log("Not a Prime Number")
    }
  }
  primeNumber(4)