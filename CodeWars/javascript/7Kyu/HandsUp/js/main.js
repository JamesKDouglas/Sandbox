//input will be a base 10 integer. Between 18 and zero.

//outside the range? return error. 

//The array represents the digits of a base 3 number system, reading 
//left to right rather than the usual right to left.

//undefined? assume a zero. But we don't expect that for the first try. 

//Output an array of integers. 3 of them.
//Each integer can have  the value of 0, 1 or 2.
//The array represents the digits of a base 3 number system, reading 
//left to right rather than the usual right to left.

//ex: 9=>[0,0,1];
//5 => [2,1,0];
//7 => [1,2,0];

const getPositions = s => {
    //take the number, use toString(b10Num, radixtoReturn);
    //use radix 3.
    //split reverse, leave it as an array.
    //return it.
    
    //rollover
    console.log(s);
    if (s>26){
      let factor = Math.floor(s/27);
      s -= 27*factor;
      console.log(s);
    }
    
    let arr = s.toString(3).split("").reverse().map(el=>Number(el));
    
    //placeholders
    while (arr.length<3){
        arr.push(0);
    }
    
    return arr;
  }
  
  console.log(getPositions(9), [0,0,1]);
  console.log(getPositions(5), [2,1,0]);
  console.log(getPositions(7), [1,2,0]);
  console.log(getPositions(28), [0,0,0]);