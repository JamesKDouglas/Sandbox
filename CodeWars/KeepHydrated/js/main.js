//input of a float. Number type with decimals. 
//Roughly the precision of 0.1 hours.
//not "three hours" or "three". But always expect the right type.

//The goal is to report the "amount of water consumed". 
//Really that means divide the input by 2 and round down to the closest integer.

//Return an integer value of number type. Not 5.0, just 5.

//edge cases? Modestly sized numbers, right? So no bigInts. Right. 
//Timeouts? No expected timeout issues.

function litres(time) {
    //divide time by 2, and round down using Math.floor.
    
    return Math.floor(time/2);
  }
  
  console.log(litres(3), 1);
  console.log(litres(6.7), 3);
  console.log(litres(11.8), 5);