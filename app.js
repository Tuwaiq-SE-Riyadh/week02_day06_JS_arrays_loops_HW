function sum  (array){
    let sum = 0
    for(let i = 0; i < array.length; i++)
    {
        sum = sum + array[i];
    }
    console.log(sum)
    }
    
    //Maximum number
    function max(array)
    {
        let maxnumber= 0;
    for( let i = 0; i < array.length; i++)
    { 
        if(array[i] < maxnumber) 
        { 
            maxnumber= array[i];
         }
        }
          console.log(" the maximum number of this array " +maxnumber);
        }


function reversenum(array){
    let x;
    for(let i=array.length;i>=0; i--)
    {
        console.log(array[i])
    }
}


function printStar(num){


  for(let i=1; i <= num; i++)
   {
   //inner loop
    for( let j=0; j<=i; j++)
   {
     console.log('*');
    }
     
   }
}

function primenum (){
    let i=2;
    let flag=false;
    while (i<=number/2) {
        if (number%i==0){
            flag=true;
            break;
        }
        i++;
    }
if (!flag){
    console.log("true")}
    else{
        console.log("false")
    }
    
}
