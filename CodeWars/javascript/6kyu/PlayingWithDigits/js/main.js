//input will be an integer, n. It is composed of digits we'll refer to
//as abc for a 3 digit number like 695.

//we are trying to solve a sort of equation.
//that is, we are looking for a solution to,
// (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

//where k is an integer. 

//return k

//bigInt? No. 
//"695"? no not expected
//"three hundred" not expected either
//timeouts, job size? No limits to worry about.
//null case? Don't bother about it


// 89, 1 --> 8¹ + 9² = 89 * 1
//here n is 89, a=8,b=9, p=1 and k is 1

// 695, 2 --> 6² + 9³ + 5⁴= 1390 = 695 * 2
//n=695, a=6,b=9,c=5, p=2 k=2

// 46288, 3 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
//n=46288, a=4,b=6,c=2,d=8,e=8 p=3 k=51

function digPow(n, p){
    //a simple brute force way:
      //divide the number into digits by making it a string, splitting it
      //then casting the digits back to a number.
      //we can us a loop to load them into an array. Try map.
      //So, create an array of digits as strings, then cast the array to numbers.
      
      //then, calculate the 'middle term' using p.
      
      //Then, solve for k. If we get an integer for k, report it. If not, return -1.
      
      let digN = n.toString().split("").map(el => Number(el));
      
      let sum = 0;
      for (let i=0;i<digN.length;i++){
        sum += digN[i]**(p+i);
      }
      let k = sum/n;
      
      if (k%1 === 0){
        return k;
      } else {
        return -1;
      }
    
    }
    
    console.log(digPow(89,1), 1);
    
    console.log(digPow(695,2), 2);
    
    console.log(digPow(46288,3), 51);
    
    