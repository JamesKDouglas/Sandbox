function getSumOfDigits(integer) {
    let sum = 0;
    let digits =  integer.toString().split("");
    digits = digits.map(el => Number(el));
    
    for(let ix = 0; ix < digits.length; ix++) {
      sum = sum + digits[ix];
    }
    return sum;
  }