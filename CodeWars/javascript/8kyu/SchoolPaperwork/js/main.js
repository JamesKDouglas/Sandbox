//inputs are n, the number of copies and m, the number of pages
//return the number of total pages required.

//ex: n=2, m=5, return 10
//if either is less than zero return 0.

//edge cases? fractions not expected. Inputs always valid.
//no timeouts.

function paperwork(n, m) {
  if (n<0 || m<0){
    return 0;
  }else {
    return n*m;  
  }
}
console.log(paperwork(5,5), 25);
console.log(paperwork(2,5), 10);
console.log(paperwork(-5,5), 0);
