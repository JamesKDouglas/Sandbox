// Param positive or zero num. safe integer in js?
// Return the digits, in re  order. as an array. 
// Ex:348597 => [7,9,5,8,4,3]
// 0 => [0]
// Pseudo split rev join. string?
function digitize(n) {
    n = n.toString().split("").reverse();
    for (i in n){
        n[i] = +n[i];
    }
    return n;
  }

  console.log(digitize(348597));