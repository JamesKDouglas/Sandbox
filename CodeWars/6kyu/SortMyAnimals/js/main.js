//input will be a list (array) of objects. 
//It's a list of animals with an associated number of legs.

//goal: sort the list.

//return an array which is sorted by leg number (ascending). Then by name (alphabetical)

//ex:[{name: "Spider",numberOfLegs: 8},{name: "Cat",numberOfLegs: 4}] => [{name: "Cat",numberOfLegs: 4},{name: "Spider",numberOfLegs: 8}] 

//edge cases. empty - return empty.
//invalid inputs? Not expect 
//case sensitivity? not expected
//timeouts? job size? modest. 12000ms 

function sortAnimal(animals) {
  //early return: empty.
  //just an if statement.
  if (animals.length === 0) return [];
  
  //use sort. that's a 2 layer sort. 
  let sorted = animals.sort((a,b) => {
    console.log("sort going!");
    console.log(Number(a.numberOfLengths) === Number(b.numberOfLegs));
    if (a.numberOfLengths === b.numberOfLegs){
      console.log("same number of legs for ", a.name, b.name);
      console.log(a.name - b.name);
      return (a.name > b.name);
    } else {
      console.log("sort progressing");
      return (a.numberOfLengths > b.numberOfLegs);
    };
  }) 
  
  return sorted;
}

console.log(sortAnimal([
      { name: "Cat", numberOfLegs: 4 },
      { name: "Snake", numberOfLegs: 0 },
      { name: "Dog", numberOfLegs: 4 },
      { name: "Pig", numberOfLegs: 4 },
      { name: "Human", numberOfLegs: 2 },
      { name: "Bird", numberOfLegs: 2 }
    ]), [
      { name: 'Snake', numberOfLegs: 0 },
      { name: 'Bird', numberOfLegs: 2 },
      { name: 'Human', numberOfLegs: 2 },
      { name: 'Cat', numberOfLegs: 4 },
      { name: 'Dog', numberOfLegs: 4 },
      { name: 'Pig', numberOfLegs: 4 }
    ]);

// console.log(sortAnimal([]), []);

// console.log(sortAnimal([
    //   { name: "Centipede", numberOfLegs: 100 },
    //   { name: "Snail", numberOfLegs: 0 },
    //   { name: "Lizard", numberOfLegs: 4 },
    //   { name: "Dog", numberOfLegs: 4 },
    //   { name: "Human", numberOfLegs: 2 },
    //   { name: "Bird", numberOfLegs: 2 }
    // ]), [
    //   { name: 'Snail', numberOfLegs: 0 },
    //   { name: 'Bird', numberOfLegs: 2 },
    //   { name: 'Human', numberOfLegs: 2 },
    //   { name: 'Dog', numberOfLegs: 4 },
    //   { name: 'Lizard', numberOfLegs: 4 },
    //   { name: 'Centipede', numberOfLegs: 100 }
    // ]);