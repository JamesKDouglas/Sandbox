//U is a sequence.

//The first two elements are 1 and 2. We'll reference it with zero indexing.

//There is a condition that forms the sequence:

//6UnUn+1 - 5UnUn+2 + Un+1Un+2 = 0

//The goal is to write a function that finds Un given an integer input for n.

//Return the number as an integer

//What is the third value?
//
//6UnUn+1 - 5UnUn+2 + Un+1Un+2 = 0
//         - 5UnUn+2 + Un+1Un+2 = -6UnUn+1 
//            Un+2(-5Un + Un+1) = -6UnUn+1 
//                        Un+2 = -6UnUn+1 /(-5Un + Un+1)
//                        Un+2 = -6*1*2 /(-5*1 + 2)
//                        Un+2 = -12/-3
//                        Un+2 = 4

//                        Un+2 = -6UnUn+1 /(-5Un + Un+1)
//                        Un+2 = 6UnUn+1 /(5Un - Un+1)

//ex: f(17) = 131 072
//ex: f(21) = 2 097 152

// Edge cases and limits?
//n bigInt? No. How large? Timeouts is 12 000 ms. 

//What about the output? Well it gets big quickly. Do I have to be ready for a bigInt?
//Yes.

function fcn (n) {
  //convert n to bigInt. Use all BigInts.
  //Lets make a sequence and take a look at the values. If that helps out 
    //to write something that performs more quickly well do that. If not, I guess
    //use the brute force method and just compute. 
    
    // let bigN = BigInt(n);
    // let Un = 1n;
    // let Unp1 = 2n;
    // let Unp2 = 0n; //I could set it as 4, but anyways this is the one we need to compute
    
    // let outputList = [1,2]
    
    // for (let i=0n;i<bigN;i++){
    //   Unp2 = 6n*Un*Unp1 /(5n*Un - Unp1);`
    //   outputList.push(Unp2);
    //   Un = Unp1;
    //   Unp1 = Unp2;
    // }
    // console.log(outputList);
    
    return 2**n;
  }
  
  console.log(fcn(3), 4);
  console.log(fcn(17), 131072);
  console.log(fcn(21), 2097152);
  
  //hm, it turns out it is the same as raising 2 to n. Un*2 = Un+1

  //6UnUn+1 - 5UnUn+2 + Un+1Un+2 = 0
  //6UnUn+1 + Un+1Un+2 - 5UnUn+2 = 0
  // Un+1(6Un + U n+2) - 5UnUn+2 = 0
  //            Un+1(6Un + Un+2) = + 5UnUn+2 
  //                        Un+1 = + 5UnUn+2 / (6Un + Un+2)

  //Hm, not very illuminating. I guess it's a mathematical identity? 
  //If I had a textbook handy I could look it up but it's not like I memorized them since high school.