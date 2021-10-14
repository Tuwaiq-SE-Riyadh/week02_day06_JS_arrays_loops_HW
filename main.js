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
    let max=arr[0];
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

// Q4**
 function stars(a){
     
     for(let i=1;i<=a;i++){
         let str="";
         for (let j=1;j<=i;j++){
            str+="*"
                
         }
         console.log(str)
         console.log("\n")
     }

 }

 //Q5
 function isPrime(a){
     let i=2
     let b;
     let c="true"
     while(i<a){
         b=a%i;
         console.log(b)
         if(b===0){
            c="false"
         }
         i++
     }
     if (c==="false"){
         console.log("Not prime number ")
     }else{
        console.log("Prime number ")
     }
 }




// Bouns for array lab 

//   Q1 Bouns
function MAP(){
    let arr;
    let arr2;
    arr=characters.map(function(elemnt ,index){
        return elemnt.name
    })

    arr2=characters.map(function(elemnt ,index){
        return elemnt.height
    })
    console.log("the array of names "+arr)
    console.log("the array of height "+arr2)
}


// Q2 Bouns 

function Reduce(){
    
    const total = characters.reduce(function (acc, element, index) {
        return acc + element.height;
      }, 0);
      console.log(total)

      const total2 = characters.reduce(function (acc, element, index) {
        return acc + element.eye_color +" ";
      }, 0);
      console.log(total2)
}

// Q3

function filter(){
    
    const Less = characters.filter(function ( element, index) {
        return  element.height<200
      });
      
          console.log(Less)
      

      const male = characters.filter(function ( element, index) {
         return element.gender=="male"
       });
      console.log(male)
    }



// bouns for this HW


// Q1
function MAP(){
    let arr;
    let arr2;
    arr=characters.map(function(elemnt ,index){
        return elemnt.name , elemnt.height
    })

    arr2=characters.map(function(elemnt ,index){
        return elemnt.name
    })
    console.log("the array of opject {name;height} "+arr)
    console.log("the array of height "+arr2)
}


function Reduce(){
    
    const total = characters.reduce(function (acc, element, index) {
        return acc + element.mass;
      }, 0);
      console.log(total)


}

function filter(){
    
    const L = characters.filter(function ( element, index) {
        return  element.mass>100
      });
      
          console.log(L)
      

      const fmale = characters.filter(function ( element, index) {
         return element.gender=='female'
       });
      console.log(fmale)
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

