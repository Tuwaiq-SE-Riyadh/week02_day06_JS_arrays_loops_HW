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
console.log("------------------Numbers' summations------------------------");
sumAll(x);
console.log("------------------Maximum number------------------------");
maxArr(x);
console.log("------------------Reverse Array------------------------");
rev(x);
console.log("------------------stars pattern------------------------");
stars_pattern(5);
console.log("------------------While loop prim------------------------");
prime(4);
console.log("------------------MAP 1------------------------");
getName();
console.log("------------------MAP 2------------------------");
getfristname();
console.log("------------------REDUCE 1------------------------");
Get_total_mass();
console.log("------------------REDUCE 2------------------------");
Get_total_c();
console.log("------------------FILTER 1------------------------");
m_100();
console.log("------------------FILTER 2------------------------");
female();
console.log("------------------Sort 1------------------------");
sort_name();
console.log("------------------Sort 2------------------------");
sort_g();
console.log("------------------EVERY 1------------------------");
e_eye();
console.log("------------------EVERY 2------------------------");
e_g();
console.log("------------------SOME 1------------------------");
some_m();
console.log("------------------SOME 2------------------------");
some_mass();





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
    
// ------------------------------------------------------------------
        
        function getfristname(){
            characters.map(function(element){
                console.log(element.name.split(" ")[0]);
            });
            }
        
        function Get_total_mass(){
            const m = characters.reduce(function (a, el) {
                return el.mass + a;
              }, 0);
                console.log(m);
        }
        
        function Get_total_c(){
            const m = characters.reduce(function (a, el) {
                return el.name.length + a;
              }, 0);
                console.log(m);
        
        }
        
        function m_100(){
            const h = characters.filter(function (el) {
                return el.mass > 100;
              });
              
              console.log(h);
        }
        
        function female(){
            const m = characters.filter(function (el) {
                return el.gender === 'female';
              });
              
              console.log(m);
        }
        
          function e_eye(){
            const m = characters.every(function(el){
                return el.eye_color === 'blue';
              })
              console.log(m)
        }
        
        function e_g(){
            const m = characters.every(function(el){
                return el.gender === 'male'
              })
              console.log(m)
        } 
        
        function sort_name(){
            const m = characters.sort(function(e1 , e2){
                return e1.name.localeCompare(e2.name);
              })
              console.log(m)
        } 
        
        function sort_g(){
            const m = characters.sort(function(e1 , e2){
                return e1.gender.localeCompare(e2.gender);
              })
              console.log(m)
        } 
        
        function some_m(){
            const m = characters.some(function(el){
                return el.gender === "male";
              })
              console.log(m)
        } 
        
        function some_mass(){
            const m = characters.some(function(el){
                return el.mass < 50;
              })
              console.log(m)
        } 