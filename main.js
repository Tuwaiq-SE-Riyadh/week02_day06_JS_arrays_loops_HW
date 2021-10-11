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

function nameAndHeight(){
    namesAndHeights=[]
    
characters.map(function(element){

    return namesAndHeights.push(element.name, element.height);
    
})
    console.log(namesAndHeights)
    
}

function firstNameOnly(){
    Fnames=[]
    firstName=""
characters.map(function(element){
    for(i=0;i<element.name.length; i++){
        if(element.name.charAt(i)!==' '){
        firstName+=element.name.charAt(i)
        
        }else{
            Fnames.push(firstName);
            firstName=""
            break
        }
    }

    return Fnames
    
})
    console.log(Fnames)
    
}