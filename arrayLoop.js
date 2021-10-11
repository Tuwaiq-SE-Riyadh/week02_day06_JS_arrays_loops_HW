
function addArray(arr){
    let result =0
       for(i=0;i<arr.length ; i++){
   
           result +=arr[i]
       }
       console.log("The result is: "+result)
   }

   function max(arr){
    let n =0
       for(i=0;i<arr.length ; i++){
           if(arr[i]>n){
               n=arr[i]
           }
           
       }
       console.log("The max number in the array is: "+ n) 
   }

   function rev(arr){

       a= arr.reverse()  //method source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
    
       console.log("The reverse order: "+ a) 
   }

  
   function star(num){
    str=""
    for(i=0;i<num ; i++){
 
    str=str+"*"
    console.log(str)
    }
   }
    function primeNumber(n){

     
        
       if(n===1 || n===0 ){

        console.log(n+" is Not prime Number!")
       
       
       }else {
        i=2
        while(i<n){
            if(n%i===0){

        console.log(n+" is  not a prime Number")
        break
    }
        
        i++



        }
        if(i===n || n===2)
        console.log(n +" is a prime number")
       }
    }
    





