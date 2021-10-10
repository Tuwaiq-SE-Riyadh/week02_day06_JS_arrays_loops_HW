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

// MAP
// getting array of name and height
characters.map(function(element, index){

    return [element.name, element.height];
})

// getting array of first names
characters.map(function(element, index){

    return element.name;
})


// FILTER
// mass > 100
const filterItems = characters.filter(function(element) {
    return element.mass > 100;
})

// female character
const filterItems2 = characters.filter(function(element) {
    return element.gender === 'female';
})


// SOME
//  male character
const hasMale = characters.some(function(element) {
    return element.gender === 'male';
})

// mass less than 50
const hasMass = characters.some(function(element) {
    return element.mass < 50;
})


// EVERY
// is every character have blue eyes
const isEyeColor = characters.every(function(element) {
    return element.eye_color === 'blue';
})

// is every character male
const isMale = characters.every(function(element) {
    return element.gender === 'male';
})
