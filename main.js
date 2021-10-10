//--------- For loop ---------
//--------- For loop ---------
//--------- For loop ---------

// Numbers' summations
function numbersSummations(arr)
{
    let sum = 0
    for(let i = 0 ; i<= arr.length-1 ; i++)
    {
        sum +=arr[i];
    }
    console.log("The sum is :" + sum)
}

// Maximum number
function maximumNumber(arr)
{
    let max = arr[0]
    for(let i = 0 ; i<= arr.length-1 ; i++)
    {
        if(arr[i]>max)
        {
            max = arr[i]
        }
    }
    console.log("The max number is :" + max)
}

// Reverse Array
function reverseArray(arr)
{   let reverseOfArray = ""
    for(let i = arr.length-1 ; i >= 0  ; i--)
    {
        reverseOfArray = reverseOfArray + arr[i] +" "
    }
    console.log("The Reverse Array : " + reverseOfArray)

}

//--------- Nested for loop ---------
//--------- Nested for loop ---------
//--------- Nested for loop ---------

// stars pattern
function starsPattern(number)
{
    let printStars = ""
    for(let i = 0 ; i<=number ; i++)
    {
        for(let j = 0 ; j<=number ; j++)
    {
        if(i>j)
        {
            printStars = printStars + "* "
        }
    }
        console.log(printStars)
        printStars = ""  // reset the stars
    }
}

//--------- While loop ---------
//--------- While loop ---------
//--------- While loop ---------

function isPrime(number)
{
    let flag = true
    for(let i = 2 ; i<=number ; i++)
    {
        if(number % i == 0 && i !== number)
        {
            flag = false;
            break
        }
    }
    console.log(flag)
}



//--------- Arrays ---------
//--------- Arrays ---------
//--------- Arrays ---------

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


// --- MAP ---
// not yet !

// --- REDUCE ---
// not yet !

// --- FILTER ---
// not yet !

// --- SORT ---
// not yet !

// --- EVERY ---
// not yet !

// --- SOME ---
// not yet !