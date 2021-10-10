// For Loop 
// Q1 
function summations(arr){
    let sum=0;

   for(let i=0;i<arr.length;i++){
       sum=sum+arr[i];
   }
   console.log(sum)
}


// Q2
function Maximum(arr){
    let max=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    console.log(max)
}


// Q3
function reverse1(arr){   

         let m =arr.length-1;
         for(let i=m;i>=0;i--){
            console.log(arr[i])
         }

}

// Q4
 function stars(){
     for(let i=1;i<=5;i++){
        
         for (let j=1;j<=i;j++){
        
                console.log("*")
            
         }
         console.log("\n")
     }

 }






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

