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





function map_to_names(arr)
{
	return arr.map(
	(char) => {
		return char.name;
	}
);
}
const names = map_to_names(characters);
console.log("array of all names: [" + names.join(" , ") + "] <br>");

constheights = characters.map(
	(char) => {
		return char.height;
	}
	);
console.log("array of all heights: [" + heights.join(" , ") + "] <br>");



// Reduce

var total_height = characters.reduce(
	(acc, cur) => {
		return acc + cur.height;
		} , 0 
		
	);
console.log("total height of all characters: " + total_height + " <br>");

consteyecolors = characters.reduce(
		(acc, cur) => {
			if(acc[cur.eye_color])
			{
				acc[cur.eye_color] += 1;
			}
			else 
				acc[cur.eye_color] = 1;
				
			return acc;
		} , {}
		
	);
	
	console.log(eyecolors);
console.log("total number of characters by eye color: [" );
for (const key of Object.keys(eyecolors)) {
  document.write(key + ": " + eyecolors[key]+", ");
}





console.log("<h3>Filter</h3>");

const lessthan200 = characters.filter(
    (char) => {
      return char.height < 200;
    }
);
console.log("characters with height less than 200: [" + map_to_names(lessthan200).join(',') + "]<br>");


const males = characters.filter(
    (character) => character.gender == 'male'
);
console.log("all male characters: [" + map_to_names(males).join(',') + "]<br>");





const sorted_mass = characters.sort(
    (a,b) => {
      return a.mass - b.mass;
    }
);
console.log("sort by mass: [" + map_to_names(sorted_mass).join(',') + "]<br>");

const height_mass = characters.sort(
    (a,b) => {
      return a.height - b.height;
    }
);
console.log("sort by height: [" + map_to_names(height_mass).join(',') + "]<br>");




const check1 = characters.every((char)=> {return char.mass > 40;});
console.log("Does every character have mass more than 40?: " + check1 + "<br>");

const check2 = characters.every((char)=> {return char.height < 200;});
console.log("Is every character shorter than 200?: " + check2 + "<br>");



// Some

const check3 = characters.some((char)=> {return char.eye_color == 'blue';});
console.log("Is there at least one character with blue eyes?: " + check3 + "<br>");

const check4 = characters.some((char)=> {return char.height > 210;});
console.log("Is there at least one character taller than 210?: " + check4 + "<br>");


