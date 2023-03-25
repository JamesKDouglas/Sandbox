//Two functions to write:

//One (toIndustrial) takes an input of time elapsed using a time base
//of 60 minutes in an hour.
//The input is minutes as an inteer Or a string in
// format "h:mm" ex 1:30 for 1 and a half hours.

//The goal is to convert the time to a base that uses 100 minutes in an hour.
//and 36 seconds in a minute. So seconds are the same length. 
// output will be a decimal in 100 minute/hour time. Round to 2 decimal precision.

//Two (toNormal) will have an input that is a number type.
//the time base will be assume as in 100 minutes/hr for the input.
//Convert the time to a 60 min/hr base
//output a string of format 'h:mm".

//toIndustrial(1) => 0.02
//toIndustrial("1:45") => 1.75
//toNormal(0.33) => "0:20"

//null? don't expect it.
//unexpected inputs? not expected.
//time and job size? nope. 


function toIndustrial(time){
    //Is the input a string or number?
    //if and typeof for that.
    //If it's a string, I'll have to parse it to a number.
    //If it's a number, just divide by 60 round and truncate then return.
    
    let newArr = [];
    if (typeof(time) === "number"){
      return Math.round((time/60)*100)/100;
    } else {
      newArr = time.split(":");
      return Number(newArr[0]) + Math.round((Number(newArr[1])/60)*100)/100;
    }
    
  }
  
  function toNormal(time){
    let hrs = time.toString().split(".")[0];
    let mins = Math.round(Number(time.toString().split(".")[1])*60/100);
    console.log(mins);
  
    
    let timeStr = `${hrs}:${mins.toString()}`;
    return timeStr;
  }
  
  console.log(toIndustrial(1), 0.02);
  console.log(toIndustrial("1:45"), 1.75);
  console.log(toNormal(0.33), "0:20");