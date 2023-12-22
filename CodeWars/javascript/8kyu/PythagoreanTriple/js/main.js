//Input will be 3 posotive integers. They come in as an array.

//Test to see if, in any combination we can use them to solve,
//a^2+b^2=c^2

//return boolean - true if they can be used to solve the equation. False if not. 
//This will be a 'brute force' version so I'm just going to try all three possibilities.

//No bigInts expected. No strings, no unexpected timeouts. No "4" strings or anything.

// [5,4,3] => true
// [13, 12, 5] => true
// [100,3,999] => false

function isPythagoreanTriple(integers) {
    //use a rotating register to check all the possibilities, changing a for b and c.
    let buf = 0;
    for (let i=0;i<integers.length;i++){
      if (integers[0]**2+integers[1]**2 === integers[2]**2){
        return true;
      }
    
      let buf = integers[2];
      integers.pop();
      integers.unshift(buf);
    }
    return false;
  }
  
  console.log(isPythagoreanTriple([5,4,3]), true);
  console.log(isPythagoreanTriple([13, 12, 5]), true);
  console.log(isPythagoreanTriple([100,3,999]), false);
  