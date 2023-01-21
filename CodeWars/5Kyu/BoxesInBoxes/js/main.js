//The input is n. 

//n represents the number of 'columns' in a box.

//The "box" is a bit complicated. It is described exclusively from 4 example, just 
// //showing an example of n 1,2,3,4. 
// n            box   height width
// ---------------------------------
//                 _
//  1             |_|       2     3

//               _ _
//  2           |  _|       3     5
//              |_|_|   

//             _ _ _
//  3         |    _|       5     7
//            |  _|_|   
//            | |  _|   
//            |_|_|_|   

//           _ _ _ _  t1
//  4       |      _| t2    9     9
//          |    _|_| t2 
//          |   |  _| t3  
//          |  _|_|_| t2  
//          | |    _| t3  
//          | |  _|_| t3  
//          | | |  _| t3  
//          |_|_|_|_| t4  

//We are supposed to infer what the definition of the box in relation to n.

//It could be described as a sort of fibonacci box. It's the previous box, with a larger one drawn around it. The one drawn around it is n wide and (n-1)^2 + 1 tall. Then the one from two back is stacked on top of the interior box.

//What I see is that the box gets duplicated, stacked and the left wall is erased 
//then extended to the side and downwards. That's the best I can describe it.

//So what I would suggest is that the pattern is: 
//Take the previous box (A).
//Duplicate it and store that duplicate (B).
//Erase the roof of A.
//Modify B in a way that erases the left wall. 
//Stack. B on top of A.
//then add a column on the 
//left and a new wall on the left.
//"Add a column" means adding a floor, left wall and extended roof.
//The width of the new column will always be 1. So that's one roof and 1 floor piece
//And the height will be (n-1)^2 + 1 

//So, how, in general, do we represent a box as in just n=1?
//Well, outputs must be by line and it does have to go on the screen.
//In the end this is a string separating lines with the newline character.
//However, we can build that string by line using an array that is just joined with newline characters.

//The height, aka number of lines, is (n-1)^2+1
//The width, that is characters wide, is 2n+1

//n=1 would be arr = [" _ ","|_|"]
//n=2 would be arr = [" _ _ ", "|  _|", "|_|_|"]
//n=3 would be arr = [" _ _ _ ", "|    _|", "|  _|_|", "| |  _|", "|_|_|_|"]


function draw(N) {
    // Try iterative. So we'll build from 1, looping until we get to N.

    // n is the box we are making now, tracked by a for loop. N is the final box size.

    // Construct the next box using the previous (oldBox). Newbox can be the new array.
    // So we're making a new array element by element, line by line:
    // Take the last element, oldBox, copy it into stackedBox, modify and stack it:
    // First erase the left wall. Skip the first line, and erase the first character of the rest.
    // Stack it by replacing the roof of the last with the the bottom of the modified copy.
  
    //Extend the roof by adding " _" to the first line of newBox. 
    //New left wall: add a "| " to each additional line except the last, which gets "|_"
    //put this into oldBox
    //repeat until you get to N

    if (N===0) return;
    
    let oldBox = [" _ ","|_|"]; //that's N=1

    let newBox = [];
    let stackedBox = [];

    if (N===1) return oldBox.join('\n');

    for (let n=1; n<N ;n++){
      stackedBox = oldBox.slice();

      for (let i=1;i<oldBox.length;i++){
        stackedBox[i] = " " + stackedBox[i].slice(1);//erase the | of the left wall
      }
      
      oldBox.shift();//erase the roof

      //stack 'em
      newBox = stackedBox.concat(oldBox);

      //add the new column - roof, wall and floor
      newBox[0] = " _" + newBox[0];//extend roof

      //Draw the left wall
      for (let i=1;i<newBox.length-1;i++){
        newBox[i] = "| " + newBox[i];
      }

      //Add the bottom left corner.
      newBox[newBox.length-1] = "|_" + newBox[newBox.length-1];

      //Get ready for next time, in case we're not at the end of the loop.
      oldBox = newBox;
    }
    return newBox.join("\n");
}

// console.log(draw(1));
// console.log(draw(2));
console.log(draw(3));
  
  