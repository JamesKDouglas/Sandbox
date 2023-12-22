//The input will be a string.

//The goal is to report the location, as an index, of all the capital letters

//report the list as an array

//ex: CodEWaRs = > [0,3,4,6]

//edge cases/timeout? No not likely. Numbers? not expected.

var capitals = function (word) {
	//break it up
  //go through each letter
  
  
  let wordArr = word.split("");
//   console.log(wordArr);
  let capArr = [];
  for (let i=0;i<wordArr.length;i++){
    if (wordArr[i].toUpperCase() === wordArr[i]){
      capArr.push(i);    
    }
  }
  return capArr;
};

console.log(capitals('CodEWaRs'), [0,3,4,6] );
console.log(capitals('cOdEWaRs'), [1,3,4,6] );
console.log(capitals('hi'), [] );

