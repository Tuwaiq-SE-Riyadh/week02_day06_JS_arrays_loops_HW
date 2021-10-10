// Numbers' summations
function arraySum(array) {
    let sum = 0;
    for(let i = 0; i < array.length; i++)
    {
        sum = sum + array[i];
    }
    console.log("the sum = " + sum)
}

// Maximum number
function arrayMax(array) {
    let max = 0;
    for (let i = 0; i < array.length; i++) 
    {
        if(array[i] > max)
        max = array[i];
    }
    console.log("The maximum number = " + max);
}

// Reverse Array
function arrayReverse(array) {
    console.log(array.reverse())
}

// stars pattern
function starsPattern(num) {
    let s = "";
    for(let i = 0; i <= num; i++)
    {
        for(let j = 0; j < i; j++)
        {
            s = s + "*";
        }
        s = s + "\n";
    }
    console.log(s);
}

// while loop (is prime number?)
function isPrime(num)
{
    let result = false;
    if(num === 1)
    {
        result = false;
    }

    let i = 2;
    while(i < num)
    {
        if (num === 2) 
        {
            result = true;
        }

        else if(num % i === 0)
        {
            result = false;
            break;
        }
        else
        {
            result = true;
        }
        i++
    }
    if(num === 2)
    {
        result = true;
        console.log(result);
    }
    else
    {
        console.log(result);
    }
}
