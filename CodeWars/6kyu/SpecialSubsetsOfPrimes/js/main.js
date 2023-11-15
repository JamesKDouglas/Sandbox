//The input will be an integer, n, between 100 and 50 000.
//Find all of the numbers belonging to 
//special set of primes within the range 100 to n.

//The set is defined by:
//At least 3 digits
//No zeros
//The sum of the digits is a multiple of a perfect square other than 1
//The product of the first and last digit is not 45
//digits occur only once.

//Once you have found them all, sort them into categories.

//Don't report all the numbers. Instead, summarize the findings in terms of 
// min, max and # found for each category. If there isn't any then list 0.

//Return the summary as a 2D array, with 1 array for each category:
//Bouncy
//Increasing
//Decreasing

//ex [[bouncy nums summary], [increasing nums summary], [decreasing nums summary]]

//edge cases? 101 => no numbers found at all. return all 0s. In fact. <251 just all zeros

//bigInts? Not expected.
//timeouts? 12 000 ms
//invalid inputs?  Not expected.


function specialPrimes(n){
  //write isPrime subfunction.

  //early return: if less than 251 return just 0s.

  //make a for loop. Begin at 251. 

  //The for loop runs checks before testing for prime:
  //Make an array of digits with toString().split().maps(el=>+el)
  //At least 3 digits - exclude if arr.length <=3;
  //No zeros -  exclude if arr.find((el) => el === 0)
  //The sum of the digits has a factor which is a perfect square other than 1
      //ex 251. The digits add up to 8. 4 is a factor, and 4 is a perfect square number.
      //use .reduce to sum them
      //then find all the factors and see if one is a perfect square

  //The product of the first and last digit is not 45. Just test them. arr[arr.length-1]
  //digits occur only once. Use Set for this.

  //If it passes all this, it gets into the list. 

  //first generate the whole list.

  //then sort into bouncy, decreasing and increasing. Build a new array.
  //Just use a 3 digit buffer and a flag. flag starts 0 unknown.
  //flag is for increasing or decreasing.
  //set flag with first 2 digits. 1 for increasing.
  //If a>b always then keep flag as 1.
  //if b<a always then keep flag as 2.
  //if a>b and flag is 2 then bouncy
  //if b<a and flag is 1 then bouncy

  //Just sort them all into 3 array or a 2D array with a list. 
  //then summarize with sort and .length. 

  function isPrime(n){
    for (let i=2;i<n;i++){
      if (n%i === 0){
        return false
      }
    }
    return true;
  }

  function hasPerfSquareFactor(n){

    let perfSquare = (n) => {
      console.log("testing to see if ", n, " is a perfect square")
      if (n**0.5 == Math.floor(n**0.5)){
        return true;
      } else {
        return false;
      }
    }

    for (let i=2;i<n;i++){
      console.log("is ", i, " a factor? The sum of digits is:", n);
      if (n%i ===0){
        // console.log("yes it's a factor!")
        //found a factor.

        if (perfSquare(i)){
          //and it is a perfect square
          // console.log("yes it is a perfect square");
          return true;
        } 
        //otherwise continue
      }
    }
    //didn't find a perfect square factor
    return false;
  }   

  let arr = [];
  let specialPrimes = [];

  for (let i=251;i<n;i++){
    console.log("examining ", i, " to see if it's a special prime")
    arr = i.toString().split("").map((el)=>+el);
    
    //Reject if there is a 0
    if (arr.find((el)=>el===0)) {
      console.log("nope, contains a 0");
      continue;
    }
    
    //reject if sum of digits not a perfect square
    if (!hasPerfSquareFactor(arr.reduce((acc,el)=>acc += el,0))){
      console.log("nope, sum of digits don't have a perfect square factor");
      continue;
    }
    
    //reject if the first and last are 45.
    if (arr[0]*arr[arr.length-1] === 45){
      console.log("Nope, first and last digits multiply to 45")
      continue;
    }
    
    //Reject if there are repeat digits
    let arrSet = new Set(arr);
    arrSet = Array.from(arrSet);

    // console.log("arrSet:", arrSet);

    if (arrSet.length !== arr.length){
      // console.log("Found a repeat digit")
      //then there are repeats
      continue;
    }
    console.log("the number passes the pretests. test for prime.")
    //If we got this far then we can test for prime.
    if (isPrime(i)){
      specialPrimes.push(i);
    }
  }

  console.log("specialPrimes:", specialPrimes);
  //Now group them into increasing, decreasing, bouncy.
  let digs = []; //better than arr name!
  let bouncy = [];
  let increasing = [];
  let decreasing = [];

  for (let i=0;i<specialPrimes.length;i++){
    digs = specialPrimes[i].toString().split("").map((el)=>+el); 
    console.log("deciding if ", digs, "is bouncy increasing or decreasing");
    let a = 0;
    let b = 0;
    let flag = 0;

    for (let j=0;j<digs.length-1;j++){
      a = digs[j];
      b = digs[j+1];
      
      console.log("a:", a, "b: ", b)
      if (a>b && flag === 2){
        console.log("found a bouncy one!")
        //detected decreasing after increasing so bouncy!
        // console.log(sortedNums[0]) 
        bouncy.push(specialPrimes[i]);
        // console.log(sortedNums[1])
        break;
      } else if (b>a && flag === 1){
        //detected increasing after decreasing so bouncy!
        bouncy.push(specialPrimes[i]);
        break;
      } else if (a>b){
        flag = 1;
      } else if (b>a){
        flag = 2;
      }
      console.log("flag: ", flag);
      
    }
    if (flag === 1) decreasing.push(specialPrimes[i])
    if (flag === 2) increasing.push(specialPrimes[i])
  }

  console.log(bouncy, increasing, decreasing)

  //now summarize the list
  let finalArr = [[],[],[]];

  finalArr[0].push(Math.min(...bouncy));
  finalArr[0].push(Math.max(...bouncy));
  finalArr[0].push(bouncy.length);

  finalArr[1].push(Math.min(...increasing));
  finalArr[1].push(Math.max(...increasing));
  finalArr[1].push(increasing.length);

  finalArr[2].push(Math.min(...decreasing));
  finalArr[2].push(Math.max(...decreasing));
  finalArr[2].push(decreasing.length);

  return finalArr;
}

// console.log(specialPrimes(101), [[0,0,0],[0,0,0],[0,0,0]]);

console.log(specialPrimes(252), [[251,251,1],[0,0,0],[0,0,0]]);

// console.log(specialPrimes(457), [[251,439,2],[349,457,4],[431,431,1]]);
// console.log(specialPrimes(5000), [[251, 4987, 58], [349, 4789, 13], [431, 983, 4]]);
