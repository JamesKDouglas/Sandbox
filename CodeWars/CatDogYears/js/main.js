//The input will be an integer above 1. It represents the number of human years.

//The goal is to calculate the number of equivalent cat and dog years.

//That is, according to:
//Dog years: the first human year is worth 15 dog years.
//the second is worth 9 dog years
//The following years are worth 5 dog years each

//cat years: The first human year is worth 19 dog years, the second 9, 
//following 4 each.


//return the values as an array of integers:
//[humanyears, dogyears, catyears]

function humanYearsCatYearsDogYears(hy) {
    let cy, dy;
    
    cy = (hy===1) ? 15 :(hy===2)? 24 :(hy >2)? (24 + (hy-2)*4) :1;
  
    dy = (hy===1) ? 15 :(hy===2)? 24 :(hy >2)? (24 + (hy-2)*5) :1;
    return [hy,cy,dy];
  }
  
  //what? this is already solved for us? Let me shorten/rewrite it then.