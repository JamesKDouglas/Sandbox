//input is a string.

//That string somehow represent a series of digits

//characters can map to any digits. Figure out a set
//to match.

//The letters are like placeholders and represent
//a sort of encoded number.
//So the string really just represents uniqueness.

//ex ab => 2 unique digit
//aa => 2 identical digits
//aba => 2 identical 1 other digit

//what if there are more than 9 unique letter?
//Not expected.
//the order of digits is not represented by the string


//The goal is to identify the larget square number
//with this set of unique/identical digits.

//no leading zeros.

//ex 
//ab => 81
//2 digits, both unique.
//aba => 900

//if there is a solution, return the square number.
//if there is no solution, return -1

//ex
//zzz => -1
//bbb => -1
//both represent the same puzzle - 3 digits, identical
//and there is no such square.

//edge cases? invalid inputs? Not expected.
//timeouts? Don't worry about it.

function constructSquare(s) {
    //Figure out number of digits.
    //and the unique/identical 'signature'
    
    //make a array of all the squares with that length of
    //digits
    //filter for ones that meet the digit criteria
    //by creating then using a tally unique/identical.
    
    //then find the max from the prepared array.
    
    let length = s.length;
    
    //'signature'
    //sort. That group the identical one together.
    //Then separate the string into groups and count
    //ex aba => baa => b aa
    
    let sorted = s.split("").sort();
    console.log(sorted);
    

    let signature = {}; //ex aba => b aa => {b:1, a:2}
    
    for (let i=0;i<length;i++){
      if (signature[sorted[i]]){
        signature[sorted[i]]++;
      } else {
        signature[sorted[i]] = 1;
      }
    }
    console.log(signature);
    
    //Then I want to just flatten it to an array
    let signatureFlat = [];
    for (a in signature){
        // console.log(signature[a]);
        signatureFlat.push(signature[a]);
    }
    console.log(signatureFlat);
    //signatureFlat is in descending order

    //starting point for generating square
    //ex aba => 100 three digits
    //so the root is 10
    //abaa => 1000 root is 100. 32.
    let startRoot = Math.ceil(Math.sqrt(+`1${"0".repeat(s.length-1)}`))
    console.log("startroot", startRoot);
    let num = 0;
    let nums = [];
    let i = 0;
    //generate all
    while (num.toString().length<=s.length) {
      num = startRoot**2;
    //   console.log(num);
      nums[i] = num;
      startRoot++;
      i++;
    } 
    nums.pop();
    console.log("nums",nums);

    //for each number in the squares array, filter for 
    //meeting the digit signature
    let passedNums = [];
    let testSignature = {};
    let testSignatureFlat = [];
    let numSorted = [];
    for (let i=0;i<nums.length;i++){
        numSorted = nums[i].toString().split("").sort((a,b)=>+a-+b);
        console.log(numSorted);
        for (let j=0;j<numSorted.length;j++){
            if (testSignature[numSorted[i]]){
                testSignature[numSorted[i]]++;
            } else {
                testSignature[numSorted[i]] = 1;
            }
        }
        for (a in testSignature){
            // console.log(signature[a]);
            testSignatureFlat.push(testSignature[a]);
        }
        console.log("testSignatureflat",testSignatureFlat);
        testSignatureFlat = [];
    }
    
    // for (let i=0;i<length;i++){
    //   if (signature[sorted[i]]){
    //     signature[sorted[i]]++;
    //   } else {
    //     signature[sorted[i]] = 1;
    //   }
    // }
    // console.log(signature);
  }
  
//   console.log(constructSquare("ab"), 81);
//   console.log(constructSquare("zzz"), -1);
  console.log(constructSquare("aba"), 900);
  
  