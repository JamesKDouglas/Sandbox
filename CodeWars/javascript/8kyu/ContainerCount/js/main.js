// parameters: input a string with * as items and | as walls. Count the number of enclosed items.
// return: the number of enclosed items.
// example: *|*** return 0. *|**| returns 2. *||***|*|*** returns four.
// pseudocode:
//Trim off the unclosed items on the end. 
//Count the asterisks remaining.

//OR: 
//Count the unclosed items on the end.
//count all asterisks and subtract that number.

//counting can be done with for loops, filter then length, or regex. Which is faster? Think 10s for 500  000 characters.

//first, generate an array we can practice with.


//limit seems to be around 200 000.
// localStorage.setItem("dataset", genDataSet(200 000));
let bigData = localStorage.getItem("dataset");//stored as a string.
let smallData = "****|**|****";

function genDataSet(n){
  //n is the size
  let arr = [];
  let astNum;

  for (let i =0;i<=n; i++){
    astNum = Math.floor(Math.random() * 30);//artificial limit of 30 items per container.
    for (let j=0;j<=astNum;j++){
      arr.push("*");
    }
    arr.push("|");
  }

  arr.push("*");//just an extra to test trim
  arr.push("*");//just an extra to test trim
  arr.push("*");//just an extra to test trim

  //return as a string.
  return arr.join("");
}

// Just with for loops
function countItems(str){

  let start =0;
  let end = 0;
  //comes in as a string.

  start = Date.now();
  let arr = str.split("");
  end = Date.now();
  console.log(`runtime for splitting a string to an array: ${end-start} ms`);

  // start = Date.now();
  // let stringTest = arr.join("");
  // end = Date.now();
  // console.log(`runtime for splitting a joining an array to a string: ${end-start} ms`);


  //Trim from the start
  while (arr[0] == "*"){
    arr.shift();
  }

  //Trim from the end
  while (arr[arr.length-1] == "*"){
    arr.pop();
  }

  //count asterisks.
  start = Date.now();

  let counter = 0;
  // let newArr = [];

  // with a for loop
  for(let i=0;i<arr.length;i++){
    if (arr[i] =="*"){
      counter++;
    }
  }

  //with regex
  // counter = (arr.join("").match(/\u002A/g) || []).length;//002A is unicode for *;

  end = Date.now();

  console.log(`runtime for counting *: ${end-start} ms`);

  // return newArr.length;
  return counter;

}

// ok, the basic version using a counter only takes 19ms for 300 000 characters. I don't know what was going on with the HackerRank system that it took over 10s.
// pushing the * to an array then counting the length takes 138ms. So that is a lot longer to add something to an array than to increment a variable.
//and regex? It takes an entire 500ms to do the same job of counting. splitting a string into an array takes 20ms. However, joining in the opposite direction takes 220 ms. So the regex part takes 280ms and the joining about 220.


