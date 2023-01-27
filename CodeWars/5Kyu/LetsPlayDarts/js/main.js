//input is a set of cartesian coordinates. No nulls expected.

//We have dimensions for a dart board, and a description of the pattern.

//The output should be what score the dart scores. 
//Scores are string codes corresponding to the areas. There is no integer value.

//So return the score the dart obtains.

//Dart boards use a slice system for a point value, combined with zones radially.

//output will be a string.

// -133.69, -147.38 => "X"
// 4.06, 0.71 => "DB"
// 2.38, -6.06 => "SB"
// -73.905, -95.94 => "7"

//string handling? No expect valid input. 

function getDartboardScore(x, y) {
    //Convert xy to polar coordinates. Degrees for angle. Each zone is 18 degrees
    //radians would also be fine, 0.1Pi per zone.
    let polar = c2p(x,y);
    // console.log(polar);
    //Convert the map of the board to polar zones.
    //I'll be going through, looking for a match/range. 
    //and I want to go in order so let's use an array.
    let boardZoneDist = [12.7/2,31.8/2,198/2,214/2,324/2,340/2];
    let boardZoneCodes = ["DB","SB","","T","","D","X"];
    //decide zone based on distance.
    
    let zoneIndex = 6;//6 by default if we don't find it in any other zone.
    
    for (i in boardZoneDist){
      i = +i;
    //   console.log(polar.distance);
    //   console.log(boardZoneDist[i]);
      if (polar.distance<boardZoneDist[i]){
        zoneIndex = i;
        // console.log("found index!");
        break;
      }
    }
    // console.log("zoneIndex:",zoneIndex);
    
    let zoneCode = boardZoneCodes[zoneIndex];
    
    //Now decide the score based on angle
    //There are 20 zones. So that's 18 degrees per zone. If 0 is the top,
    //the 20 zone ends at 9 degrees.
    //Since the 20 zone is split I'll put it in here twice in order to use the 0
    //at the top convention
    let scoreMap = [20,1,18,4,13,6,10,15,2,17,3,19,7,16,8,11,14,9,12,5,20];
    

    // console.log(polar.angle);
    // console.log("angleIndex:", angleIndex);

    if (polar.angle<0){
        polar.angle = 360+polar.angle;
    }
    // console.log(polar.angle);

    let angleIndex = 0;
    
    if (polar.angle<9){
        angleIndex = 0;//patch for zero case.
    } else {
        angleIndex = ((Math.floor((polar.angle-9)/18)**2)**0.5);
    }

    // console.log((Math.floor((polar.angle-9)/18)));
    // console.log(polar.angle);
    // console.log("angleIndex:", angleIndex);

    if (zoneCode !== "DB" && zoneCode !== "SB" && zoneCode !== "X"){
        return zoneCode + scoreMap[angleIndex].toString();
    } else {
        return zoneCode;
    }
    
    function c2p(x, y){
      let rotation = 0;
        // console.log(x,y);
      //The math.atan2 uses a different quadrant system with regards to -ve numbers than the problem does.
      //so I patch that here. That just means rotating if only 1 coordinate is negative
      
      //It's also the wrong sign! Counterclockwise is considered positive
      //I think I should change my mapping, that's the easiest.
      
      if (x<0 && y<0){
        rotation = 0;
      } else if(x<0){
        rotation = -90;
      } 

      let angle = Math.atan2(y,x); 
      
      let d = Math.sqrt(x**2 + y**2);
      let polar = { distance:d, angle:angle*(180/Math.PI)+rotation};//the -90 is because Math.atan calculates the angle from the horizontal but I'm doing it from the top north.
      
      console.log(polar.angle);
      return polar;
    }
    
    
  }
//   console.log(getDartboardScore(-133.69, -147.38), "X")
//   console.log(getDartboardScore(4.06, 0.71), "DB");
//   console.log(getDartboardScore(2.38, -6.06), "SB");
//   console.log(getDartboardScore(-73.905, -95.94), "7");
//   console.log(getDartboardScore(-5.43, 117.95), "20");
  console.log(getDartboardScore(55.53, -87.95),"T2");