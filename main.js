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


function sum(array){
    let result = 0
    for( let i = 0; i < array.length; i++){
        result += array[i] 
    }
    console.log(result)
}
function max(array){
    let m = 0;
      for (let  i = 0; i !=array.length; ++i) {
    if (array[i] > m) {
      m = array[i];
    }
  }
  return m;
  
}
function reverse(array){
    const reversed = array.reverse();
console.log('reversed:', reversed);
}

function stars(x) {
    let start =" ";
          for (let i=1; i<=x; i++) {
            for (let j=1; j<=i; j++) {        
                start +="*" 
                console.log(start);
            }
            console.log("")
        
        }
    }
    function prime(n) {
        
          if (n===1)
          {
            return false;
          }
          else if(n === 2)
          {
            return true;
          }else
          {
              let x = 2
            while(x < n)
            {
              if(n % x === 0)
              {
                return false;
              }
               x++
            }
            return true;  
          }
        }

         function maping(characters){
        let y=characters.map(function(element,index){
            return element.height  })
            console.log("height is "+y);

       let x=characters.map(function(element,index){
            return element.name  })
            console.log("name is "+x);
        
        }

        function reduceMass(characters){

        console.log(characters.reduce(characters.mass));

       let massName= characters.name.reduce(function(previousValue, currentValue) {
            return previousValue.mass + currentValue.mass
          })
     console.log(massName);}