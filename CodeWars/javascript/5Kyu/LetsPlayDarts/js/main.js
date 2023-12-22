//Input is a set of cartesian coordinates, with decimal places. No nulls expected or strings.

//We have dimensions for a dart board, and a description of the pattern.

//The output should be what score the dart scores. 
//Scores are string codes corresponding to the areas. 

//So return the score the dart obtains.

//Dart boards use a slice system for a point value, combined with zones radially.

//output will be a string.

// -133.69, -147.38 => "X" outside the final ring on the board (so, no points)
// 4.06, 0.71 => "DB" bullseye
// 2.38, -6.06 => "SB"
// -73.905, -95.94 => "7"

function getDartboardScore(x, y) {
  //Convert xy to polar coordinates. Use degrees for angle. Each zone is 18 degrees wide.
  let polar = c2p(x,y);

  // console.log("x, y coordinates:", x, y);
  // console.log("polar: coordinates", polar);

  //Make a map of the board to using zones based on polar coordinates.
  let boardZoneDist = [12.7/2,31.8/2,198/2,214/2,324/2,340/2];
  let boardZoneCodes = ["DB","SB","","T","","D","X"];
  
  //Now, decide zone based on distance.
  
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
  // console.log("zoneCode",zoneCode);
  
  //Now decide the score based on angle
  let scoreMap = [6,13,4,18,1,20,5,12,9,14,11,8,16,7,19,3,17,2,15,10];
  
  // console.log("polar angle:", polar.angle);

  //atan2 reports negative angles for the bottom section. I just want a positive number between 0 and 360.
  if (polar.angle<0){
      polar.angle = 360+polar.angle;
  }

  // console.log("polar angle corrected for 0 to 360 range:", polar.angle);
  // console.log("Zone based on polar angle:", (polar.angle)/18);

  let angleIndex = (Math.round((polar.angle)/18));
  
  // console.log("angle Index:", angleIndex);

  if (zoneCode !== "DB" && zoneCode !== "SB" && zoneCode !== "X"){
      return zoneCode + scoreMap[angleIndex].toString();
  } else {
      return zoneCode;
  }
  
  function c2p(x, y){
    //The math.atan2 system reports a positive angle in the counterclockwise direction. 
    //It also starts with zero on the right horizontal axis. So a dart hitting
    // (0,10) as (degrees, mm) would be a 6 score.
    //90 degree would be the top of the board, as in zone of value 20.
    let angle = Math.atan2(y,x); 
    let d = Math.sqrt(x**2 + y**2);
    return {distance:d, angle:angle*(180/Math.PI)};
  } 
}
  console.log(getDartboardScore(-133.69, -147.38), "X")
  console.log(getDartboardScore(4.06, 0.71), "DB");
  console.log(getDartboardScore(2.38, -6.06), "SB");
  console.log(getDartboardScore(-73.905, -95.94), "7");
  console.log(getDartboardScore(-5.43, 117.95), "20");
  console.log(getDartboardScore(55.53, -87.95),"T2");
  console.log(getDartboardScore(148.75640997361444 -0.6618412060181811), "X");
