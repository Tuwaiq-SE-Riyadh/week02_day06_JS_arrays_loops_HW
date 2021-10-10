

function summ(array){

    let Sum=0;
    for (let i = 0; i < array.length; i++) {
     Sum +=array[i];
  
    }
    console.log(Sum)

}

function max(array){

    let maxNum=0;

    for(let i=0 ; i<array.length ; i++){
        if(array[i]>maxNum){
            maxNum=array[i];
        }
    }
    console.log(maxNum)
}

function reverse(array) {

    let x;
    for (let i = array.length; i >= 0 ; i--) {
        console.log(array[i])
        
    }
}

function stars(number) {

    for (let i = 0; i < number; i++) {
        for (let j = 0; j <= i; j++) {
            console.log("*") 
        }
        console.log(" ")
    }
    
}

function prime(number) {

  let i=2;
  let flag=false;

     while(i<=number/2){
      if(number%i==0){
       flag=true;
       break
     }
     i++;
    }
    if(!flag){
          console.log("True")}
      else{
        console.log("False")}   
}

const fruits=["Banana","Apple","Orange","Mango"];
fruits.sort();
