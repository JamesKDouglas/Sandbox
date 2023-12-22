//The input will be a string that represents a road, "road"
//and n, which is how "long" the simulation goes on for.

//The idea is that a car travels along the "road". With each time step the car can move 1 spot forward (right).
//Each time the car takes a step, generate a string diagram:
//C for the car. . for the road, then the lights start with a color.
//Lights can be R, G, O (orange). Red and green stay for 5 time steps, orange or 1.

//Output an array of string showing each state (every time step).

//edge cases: no road. no lights. No car? Car drives off the edge.
//Timeout job 12 000 ms. Job size modest.

function trafficLights(road, n) {
  //Keep track of 2 things: car position and light position/state.
  //These together comprise the state. 
  //The light state is from 0 to 10, with an array indicating 
  //the corresponding letter.

  //When making the step, consider light color and car position. 
  //Make changes to the state elments based on the rules. 

  //After changing the state combine the two state things into a string and store 
  //it so we can return the states at the end.
  
  //A light is initialized with either 0, or 5 (not 10, they never start orange)
  let lightCycle = ["R","R","R","R","R","G","G","G","G","G","O"];
  
  //This will hold the position and state of the lights
  let roadArr = road.split("");
  
  let noCar = false;
  //special case - no car:
  if (roadArr.findIndex((el)=>el === "C") === -1){
    noCar = true;
  }
  
  //Output the state to this array after every time step
  let statesArr = [];
  statesArr.push(road);
  
  //Right now the road array has letters/colors for lights. 
  //And there is a car at the start. Lets change that - remove the car. I will add the car back later:
  roadArr[0] = ".";

  //Then represent the light status as an integer corresponding to lightCycle:
  for (let i=0;i<roadArr.length;i++){
    if (roadArr[i] == "R"){
      roadArr[i] = 0;
    } else if (roadArr[i] == "G"){
      roadArr[i] = 5;
    }
  }
  
  //Now we're ready for the time iterations
  //The car starts at 0. I look at the next position so i starts at 1.
  let carPos = 0;
  let examinePos = 1;
  for (let i=1;i<=n;i++){
    //Then update lights:
    roadArr = updateLights(roadArr);
    //if there is no red or orange light advance
    if (roadArr[examinePos] > 4 && roadArr[examinePos] != 10 || roadArr[examinePos] == "." || typeof(roadArr[examinePos]) == "undefined"){
     carPos++;
     examinePos++;
    }

    //otherwise just don't advance

    //temporary copy to make the string.
    let temp = roadArr.slice();

    //add the car, if there even is one
    if (carPos > roadArr.length-1){
      noCar = true;
    }
    if (noCar === false){
      temp[carPos] = "C";
    }

    //change numerical light state to letter corresponding to the light state
    for (let i = 0;i<temp.length;i++){
      if (typeof(temp[i]) === "number"){
        temp[i] = lightCycle[temp[i]];
      }
    }
    let str = temp.join("");

    statesArr.push(str)
  }

  function updateLights(arr){
    for (let i = 0;i<arr.length;i++){
      if (typeof(arr[i]) == "number"){
        arr[i] = ++arr[i]%11 //Increase, then rollover at 10.
      }
    }
    return arr;
  }

  return statesArr;
}

console.log(trafficLights("....R............G......", 10), [
      "....R............G......",  // 0
      "....R............G......",  // 1
      "....R............G......",  // 2
      "....R............G......",  // 3
      "....R............G......",  // 4
      "....G............O......",  // 5
      "....G............R......",  // 6
      "....G............R......",  // 7
      "....G............R......",  // 8
      "....G............R......",  // 9
      "....O............R......"   // 10
    ]);

console.log(trafficLights("C...R............G......", 10), [
      "C...R............G......",  // 0
      ".C..R............G......",  // 1
      "..C.R............G......",  // 2
      "...CR............G......",  // 3
      "...CR............G......",  // 4
      "....C............O......",  // 5
      "....GC...........R......",  // 6
      "....G.C..........R......",  // 7
      "....G..C.........R......",  // 8
      "....G...C........R......",  // 9
      "....O....C.......R......"   // 10
    ]);

