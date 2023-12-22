function add (a, b) {
  
  let result = '';//This initializes it as a string, so later when we use + concatenation occurs.
  let carryTheOne = 0;
  
  arrA = a.split('');
  arrB = b.split('');
  
  while (arrA.length || arrB.length || carryTheOne) {//Carry on in the loop as long as there are either digits to process or a one to carry

    carryTheOne += ~~arrA.pop() + ~~arrB.pop();//This just adds the two numbers from the arrays. The double tilde operator is like math.floor except it does not produce a NaN, which is important here.
    //Note that if carryTheOne was over 9 on the previous loop it will now be 1 (true). 
    result = String(carryTheOne % 10) + result; //carryTheOne % 10 takes the second digit of the sum, if the sum is two digits long. Otherwise it's just equal to the sum. Note that the type is a string so what is happening here is concatenation.
    //true%10 = 1;
    carryTheOne = carryTheOne > 9 ;//The two summed digits are over 9, then mark as true to carry the one.
    //console.log(carryTheOne);
  }
  return result
}

console.log(add('823094582094385190384102934810293481029348123094818923749817','234758927345982475298347523984572983472398457293847594193837'));
