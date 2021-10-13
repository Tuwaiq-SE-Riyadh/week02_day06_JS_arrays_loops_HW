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

//bounse
//map
// Get array of objects with just name and height properties
characters.map(function(element, index){
    return element.name + "  "+element. height
})
// Get array of all first names
let fristName=characters.map(function(element, index){
    return element.name.split(" ")[0]
})


//reducer 
let name1=characters.reduce((acc,element)=> acc+element.mass,0)
let name2=characters.reduce((acc,element)=> acc+element.name.length,0)
//FILTER
let heightFilter=characters.filter((element)=> element.mass >100)

let genderFilter=characters.filter((element)=> element.gender==="female")

//sort
let sortByName=characters.sort((a,b)=>{
  return a.name-b.mass
  }
  
  );
  // Another code
  // function getMaxOfArray1(characters){
  //   characters.sort().name;
  //   console.log(characters);

  // }
  let sortByGender=characters.sort((a,b)=>{
      return a.gender-b.height
      }  
      );
    //EVERY
    let every3=characters.every((element)=> element.eye_color==="blue")
    let every4=characters.every((element)=> element.gender==="male")


    // SOME


  let somegender=characters.some((element)=> element.gender=== "male")
  let somemass=characters.some((element)=> element.mass<50)
  // end 
//   Numbers' summations

function sumAraary(a) {
  let sum=0
  for (let i=1; i<a.length;i++){ 
     
      sum +=a[i]
  }
  console.log(sum);
}

//  MaxOfArray
function getMaxOfArray(numArray) {
    return Math.max(null, numArray);
  }

  //reverse
  function reverse(a) {
    
    for(let i=a.length-1;i>=0;i--)
    console.log(a[i])
}


//statr
  function start(a)
  {
    let string = "";
    for (let i = 1; i <= a; i++) {
      for (let j = 0; j < i; j++) {
        string += "*";
      }
      string += "\n";
    }
    console.log(string)
  
}
// 
//while 
function power(x){
    let i = 2, count = false;
        while (i <= x / 2) {
            if (x % i == 0) {
                count = true;
                break;
            }
            i++;
        }
        if (!count) {
            console.log(x + " is prime number")
        } else {
            console.log(x + " false otherwise.")
        }
}



