//  input. positive integer. n. regular int. not "two". number type. Primitive.

// null or undefined? can just return but don't worry about that. 

// return boolean. not "True".

// number n, find sum of digits. s.
// reverse s to s'
// if s*2' is equal to n then return true.
// otherwise false.

//1729 => true
//12 => false
//11 => false

function numberJoy(n) {
    // number n, find sum of digits. s.
    let sum = 0;
    let arr = n.toString().split('').map(el=>Number(el));
    
    for(let i=0;i<arr.length;i++){
      sum += arr[i];
    }
    
    // reverse s to s'
    let sumP = Number(sum.toString().split("").reverse("").join(""));
    
    // if s*2' is equal to n AND this is a Harshad # then return true.
    if (n%sum === 0 && sum*sumP === n){
      return true;
    } else {
    // otherwise false.
      return false;
    }
    
}
  
console.log(numberJoy(1729),true);
console.log(numberJoy(12), false);
console.log(numberJoy(11), false);