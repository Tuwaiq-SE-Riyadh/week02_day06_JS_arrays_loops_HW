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

function SumArray(array) {

    let result = 0;
    for (let i = 0; i < array.length; i++) {
        result += array[i];  
    }
    console.log(result);
}

function MaximumArray(array) {
    let max = 0;
    for (let i = 0; i < array.length; i++) {
        if(array[i] > max){
            max = array[i]
        }
    }
    console.log(max);
}

function ReverseArray(array) {
    for (let i = array.length-1; i >=0; i--) {
        console.log(array[i]);
        
    }
    
}

function Stars(x) {
    let Star = "";
    for (let i = 1; i <= x; i++) {
        for (let j = 1; j <=i; j++) {
            Star += "*";
        }
        Star += "\n";
      }
      console.log(Star);
    }

function Prime(num) {
    for(var i = 2; i < num; i++){
        if(num % i === 0) {
            return false;
        }else{
            return num > 1;
        }    
    }
}