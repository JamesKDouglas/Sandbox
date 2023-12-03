// The input  will be a string, representing a name.

//The goal is to shorten that to the first 2 characters only.

//Combine the original name and the shortened version into an array - 
//unless the original is 2 or fewer characters long, in which case return 
//only that element in the array.

// mexico => ["mexico", "me"];

//edge case: the original name is 2 or fewer characters in length.
//so just return that 1 element in the array
//no relevant timouts. Expect vald inputs.

function whoIsPaying(name){
  //early return : 2 or less in length. 
  
  //use string.substring(0,2)
  
  if (name.length<=2) return [name];
  
  let shortened = name.substring(0,2);
  return [name,shortened];
}

console.log(whoIsPaying("Mexico"), ["Mexico", "Me"]);
console.log(whoIsPaying("Bob"), ["Bob", "Bo"]);
console.log(whoIsPaying("Bobberson"), ["Bobberson", "Bo"]);
