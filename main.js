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

const array =[2,57,1]

// ## For loop
// ### Numbers' summations
// - Write a function that takes an array of numbers as a parameter, and print the sum of all the elements in the array
function sum(arr) {
    let sum=0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);
}

sum(array)


// ### Maximum number
// - Write a function that takes an array of numbers as a parameter, and print the maximum number of this array to the console.

function maximumNum(arr) {
    let max =-999
    for (let i = 0; i < arr.length; i++) {
        if(max<arr[i]){
            max=arr[i]
        }
    }
    console.log(max);
}
maximumNum(array)

// ### stars pattern
// - Write a function that takes a number as a parameter, and Print a right angle triangle using stars to the console. 
// - Example: if the parameter is 5, the printed pattern will be as follow:

// \* <br>
// \** <br>
// \*** <br>
// \**** <br>
// \***** <br></br>

function stars(num) {
    for (let i = 0; i < num; i++) {
        for (let j = 0; j <=i; j++) {
            console.log("*")
        }
        console.log("");
    }
    
}
// stars(5)

// ## While loop
// - Write a function that takes a number as a parameter, and print true to the console if the number is prime, and false otherwise.

// Note: A number is prime if it is divided by 1 and itself only.

function prime(num) {
    if (num===1){
        return true;
    }else if(num === 2){
        return true;
    }else{
        let i=2
        while (i<num) {
            if(num % i === 0){
                return false;
            }
            i++
        }
    return true;  
  }
}

console.log("Is 1 prime? "+prime(1));
console.log("Is 2 prime? "+prime(2));
console.log("Is 13 prime? "+prime(13));
console.log("Is 12 prime? "+prime(12));

// ### MAP
// 1. Get array of objects with just name and height properties
// 2. Get array of all first names

function getNameAndHight(arr){
    
    arr.map(function(element, index){
        console.log("The name is: "+element.name)
        console.log("The height is: "+element.height)
    })
}
function Fname(arr) {
    arr.map(function(element, index){
        const myArr = element.name.split(" ")
        console.log("The name is: "+myArr[0])
    })
}

getNameAndHight(characters)
Fname(characters)

// ### REDUCE
// 1. Get total mass of all characters
// 2. Get total number of characters in all the character names

// str.length;

function Fname(arr) {
    var sum=0
    arr.map(function(element, index){
        sum += element.name.length
        console.log("The name is: "+sum)
    })
}


// ### SORT
// 1. Sort by name
// 2. Sort by gender

// const arr = characters.name.sort()
// console.log(arr[0])


// function sorting(arr) {
//     arr.sort(function(a, b) {
//         return a.name;
//       });
// }
// console.log( sorting(characters));