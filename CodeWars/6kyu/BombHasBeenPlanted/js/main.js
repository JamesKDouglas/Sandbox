  //a map and time are given to us as inputs.
  //The map is a grid that contains 3 elements: the CT (traveller), the destination(B)
  //and a kit that moves the destination operation from 10s to 5s

  //The point is to move the traveller to the destination and perform the operation 
  //within time t.

  //So there is movement and the final operation. The traveller can pick up
  //the kit to shorten the final operation.

  //The output will be true or false - can the traveller make it to the destination
  //and also complete the operation in time (true) or not (false)

  //traveller takes 1s to move to a new map location. Diagonal movement is allowed.

  //ex: time = 14
  // m = 
  // [
  //   ["0", "0", "0", "0", "B"],
  //   ["0", "0", "0", "0", "CT"],
  //   ["0", "0", "0", "0", "0"],
  //   ["0", "K", "0", "0", "0"],
  // ]
  //return true. The CT can pick up the kit K and go back to be or just go straight to b.
  //either is fine.

  //CT is at 1,4 with 0 indexing. B is at 0,4. subtract them and you get 1,0.
  //CT is 1 away from B. That's CT to B -1, 0

  //The number of moves that k is from CT is :
  //K is at 3,1. ct is at 1, 4. From CT to K is 2, -3. . First we will go diagonally
  //as much as possible. That's from 1, 4 to 2, 3. then 3, 2, Then horizontally from 
  //to the last position.   

  //ex:
  //m = 
  // [
  //   ["CT", "0", "0", "0", "0", "0", "0"],
  //   [ "0", "0", "0", "0", "0", "0", "0"],
  //   [ "0", "0", "0", "0", "0", "0", "0"],
  //   [ "0", "0", "0", "0", "0", "0", "0"],
  //   [ "0", "0", "0", "0", "0", "0", "0"],
  //   [ "0", "0", "0", "0", "0", "0", "0"],
  //   [ "0", "0", "0", "0", "0", "0", "0"],
  //   [ "0", "0", "0", "0", "0", "0", "B"]
  // ]
  // t = 10s
  // false. It takes 7 s to get there and by that time there are only 3s left 
  //which is not enough.

  //edge cases? No superposition is possible. Np wrap around. 
  //It can be that there is no kit. But there is always CT and B.
  //inclusive timing: If they defuse it at second 0 that's a win.
  //(ex: next to B with no kit and 10s left returns true successfully defused)
  //Job size? As in examples.
  //Empty map? Not going to happen. Could be just 2 spots though.
  //Map is always rectangular

  function bombHasBeenPlanted(map, time) {
    console.log(map);
    //Calculate moves to the bomb
    //check - is this something we don't need the kit for?
    //calculate route to the kit
    //calculate rout from kit to bomb
    //Check - will we make it in time?
    
    //Route calculculations are based on the positions. 0 indexed.
    //ex for map 5, ct is at 0,1. b is at 5, 2. How many moves?
    //5-1, 2-1. => 4,1 (arr r). 5 total. So that's without a diagonal move. 
    //Each diagonal move saves a single move. So how many diagonal moves are possible?
    //Take the smallest number of r. That's the number of diagonal moves possible.
    //Subtract it from the total and that's your route count.
    
    //coords are type [[x1,y1],[x2,y2]];
    
    //we have to extract the coordinates.
    
    //input "CT", "K" or "B" and we get back a coordinates as an array [x,y]
    function searchStr(string, map){
      // console.log("start searching for a thing", string, map);
      //Just a simple search line by line spot by spot.
      for (let row = 0;row<map.length;row++){
        for (let char=0;char<map[0].length;char++){
          // console.log("checking to see if ", map[char][row], "is", string);
          if (map[row][char] === string){
            //The codewars tester uses an inverted coordinate system, (y,x) which is really odd. 
            //for example '8x7' is map with 8 rows and y characters wide
            return [char, row];
          }
        }
      }
      return "not found";
    }
    
    function routeDist(coords){
      // console.log("coordinates to find distance between:", coords);
      let [x1,y1,x2,y2] = coords.flat();
      let moveCount = 0;
      //orthogonal travel only
      let xMoves = Math.abs(x2-x1);
      let yMoves = Math.abs(y2-y1);
      
      moveCount = yMoves+xMoves;
      // console.log("moves without diagonal:", moveCount);
      //now consider diagonal
      let smallest = Math.min(yMoves,xMoves);
      
      //now correct
      moveCount = moveCount - smallest;
      // console.log("moves with diagonal:", moveCount)
      return moveCount;
    }
    
    //get the coordinates
    let CTlocation = searchStr("CT", map);
    let Klocation = searchStr("K", map);
    let Blocation = searchStr("B", map);

    console.log("matrix:", map.length, "x" ,map[0].length, " time: ", time, "seconds ", "CT position:", CTlocation, " Bomb position: ", Blocation);
    //now we should have the 3 coordinates.
    // console.log("CT", CTlocation);
    // console.log("K", Klocation);
    // console.log("B", Blocation);
    
    // now for the distances
    let noKitDist = routeDist([CTlocation, Blocation]);

    console.log(noKitDist);
    if (noKitDist <= (time-10)){
      //no problem defusing bomb!
      console.log("regular defuse no problem")
      return true;
    } else if (Klocation ==="not found"){
      console.log("no time, no kit. Booom")
      //couldn't defuse it, no kit.
      return false;
    }
      else {
      //If there is a kit let's try that
        let kitDist = routeDist([CTlocation, Klocation]);
        let kitToB = routeDist([Klocation, Blocation]);
        if ((kitDist+kitToB) <= (time-5)){
          return true;
        } else {
          return false;
        }
    }
  }


  const map5 = [
      ["0", "0", "0", "0", "0", "0"],
      ["CT", "0", "0", "0", "0", "0"],
      ["0", "0", "0", "0", "0", "B"],
      ["0", "0", "0", "0", "0", "0"],
      ["0", "0", "K", "0", "0", "0"],
      ["0", "0", "0", "0", "0", "0"],
      ["0", "0", "0", "0", "0", "0"],
      ["0", "0", "0", "0", "0", "0"],
      ["0", "0", "0", "0", "0", "0"]
    ];
  // console.log(bombHasBeenPlanted(map5, 13), true);

  const map6 = [
    ["0", "K", "0", "CT"],
    ["0", "0", "0", "0"],
    ["0", "0", "0", "0"],
    ["B", "0", "0", "0"]
  ];
  // console.log(bombHasBeenPlanted(map6, 12), true);

  const map7 = [
    ["0", "K", "0", "CT"],
    ["0", "0", "0", "0"],
    ["0", "0", "0", "0"],
    ["B", "0", "0", "0"]
  ];
  // console.log(bombHasBeenPlanted(map7, 2), false);

  map8 = [
    ['CT','0', '0','0', '0', '0','0'],
    ['0', '0', '0','0', '0', '0','0'],
    ['0', '0', '0','0', '0', '0','0'],
    ['0', '0', '0','0', '0', '0','0'],
    ['0', '0', '0','0', '0', '0','0'],
    ['0', '0', '0','0', '0', '0','0'],
    ['0', '0', '0','0', '0', '0','0'],
    ['0', '0', '0','0', '0', '0','B']
  ]
    console.log(bombHasBeenPlanted(map8, 15), false);
