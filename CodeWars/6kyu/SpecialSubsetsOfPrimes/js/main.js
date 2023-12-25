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
      // console.log("testing to see if ", n, " is a perfect square")
      if (n**0.5 == Math.floor(n**0.5)){
        return true;
      } else {
        return false;
      }
    }

    for (let i=2;i<=n;i++){
      // console.log("is ", i, " a factor? The sum of digits is:", n);
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

  function passPreTests(n){
    let arr = n.toString().split("").map((el)=>+el);
    // console.log(arr)
    
    //reject if sum of digits not a perfect square
    if (!hasPerfSquareFactor(arr.reduce((acc,el)=>acc += el,0))){
      // console.log(arr, "nope, sum of digits don't have a perfect square factor");
      return false;
    }
    
    //reject if the first and last are 45.
    if (arr[0]*arr[arr.length-1] === 45){
      // console.log(arr, "Nope, first and last digits multiply to 45")
      return false;
    }
    
    //Reject if there are repeat digits
    let arrSet = new Set(arr);
    arrSet = Array.from(arrSet);

    if (arrSet.length !== arr.length){
      // console.log(arr, "Found a repeat digit")
      return false;
    }

    //Reject if there is a 0
    if (arr.includes(0)) {
      // console.log("nope", arr, "contains a 0");
      return false;
    }

    //passes all the tests
    return true;
  }

  let specialPrimes = [];
  // let counter = 0;
  for (let i=251;i<=n;i++){
    // console.log("examining ", i, " to see if it's a special prime")

    if (passPreTests(i)){
      // console.log("the number passes the pretests. test for prime.")
      //If we got this far then we can test for prime.
      // counter++;
      if (isPrime(i)){
        specialPrimes.push(i);
      }
    }
    // console.log(counter, " numbers pass the pretest")
  }

  // console.log("specialPrimes:", specialPrimes);
  //Now group them into increasing, decreasing, bouncy.
  let digs = [];
  let bouncy = [];
  let increasing = [];
  let decreasing = [];

  for (let i=0;i<specialPrimes.length;i++){
    digs = specialPrimes[i].toString().split("").map((el)=>+el); 
    // console.log("deciding if ", digs, "is bouncy increasing or decreasing");
    let a = 0;
    let b = 0;
    let flag = 0;

    for (let j=0;j<digs.length-1;j++){
      a = digs[j];
      b = digs[j+1];
      
      // console.log("a:", a, "b: ", b)
      if (a>b && flag === 2){
        // console.log("found a bouncy one!")
        //detected decreasing after increasing so bouncy!
        bouncy.push(specialPrimes[i]);
        flag = 0;
        break;
      } else if (b>a && flag === 1){
        //detected increasing after decreasing so bouncy!
        bouncy.push(specialPrimes[i]);
        flag = 0;
        break;
      } else if (a>b){
        flag = 1;
      } else if (b>a){
        flag = 2;
      }
      // console.log("flag: ", flag);
    }

    if (flag === 1) decreasing.push(specialPrimes[i])
    if (flag === 2) increasing.push(specialPrimes[i])
  }

  // console.log(bouncy, increasing, decreasing)

  //now summarize the list
  let finalArr = [[],[],[]];

  let categories  = [bouncy, increasing, decreasing];

  for (let i=0;i<categories.length;i++){
    finalArr[i].push((Math.min(...categories[i]) === Infinity) ? 0 : Math.min(...categories[i]));
    finalArr[i].push((Math.max(...categories[i]) === -Infinity) ? 0 : Math.max(...categories[i]));
    finalArr[i].push(categories[i].length);
  }

  // console.log(bouncy);
  // console.log(bouncy.length);
  return finalArr;
}

console.log(specialPrimes(101), [[0,0,0],[0,0,0],[0,0,0]]);

console.log(specialPrimes(252), [[251,251,1],[0,0,0],[0,0,0]]);

console.log(specialPrimes(457), [[251,439,2],[349,457,4],[431,431,1]]);

console.log(specialPrimes(5000), [[251, 4987, 58], [349, 4789, 13], [431, 983, 4]]);
``