//The input will be a 2D array. It represents a matrix that composes an image.
//The image is a 2 color image. Each entry represents a pixel.
//The input is composed of 0's and 1's. So each pixel is either a 0 or a 1.

//ex:
// [
//   [0,0,0,0,0,0,0,0,0,0],          "~~~~~~~~~~"
//   [0,0,1,1,0,0,0,0,0,0],          "~~XX~~~~~~"
//   [0,0,1,1,0,0,0,0,0,0],          "~~XX~~~~~~"
//   [0,0,0,0,0,0,0,0,1,0],          "~~~~~~~~X~"
//   [0,0,0,0,0,1,1,1,0,0],          "~~~~~XXX~~"
//   [0,0,0,0,0,0,0,0,0,0],          "~~~~~~~~~~"
// ]

//Here, the 'image' is shown also with ~'s and X's for readability

//When there is a group of x's or 1's that is considered an "island"
//The example here is considered to have 2 islands, not 3 . 
//So a corner adjacent is considered connected.

//output an integer with the number of islands.

//Timeouts, edge cases?
//No substantial timeouts or edge cases. - we aren't expecting unallowed characters
//or a null image or anything weird like that. No BigInts.


function countIslands(image){
    // We could scan the image line by line and try to count islands.
    // Or we could so some sort of transform first? idk.
    
    //lets try the scanning. We'll have to notice when we find the start of
    // an island. Then somehow detect that the island ends. 
    //I think we can intiate a "found island", then notice when the island ends on the 
    //horizontal. Count the "island fragments" on a line. 
    //Then track each fragment until it also ends.
    //Or coalesces with another fragment.
    
    //So line by line we will maintain the number of islands being formed.
    //Then detect termination of an island.
    
    let islandFormingHorz = false;
    let islandsCount = 0;
    let islandPresentIndices = [[]];
    
    //detect initalization of an island.
    //look at the image line by line
    
    //take a line
    for (let i=0;i<image.length;i++){
  //     examine for initialized islands
      for (let j=0;j<image[i].length;j++){
        if (j === 0 && image[i][j]===1){
          //This is the first pixel in a line. I want this statement for initialization
          islandFormingHorz = true;
          islandPresentIndices[i].push(j);
        } else if (image[i][j]<=image[i][j+1]){
          //we started an island
          islandFormingHorz = true;
          islandPresentIndices[i].push(j);
        } else if ((image[i][j]===image[i][j+1]) && islandFormingHorz === true){
          //We're seeing an island extend.
          islandPresentIndices[i].push(j);
        } else if (image[i][j]>=image[i][j+1]){
          //we ended an island, at least on this line.
          islandsForming = false;
          islandsCount++;
        } 
      }
      //We've scanned a line.
      if (i>1){
        //at least two lines have been scanned. 
        //So we need to consider the possibility of connection
        for (let k=0;k<islandPresentIndices[i].length;k++){
          if (islandPresentIndices[i][k] === islandPresentIndices[i+1][k]){
            //we are growing the island vertically.
            //The number of isands growing remains the same.
          } else if (islandPresentIndices[i][k] === islandPresentIndices[i+1][k+1] && islandPresentIndices[i][k+1] === islandPresentIndices[i+1][k]){
            //We 
          }
        }
      }
    }
    
  }
  
  console.log(countIslands([
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,1,1,0,0,0,0,0,0],
    [0,0,1,1,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,1,0],
    [0,0,0,0,0,1,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0],
  ]), 2);
  console.log(countIslands([
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,1,1,0,0,0,0,0,0],
    [0,0,1,1,0,0,0,1,1,0],
    [0,0,0,0,0,0,0,0,1,0],
    [0,0,0,0,0,1,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0],
  ]), 2);
  console.log(countIslands([
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,1,1,0,0,0,0,0,0],
    [0,0,1,1,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,1,0],
    [0,1,1,0,0,1,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0],
  ]), 3);
  
  console.log(countIslands([
    [1,0,0,0,1,0,1,0,0,0]
  ]), 3);
  