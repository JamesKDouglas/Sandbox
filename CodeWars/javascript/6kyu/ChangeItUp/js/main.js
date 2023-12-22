//Input will be a string- letters, numbers, upper and lower case allowed.
//what about \n? Yes those can exist but we won't do anything with them.

//Take that string and examine each letter:
//First, shift the letters to 1 letter later in the alphabet, with wrap around at the end.
//Then, if it's a consonant make it lowercase, if it's a vowel (not y) make it uppercase

//cat30 => dbU30
//Alice => bmjdf
//sponge1 => tqpOhf1
//Hello World => Ifmmp xpsmE

//How big might this string be? Big blocks of text, like a whole book?
//Are we concerned about timeouts? 10s limit? Might we be pushing some limits of that, ending up in a timeout scenario?
//No, we really don't expect that.
//docs? Do you mind if I quickly consult the mdn docs or stack overflow at some point?
//Ya that's fine.

function changer(str) { 
  
    //shift each letter. Ascii code for this. 
    
    //Use a for loop to keep track of the character being examined.
    //use charCodeAt()
    //First, identify that it is a letter:
    //Skip the character if it's a digit or special character, which is to say the charcode:
    //Must be between A or B
    //or between a and b.
    //Ascii codes aren't contiguous for just letters so we do need both checks.
    
    //If it's a letter:
    //add one to the integer, unless it's a toLowerCase(Z). Then I want to subtract 26.
    //use fromCharCode()
    //make a new array with the shifted characters.
    let letterCode;
    let shLetterCode;
    let Zcode = "Z".charCodeAt(0);
    let Acode = "A".charCodeAt(0);
    let zcode = "z".charCodeAt(0);
    let acode = "a".charCodeAt(0);
    let newStr = [];
    
    let vowels = {
      a:true,
      e:true,
      i:true,
      o:true,
      u:true,
    };
    
    for (let i=0;i<str.length;i++){
      letterCode = str.charCodeAt(i);
      shLetterCode = letterCode+1;

      //if it's actually a letter!
      if (letterCode>=Acode && letterCode<Zcode || letterCode>=acode && letterCode<zcode){
        //if it's a vowel, capitalize, if not then don't.
        //includes() is an array method
        if (vowels.hasOwnProperty(String.fromCharCode(shLetterCode))){
          newStr.push(String.fromCharCode(shLetterCode).toUpperCase());
        } else {
          newStr.push(String.fromCharCode(shLetterCode).toLowerCase());
        }
      } else if (letterCode === Zcode || letterCode === zcode){
        //This is a special case because we have to wrap.
        //Z becomes an A so it should be uppercase then.
        newStr.push(String.fromCharCode(letterCode-25).toUpperCase());
      } else {
        //It's not a letter so don't change it, but include it still.
        newStr.push(str.charAt(i));
      }
    }
    
    //return the joined array.
    return newStr.join("");
  }
  
  console.log(changer("cat30"), "dbU30");
  console.log(changer("Alice"), "bmjdf");
  console.log(changer("sponge1"), "tqpOhf1");
  console.log(changer("Hello World"),"Ifmmp xpsmE");
  console.log(changer("Hello Z World"),"Ifmmp A xpsmE");