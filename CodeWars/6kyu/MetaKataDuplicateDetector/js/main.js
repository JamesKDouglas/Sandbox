//input will be an integer. Not a bigInt.

//The goal is to return the minimum distance between two factors

//ex: 13013 has factors: 
//[ 1, 7, 11, 13, 77, 91, 143, 169, 1001, 1183, 1859, 13013]
//so return 2 (13-11);

//edge cases? Primes are fine. n=0 might happen too. 
//invalid inputs? Not expected.
//timeouts? None to speak of but 12 000ms.

function minDistance(n){

  //So a brute force way would be to find the factors, sort them, 
  //then count the distances and search for the smallest one.
  
  //Just search up to the median value then you can stop. The cofactors on the 
  //right are systematically larger so there is no point in checking those.
    
  //we can early return a 1 if the number is even.
    if (n%2 === 0){
      //it's first two factors are 1 and 2.
      return 1;
    }
    
    //make the factor array
    let facArr = [];
    for (let i=1;i<=n;i++){
      if (n%i===0){
        //it's a factor!
        facArr.push(i);
      }
    }
    facArr.sort((a,b)=>a-b);
    console.log(facArr);
    return `min factor distance`
  }
  
  console.log(minDistance(13013), 2);
  console.log(minDistance(8), 1);
  console.log(minDistance(25), 4);