//Input will be 2 "square strings". That is, the same characters as number of lines.
//Each has the dimensions nxn. So, n characters on each line n lines. Zero indexed.

//they are s1, s2.

//The goal is to recombine them into a rectangular string of dimensions
//(n+1)n.

//The recombination happens in the following way:

//Each new line in the new string has the number x
//so the first line is number x=0. So zero indexed lines.
//each line has (x+1) characters from xth line of s1, and the remainder is composed
//of (n-x) characters from (n-x) line of s2.

// s1 = "abcd\n
//       efgh\n
//       ijkl\n
//       mnop" 

// s2 = "qrst\n
//       uvwx\n
//       yz12\n
//       3456"

//(without space)
//str = "a 3456\n
//      ef yz1\n
//      ijk uv\n
//      mnop q"

//So we recombine the rectangular strings rather taking the bottom left diagonal 
//sections, reflecting the second horizontally.

//return the new rectangular string as a string.

//edge cases? empty string? not square? Not expect.
//timeouts? Job size? nothing to worry about.

function compose(s1, s2) {
    // console.log(s1);
    // console.log(s2);
    //First, turn it into an array.
    let string1 = s1.split("\n");
    let string2 = s2.split("\n");
    // console.log(string1);

    //extract the "bottom left corner."
    let blS1 = [];
    let blS2 = [];
    for (let i=1;i<=string1.length;i++){
    // console.log(string1[i-1].substr(0,i),i);
      blS1.push(string1[i-1].substr(0,i));
      blS2.push(string2[i-1].substr(0,i));   
    }
    // console.log(blS1);
    // console.log(blS2);

    //Reflect the second one horizontally.
    let blS2R = [];
    for (let i=1;i<=string1.length;i++){
      blS2R.push(blS2[string1.length-i]);
    }
    // console.log("reflected", blS2R);
    
    //Recombine.
    let final = []
    for (let i=0;i<string1.length;i++){
      final.push(blS1[i]+blS2R[i]);
    }

    return final.join("\n");
  }
  
  console.log(compose("byGt\nhTts\nRTFF\nCnnI", "jIRl\nViBu\nrWOb\nNkTB"), 
              "bNkTB\nhTrWO\nRTFVi\nCnnIj");
  
  console.log(compose("HXxA\nTGBf\nIPhg\nuUMD", "Hcbj\nqteH\nGbMJ\ngYPW"), 
              "HgYPW\nTGGbM\nIPhqt\nuUMDH");
  
  console.log(compose("tSrJ\nOONy\nsqPF\nxMkB", "hLqw\nEZuh\nmYFl\nzlYf"), 
              "tzlYf\nOOmYF\nsqPEZ\nxMkBh");