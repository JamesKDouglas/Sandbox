//The input is n. 

//n represents the number of 'columns' in a box.

//The "box" is a bit complicated. It is described exclusively from 4 example, just 
//showing an example of n1,2,3,4. 

//We are supposed to infer what the definition of the box in relation to n.

//What I see is that the box gets duplicated, stacked and the left wall is erased 
//then extended to the side and downwards. That's the best I can describe it.

//So what I would suggest is to start with a pattern for 1, then duplicate and 
//and modify it in a way that erases the left wall, then adds a column on the 
//left and a new wall on the left. So that means a floor, wall and extended roof.

//rephrase: Start with 1. Duplicate it and calculate resulting height.
//Erase the left wall. Extend the ceiling to the width. 
//Add a wall downwards. Add a floor.
//Now stack the duplicated, modified one on top of the previous one.
//continue n times.

//So, how, in general, do we represent a box as in just n=1?
//Well, outputs must be by line and it does have to go on the screen.
//The height, aka number of lines, is (n-1)^2+1
//The width, that is characters wide, is 2n+1
//If we are going to do this recursively, these could be base cases.
//but it's probably easier to just use n=1 as the base case.

//I see they seem to want the solution output as an array of strings.

// So each entry is a line.
// Each column contains " _" or 2 characters, with additional 1 terminal one.
// 
//n=1 would be arr = [" _ ","|_|"]
//n=2 would be arr = [" _ _ ", "|  _|", "|_|_|"]
//n=3 would be arr = [" _ _ _ ", "|    _|", "|  _|_|", "| |  _|", "|_|_|_|"]


function draw(n) {
    // TODO your code ..
    if (n == 1) return [" _ ", "|_|"].join('\n');
  }