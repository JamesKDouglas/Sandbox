//Two functions to write:

//One (toIndustrial) takes an input of time elapsed using a time base
//of 60 minutes in an hour.
//The input is minutes as an integer or a string in
// format "h:mm" ex "1:30" for 1 and a half hours.
// OR 90 minutes

//The goal is to convert the time to a base that uses 100 minutes in an hour.
//and 36 seconds in a minute. So seconds are the same length. 
// output will be a decimal in 100 minute/hour time. Round to 2 decimal precision.
//ex: 1:30 or 90 in, 1.50 out

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
//   console.log(time);
    
  let hrs = Math.floor(time);
  
//   console.log(hrs);

  //We have to make sure zeros get dropped. 1.5 can't end up the same as 1.05.
  
  let mins = (time%1)*60;//extract the decimal and find out how many minutes
  mins = mins.toFixed(0);//same as math.round
  
//   console.log(mins);

  if (mins<10){//pad with leading 0
    mins = "0"+mins.toString();
  } else {
    mins = mins.toString();
  }
  
  let timeStr = `${hrs.toString()}:${mins}`;
  return timeStr;
}

console.log(toIndustrial(1), 0.02);
console.log(toIndustrial("1:45"), 1.75);
console.log(toNormal(0.33), "0:20");