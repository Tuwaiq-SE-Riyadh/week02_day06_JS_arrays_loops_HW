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


//-----------------------Numbers' summations-------------------(1)


function summations(array){

    let sum =0;
    for(let i=0; i<array.length; i++){

        sum = sum + array[i];

    }
    console.log(sum);
}


//---------------------Maximum number--------------------------(2)

function maximum(array){

    let max =0;
    for(let i=0; i<array.length; i++){

        if(max < array[i])
        max = array[i];

    }
    console.log(max);
}

//--------------------Reverse Array----------------------------(3)

function reverse(array){

    let max =0;
    for(let i=array.length-1; i != -1 ; i--){

        console.log(array[i]);    
    }  
}


//--------------------stars pattern-----------------------------(4)

function stars(number){

    let count = 1;
    let x = "*";
    for (let i = 0; i<=number; i++){
        console.log(x.repeat(count));
        count +=1;
}
}

//---------------------prime --------------------------------(5)


function prime(number){

    let i=2;
    let b;
    let result = true;
    while(i<number)
    
    {
                b= number % i;
                if(b==0)
                {
                    result= false;
                    break;
                }
                i++;
            }
    if(result){
        console.log("Your number is a prime number")
    }
    else{
        console.log("Your number is not a prime number")
    }

}
