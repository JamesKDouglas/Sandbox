// Input will be 2 versions, using sematic versioning
// they come in as strings. They must because 10.4.9 for example is not a float
// but is a valid version.

// They represent 2 software versions.

// The description is about 2 software versions and comparing them. 
// How do we get the source code there?

// It looks like we just are supposed to report whether version 1 
// is the same or later than version 2. Return true if it's the same or later.

// edge cases? .s? just 2. 
// timeouts 1200ms, just once.

// sometimes one is longer than the other. 10.4 vs 10.4.9. 

function compareVersions (version1, version2) {
  //       parseFloat is tempting but it won't be able to parse a 3 parter.
  
  //   first, parse into an array
  //   then compare the first, second and third elements of the array.
    
  //   split, then convert to number type
    let v1 = version1.split(".").map(el=>+el)
    let v2 = version2.split(".").map(el=>+el)
    
  // then add the missing 0. 10.4 is considered the same as 10.4.0
    
    v1.push(0)
    v2.push(0)
    console.log("v1", v1)
    console.log("v2", v2)
    
  //   it could be that we are extending unnecessarily above, but that's ok
  //   It doesn't matter if the for loops use the shortest or longest one
  //   they terminate with return anyways so they won't go on to long.
  //   and short ones are necessarily smaller.
    
  //   3 nested for loops
    for (let i=0;i<v1.length;i++){
      console.log("i:", i)
      console.log("v1[i]", v1[i])
      console.log("v2[i]", v2[i])
      
      
  //     i is actually the position were looking at.
      if (v1[i] > v2[i]){
        return true;
      } else if (v1[i] < v2[i]){
        return false;
      }
      //if they are the same just carry on to the next position.
    }
    //   if they are completely equal just return true
  return true;
  }
  
  // console.log(compareVersions("11", "10"), "True")
  console.log(compareVersions("10.4", "10.10"), "false")
  // console.log(compareVersions("10.4.9", "10.5"), "false")