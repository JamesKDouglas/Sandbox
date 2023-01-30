//input of a collection of bits. "1" string types? No, always 0 or 1.
//The bits will be organized into nested arrays.

//will a photo ever be empty? no.

//They represent an "image" of a rectangular prism.
//The prism is cut up into cells or rooms, according to the grid represented by the
//bit array.

//Each bit represents side of the prism and whether the associated cube is lit from within.
//Rooms have opaque walls. We ignore interior rooms. 

//Count how many rooms are illuminated, calculated from the bit array.

//return an integer.

//Note how a room on the corner has 2 windows and both will shine if the light is on.
//Also, a prism may be only 1 layer thick, in which case rooms on the 
//interior have 2 windows and on the ends each has 3.

//The information about lighting is organized into a 3D array with each side 
//represented by a 2d array and 4 sides. The 2d array has lines of 0s and 1's
//with an array for each line.

//This is the simplest case, 1x1x1.
// pictures: [[[1]], [[1]], [[1]], [[1]]]
// return: 1

//This building is 1x1x3 tall. So it's basically all corner rooms.
// pictures: [[[1],[0],[0]], [[1],[0],[0]], [[1],[0],[0]], [[1],[0],[0]]]
// return: 1

//This building has one dimension that is only 1 room thick.
//That allows a single room to light up 2 windows from the center.
// pictures: [[[1, 1, 0]], [[0]], [[0, 1, 1]], [[1]]]
// return: 2

// pictures: [[[1, 1, 0], [1, 0, 1]], [[0], [1]], [[0, 1, 1], [1, 0, 1]], [[1], [1]]]
// return: 4

function countRooms(pictures) {
    //If the building is 1 wide, discard all images except 1 aspect
    //and count the 1's for just that
    
    // to match the incoming array use 0 - N, 1-W 2-S, 3-E.
    //narrowDim is meant to hold which dimension is only 1 thick. 
    //Really it can only be a 0 or 1;
    
    let illRooms = 0;
    
    if (pictures[0][0].length === 1){
      //east-west axis is only 1 wide
      //So only use the west photo.
      
      //count the 1's present in the west photo
      for (let i=0;i<pictures[1].length;i++){
        illRooms += pictures[1][i].reduce((a,c)=>a+c,c=0);
      }
      return illRooms;
      
    } else if (pictures[1][0].length === 1){
      //north-south axis is only 1 wide.
      for (let i=0;i<pictures[0].length;i++){
        illRooms += pictures[0][i].reduce((a,c)=>a+c,c=0);
      }
      return illRooms;
    }
    
    //so we don't count corners twice:  
    //Slice off the first and last row of the east and west.
    //That can mean just zeroing them out.
      for (let i=0;i<pictures[1].length;i++){
        pictures[1][i][0] = 0;
        pictures[1][i][pictures[1][i].length-1] = 0;
      }
      for (let i=0;i<pictures[3].length;i++){
        pictures[3][i][0] = 0;
        pictures[3][i][pictures[3][i].length-1] = 0;
      }
    
    //Then,
    //Count all the 1's.
    for (let i=0;i<3;i++){
      for (let j=0;j<pictures[i].length;j++){
        illRooms += pictures[i][j].reduce((a,c)=>a+c,c=0);
      }
    }
    return illRooms;
  }
  
  //This is the simplest case, 1x1x1.
  console.log(countRooms([[[1]], [[1]], [[1]], [[1]]]), 1);
  
  //This building is 1x1x3 tall. So it's basically all corner rooms.
  console.log(countRooms([[[1],[0],[0]], [[1],[0],[0]], [[1],[0],[0]], [[1],[0],[0]]]), 1);
  
  //This building has one dimension that is only 1 room thick.
  //That allows a single room to light up 2 windows from the center.
  console.log(countRooms([[[1, 1, 0]], [[0]], [[0, 1, 1]], [[1]]]),2);
  
  console.log(countRooms([[[1, 1, 0], [1, 0, 1]], [[0], [1]], [[0, 1, 1], [1, 0, 1]], [[1], [1]]]),4);
  