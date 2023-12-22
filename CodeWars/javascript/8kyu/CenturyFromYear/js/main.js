//Input will be positive integer above 0. Relatively small integer. A normal integer not bigint.
//This number represents a year.

//Our goal is to return the century that the year is in.
//ex 
//1 => 1
//5 => 1
//100 => 1
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

//return this value as an integer

function century(year) {
    //Math.floor is a useful function here.
    //math.floor(year/100)+1 will be what we are looking for in most cases
    //UNLESS it's the terminal century year. Then we need to subtract the 1 again.
    if (year%100===0){
      return year/100;
    } else {
      return Math.floor(year/100)+1;
    }
    return;
  }
  
  console.log(century(1),1);
  console.log(century(5), 1);
  console.log(century(100), 1);
  console.log(century(1705), 18);
  console.log(century(1900), 19);
  console.log(century(1601), 17);
  console.log(century(2000), 20);
  