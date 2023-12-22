//Input will be an array of integers and a direction.
//The array represents "boxes", listed by the number per column.
//The 'boxe' are stacked on top of each other, held down by gravity.
//That means some thing: the top row cannot have more than the bottom, for example

//The goal is to "flip gravity" based on the direction.
//That is, pull all the boxes to the left, or the right side of the box.

//Output the number of boxes per column in the new arrangement.

//ex:
// 'R', [3, 2, 1, 2]      ->  [1, 2, 2, 3]
// 'L', [1, 4, 5, 3, 5 ]  ->  [5, 5, 4, 3, 1]

//null? Invalid data, like a letter instead of an integer? don't worry about it.

//job size? bigInt? Timeouts? Nah.

const flip=(d, a)=>{
    //All we really need to do is sort the arrays
    let newArr = [];
    if (d === "L"){
      //sort descending
      newArr = a.sort((x,y)=>y-x);
    } else if (d === "R"){
      newArr = a.sort((x,y)=>x-y);
    }
    return newArr;
  }
  
  console.log(flip('R', [3, 2, 1, 2]), [1, 2, 2, 3]);
  console.log(flip('L', [1, 4, 5, 3, 5 ]), [5, 5, 4, 3, 1]);
  