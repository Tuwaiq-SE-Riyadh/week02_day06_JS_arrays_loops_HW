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


const x = [1,2,3,4,5]
sumAll(x);
console.log("------------------------------------------");
maxArr(x);
console.log("------------------------------------------");
rev(x);
console.log("------------------------------------------");
stars_pattern(5);
console.log("------------------------------------------");
prime(4);
console.log("------------------------------------------");
getName();




function sumAll(arr){
  let  sum = 0;
for(let i = 0 ; i < arr.length ; i++){
 sum+=arr[i];
}
console.log("Sum = "+sum);
}


function maxArr(arr){
    console.log(Math.max(...arr));
  }



  function rev(arr){
    console.log(x.reverse());
}


function stars_pattern(num){

    for(let i = 0 ; i <= num ; i++){
        let s = "";
        for(let j = 0 ; j < i ; j++){
            s += "*";
        }
        console.log(s);
}}

function prime(num){
    let count = 0;
    for(let i = 1 ; i <= num ; i++){
        if(num % i == 0){count++;}
    }
if(count == 2){console.log("true");}
else{console.log("false");}

}


function getName(){
    characters.map(function(element){
        console.log(element.name  + " "+ element.height);
    });
    }
    
