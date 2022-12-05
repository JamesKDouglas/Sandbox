//Input: string. Uppercase. Any ascii characters. Spaces too, things like $&. /n too.

//How long? Well no bigInts. But it could be like an entire book.
//Timeouts? no not really.

//The goal is to count each character, and record the frequency that it occurs.

//Then report those counts as an object with the key as the character and property as the value (integer number)

//If the character doesn't exist it also isn't in the object. So no {'a':0}

//The key will be as a string, with quotes.

//Uppercase character is different from lowercase. T t is two different characters.

//"aba" => {'a':2,'b':1}
//"The quick" => {'T':1, 'h':1, 'e':1, ' ':1, 'q':1, 'u':1, 'i':1, 'c':1, 'k':1}
//"  aabbaa  " => {" ":4, 'a':4, 'b':2}
//"" => {}

function count(string) {  
    //bracket notation.
    //initialize object.
    let countLetters = {};
    //use a for loop to go through each character in the string.
    for (let i=0;i<string.length;i++){
        //If the key exists for that character, increment it. If not, create the key then initialize it at 1;
        if (!countLetters[string[i]]){
        countLetters[string[i]] = 1;
        } else {
            countLetters[string[i]]++;
        }
    }
     return countLetters;
  }
  
  console.log(count("aba"), {'a':2,'b':1});
  console.log(count("The quick"), {'T':1,'h':1,'e':1,' ':1,'q':1,'u':1,'i':1,'c':1,'k':1});
  console.log(count("  aabbaa  "), {" ":4,'a':4,'b':2});
  console.log(count(""), {});