//input is a string or something else.

//if it's a string the  who ate the cookie was Zach
//If it's an int Monica at it
//if it's something else it was the dog

//return "Who ate the last cookie? It was (name)!";

//no timeouts or edge cases

function cookie(x){
  //Determine string with if 
    let name = "";
    console.log(typeof(x));
    if (typeof(x) === "number"){
        name = "Monica";
    }
    else if (typeof(x)==="string"){
      name = "Zach";
    } else {
      name = "the dog";
    }
    
    //return
    return `Who ate the last cookie? It was ${name}!`;
  }
  
  console.log(cookie("Ryan"), "Who ate the last cookie? It was Zach!");
  console.log(cookie(10), "Who ate the last cookie? It was Monica!");
  console.log(cookie(true), "Who ate the last cookie? It was the dog!")
  