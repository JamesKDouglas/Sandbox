//Two strings are input. They come in as an array, boots[0] and boots[1]
//0 is for left, 1 is for right

//Each string is an ascii drawing of a cowboy boot. 

//Search for and count incidences of the pattern [(1)], which represents a dollar bill
//The pattern will be before the delineation character &

//Return the results as a string, ex:
//"This Rhinestone Cowboy has 2 dollar bills in his right boot and 1 in the left"

//ex:
// left = ['',
//  '   ,|___|,',
//  '   |[(1)]|',
//  '   |     |',
//  '   |[(1)]|',
//  '   | ==  |',
//  '   |[(1)]|',
//  '   /    &|',
//  ".-'`  ,   )****",
//  '|         |   **',
//  '`~~~~~~~~~~    ^'],
// right = ['',
//  '   ,|___|,',
//  '   |[(1)]|',
//  '   |     |',
//  '   |[(1)]|',
//  '   | ==  |',
//  '   |[(1)]|',
//  '   /    &|',
//  ".-'`  ,   )****",
//  '|         |   **',
//  '`~~~~~~~~~~    ^'];


function cowboysDollars(boots) {
  console.log(boots);
  boots[0] = boots[0].split("\n");
  boots[1] = boots[1].split("\n");
  //Go through each array and count === 
  let leftCount = 0;
  let rightCount = 0;
  
  for (i of boots[0]){
    if (i==="   |[(1)]|"){
      leftCount++;
    };
  }
  for (i of boots[1]){
    if (i==="   |[(1)]|"){
      rightCount++;
    };
  }
  return `This Rhinestone Cowboy has ${rightCount} dollar bills in his right boot and ${leftCount} in the left
`
}

let boots = [ '\n   ,|___|,\n   |[(1)]|\n   |     |\n   |[(1)]|\n   | ==  |\n   |[(1)]|\n   /    &|\n.-\'`  ,   )****\n|         |   **\n`~~~~~~~~~~    ^',
  '\n   ,|___|,\n   |[(1)]|\n   |     |\n   |[(1)]|\n   | ==  |\n   |[(1)]|\n   /    &|\n.-\'`  ,   )****\n|         |   **\n`~~~~~~~~~~    ^' ]


// let arr= [left, r];
console.log(cowboysDollars(boots), "This Rhinestone Cowboy has 3 dollar bills in his right boot and 3 in the left"
)
