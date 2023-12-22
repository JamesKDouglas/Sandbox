//input will be an angle between 0 and 360 degrees. Integer.

//The angle represents the hour hand on a 12 hour clock.
//The goal is to determin the time in HH:MM format.
//Of course you can't tell AM from PM by the hand.

//Return the time as a string.

//0 and 360 are both 12:00. There is no 00:00.
//What if someone submits something out of range? Not expected.
//timeouts? Not expected. So ms output etc.

//0 => 12:00
//360 => 12:00
//90 => 03:00

//95 => 0.26389 normal fraction => 3.1667 => hr 03. Minute 10.

//40 => 0.11111 => 1.3333 => hr 01 min 19.999 or 20.

var whatTimeIsIt = function(angle) {
  //normalize: make angle a fraction of 1. 90 => 0.25
  //Find the same fraction as 0 to 12. => 0.25*12 = 3.000
  //That's half day fraction. The extra decimal helps overcome the 1/60 vs 1/100
  //The integer shows the hour. 
  
  //So to drop the decimal we use floor.
  
  //Then find the decimal by subtracting the hour from the half day fraction.
  
  let normalFrac = angle/360;
  let hour = Math.floor(normalFrac*12);
  let minutes = (normalFrac*12 - hour)*60;
  minutes = Math.floor(minutes);
  
  //now convert to string.
  if (hour === 0){
    hour = 12;
  }
  
  if (hour<10){
    hour = "0"+hour;
  } else {
    hour = hour.toString();
  }
    if (minutes<10){
    minutes = "0"+minutes;
  } else {
    minutes = minutes.toString();
  }
  
  return `${hour}:${minutes}`;
  
  
}

console.log(whatTimeIsIt(0), "12:00");
console.log(whatTimeIsIt(360), "12:00");
console.log(whatTimeIsIt(90), "03:00");
console.log(whatTimeIsIt(95), "03:10");