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


function arraySummations(arr){

 let sum=0
 for(i=0;i<arr.length;i++){

    sum+= arr[i]
 }
 console.log(sum)
}


function maximum(arr){

    let max =0

    for(i=0;i<arr.length;i++){

        if(arr[i] > max){
            max = arr[i]
        }
     }

     console.log("The maximum number is "+max)
} 




function reverse(arr){

    

    for(i=arr.length-1;i>=0;i--){

        console.log(arr[i])
     }

    }


function stars(num){

   
    for(let i=1; i <= num ; i++){
        let stars = ''
        for(let j=1; j <= i ; j++) {
    stars = stars + '*'
        
        }
        console.log(stars)
    }
    
}


function prim(num){

let i=2
let j=0
while(i <= num/2){

    if (num%i === 0){
        console.log(false)
        j=1
        break
    }
    i++
}
      if (j === 0){
    console.log(true)
}
}