// 1 integer. Number type. Above zero. Not a bigInt. No special character.

//Expect always integer.

//No performance restriction.

// 42145 => 54421
// 145263 => 654321
// 123456789 => 987654321

//return an integer.

function descendingOrder(n){
    return Number(n.toString().split('').sort((a,b)=>b-a).join(''));
  }
  
  console.log(descendingOrder(42145), 54421);
  
  console.log(descendingOrder(145263), 654321);
  
  console.time('t1');
  console.log(descendingOrder(123456789), 987654321);
  console.timeEnd('t1');
  