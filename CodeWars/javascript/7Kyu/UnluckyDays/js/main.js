//this is the solution from Microthought.

//The key here is that a date object can be created using only integers.

//also, getDay reports an integer as day of the week.

function unluckyDays(year){
  let unlucky = 0;
  for (var i = 0; i < 12; i++) {
    if(new Date(year, i, 13).getDay() === 5){
      unlucky++;
    }
  }
  return unlucky;
}