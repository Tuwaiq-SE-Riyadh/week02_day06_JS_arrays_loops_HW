const characters = [{
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

//Numbers' summations


function sum(num) {
    let sumNum = 0
    for (let i = 0; i < num.length; i++) {
        sumNum = sumNum + num[i];
        //console.log(sum)
    }

    console.log(sumNum)
}


//Maximum number

function maxNum(num) {
    let max = 0
    for (let i = 0; i < num.length; i++) {
        if (max < num[i]) {
            max = num[i]
        }
    }
    console.log(max)
}


//Reverse Array

function reverse(num) {

    for (let j = num.length - 1; j >= 0; j--) {
        console.log(num[j]);
    }
}


//Nested for loop
//stars pattern
function star(num) {
    for (let i = 0; i < num; i++) {
        for (let j = 0; j <= i; j++) {
            console.log("*")
        }
        console.log(" ")
    }
}





//While loop

function prime(num) {
    let i = 2,
        flag = true;
    if (num === 1 || num === 0) {
        console.log("False")
        return;
    }

    while (i <= num - 1) {
        if (num % i == 0) {
            flag = false
            console.log("False")
            return;
        }
        i++
    }
    console.log("True")

}
//Arrays
//Get array of objects with just name and height properties

console.log(characters.map(function names(characters) {
    return characters.name + "  " + characters.height
}))




//Get array of all first names

console.log(characters.map(function names(characters) {
    return characters.name.split(' ').slice(0, -1)
}))



//REDUCE
//Get total mass of all characters
let initialValue = 0
let sum1 = characters.reduce(function(previousValue, currentValue) {
    return previousValue + currentValue.mass
}, initialValue)

console.log("total mass of all characters: " + sum1)



//Get total number of characters in all the character names

let initialValue2 = 0
let sum2 = characters.reduce(function(previousValue, currentValue) {
        return previousValue + (currentValue.name.length - 1)
    },
    initialValue2)

console.log("total number of characters in all the character names: " +
    sum2)