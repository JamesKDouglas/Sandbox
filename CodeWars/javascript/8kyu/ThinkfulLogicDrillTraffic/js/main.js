//Input will be a string. A color. A light color. For a street light.

//the goal here is to update to the next light color.

//output will be a string that states a color.

//ex:
//green => yellow
//yellow => red
//red => green

//"gren"? No not expected.
//case sensitive?"Green"? Nope lowercase only.
//null case? not expected.

//Job size/timing, timeouts? Nah.


function updateLight(current) {
  
    //the simple way!
      
      if (current === "green"){
        return "yellow";
      }  else if (current === "yellow"){
        return "red";
      }  else if (current === "red"){
        return "green";
      }
    }
    
    console.log(updateLight("green"), "yellow");
    
    console.log(updateLight("yellow"), "red");
    
    console.log(updateLight("red"), "green");