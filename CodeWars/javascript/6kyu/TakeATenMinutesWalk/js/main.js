// The input will be an array of letters, n s e w

// They represent directions of travel on a square grid.

// so n is 1 grid move north, s 1 grid move south.

// navigate the grid and find out if there are 10 moves. each move takes a minute.

// return true if the trip takes 10 minutes. 

// Return true if the directions constitute a round trip, and also is 10 minutes long.

// ['n','s','n','s','n','s','n','s','n','s'] => true
// ['w','e','w','e','w','e','w','e','w','e','w','e'] => false
// ['w'] => false
// ['n','s','n','s','n','s','n','s','n','e'] => false

// edge cases? valid input only. always at least 1 entry.
// 1200 ms. small jobs, no timeouts.

function isValidWalk(walk) {
  //   early return: is length 10 or not. if it isn't 10, return false.
    
  //   then round trip test: n and s's have to match. e and w too.
  //   just count them up.
    
    if (walk.length != 10) return false;
    
    let lat = 0;
    let long = 0;
    
    for (let i=0;i<walk.length;i++){
      // console.log(lat, long, i)
      if (walk[i] === "n"){
        lat++;
      } else if (walk[i] === "s"){
        lat--;
      }
      
      if (walk[i] === "e"){
        long++;
      } else if (walk[i] === "w"){
        long--;
      }
    }
    
    if (lat===0 && long===0) return true;
    
    return false;
  }
  
  console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']), true);
  console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']), false);
  console.log(isValidWalk(['w']), false);
  console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','w']), false);
  
  
  
  