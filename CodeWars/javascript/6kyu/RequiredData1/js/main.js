`//Input will be an array of integers. The integers can be negative or positive.

//Summarize the numbers. Generate an array of arrays that summarizes the list:

//[length of original list, length of unique set from list, Number of values
// that occur only once, [[Most frequently occurring number(s)], 
//number of times the most frequently occurring value occurs.]]

//return the summary as an array of array.

//edge cases: just 1 integer in the "list"? Yes possible.
//Timeouts? 12 000 ms.


function countSel(lst) {
  // console.log(lst);
  //lst.length
  //new Set(). then Object.values(obj).length
  //make an object that tracks the frequency of occurrance.
  //Count how many occur only once for of loop and a counter
  //discover most frequently occurring number with .keys(obj).reduce
  //use key lookup for 5

  let one = lst.length;

  let two  = new Set(lst).size;

  //make counted object for three, four and 5.

  let numFre = {};

  for (i of lst) {
    if (numFre[i]){
      numFre[i]++;
    } else {
      numFre[i] = 1;
    }
  }

  // console.log(numFre);

  //now find three
  let counter =0;
  for (i in numFre){
    if (numFre[i]===1){
      counter++
    }
  }
  let three = counter;  
  // console.log(three);

  //This finds the highest
  let fourTemp = Object.keys(numFre).reduce((a,b)=> numFre[a]>numFre[b]? a:b);
  //But there might be more than one so we need to check that.
  let four = [];
  // console.log(fourTemp)
  for (i in numFre){
    if (numFre[i] === numFre[fourTemp]){
      four.push(+i);
    }
  }
  four = four.sort((a,b)=>a-b);

  console.log(four);

  let five = numFre[four[0]];

  console.log(five);
  return [one, two, three, [four, five]];
}

// console.log(countSel([-3, -2, -1, 3, 4, -5, -5, 5, -1, -5]), [10, 7, 5, [[-5], 3]]);
console.log(countSel([4, 4, 2, -3, 1, 4, 3, 2, 0, -5, 2, -2, -2, -5]), [14, 8, 4, [[2, 4], 3]]);
// console.log(countSel([4, -5, 1, -5, 2, 4, -1, 4, -1, 1]), [10, 5, 1, [[4], 3]]);
`