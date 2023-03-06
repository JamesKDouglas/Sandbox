//input of a string and a cypher key
//the goal is to encrypt that string using a cypher
//We will use a simple alphabet based cypher in which each letter is
//replaced with a different letter. The rearrangement is defined by the cypher
//key.

//The key will take the alphabet then turn each letter in the alphabet
//into another one based on a rearranged alphabet which takes a word, 
//puts that word in front of the alphabet then erases any duplicate letter.

// ex:
//               abcdefghijklmnopqrstuvwxyz
//   hello ==>   |||||||||||||||||||||||||| ==> bshhk
//               wednsaybcfghijklmopqrtuvxz


//All only lowercase.

//hello, wednesday => bshhk
//Welcome home, secret => wticljt dljt
//alpha bravo charlie, delta => djofd eqdvn lfdqjga

//punctuation, special characters? No. Just lowercase letter.
//cypher key has 2 of the same letters? Drop a repeat.
//null? don't expect them.

//timeouts? Don't expect any issues.

function keywordCipher(string, keyword){
    //clean up the keyword and string to make them lowercase
    string = string.toLowerCase();
    keyword = keyword.toLowerCase();

    //Set up the cypher string. As an array.
    //So I'll start with just an array of the alphabet
    //Then subtract the letters in the keyword.
    //and add the keyword array to the start
    
    //Then we need to construct the new string. 
    
    //make alphabet array
    let alph = [];
    for (let i="a".charCodeAt(0);i<="z".charCodeAt(0);i++){
      alph.push(String.fromCharCode(i));
    }
    alph.push(" ");
    // console.log(alph);
    let alphOrig = alph.slice();
    
    //make a new arry, which is the alphabet with keyword
    let newArr = [];
    let cleanKeyword = [];
    for (letter of keyword){
    //go through each letter in the keyword and remove it from the alphabet array
        // console.log(letter);
      if (alph.findIndex(el => el === letter) !==-1){
        // console.log(alph.findIndex(el => el === letter))
        //if you find the letter, delete it from the alphabet
        alph.splice(alph.findIndex(el => el===letter), 1)
        //Then add that letter to the keyword with duplicates removed
        cleanKeyword.push(letter);
        // console.log(alph);
      }
    }
    // console.log(cleanKeyword);
    // console.log(alph);
    let cipher = cleanKeyword.concat(alph);
    // console.log(cipher);

    //now do the encoding
    let newString = "";
    let index = 0;
    for (letter of string){
        // console.log(letter);
        // console.log(alphOrig)
        index = alphOrig.findIndex(el => el === letter);
        // console.log(index)
        if (index != -1) {
            // console.log("add a character!")
            // console.log(cipher[index])
            newString = newString + cipher[index];
        }
    }
    return newString;
  }
  
  console.log(keywordCipher("hello", "wednesday"), "bshhk");
  console.log(keywordCipher("Welcome home", "secret"), "wticljt dljt");
  console.log(keywordCipher("alpha bravo charlie", "delta"), "djofd eqdvn lfdqjga");