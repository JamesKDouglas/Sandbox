//The input will be a string. The string is a bunch of words delineated
//by dashes (hyphens) or underscore characters, - or _
//There won't be a mix of _ and - in an input string.

//the goal is to convert this string to camel case or Upper Camel Case
//camel case if the word starts with a lowercase character.
//upper camel case if the word starts with a capital letter

//return the camel case string as a string.

// "the-stealth-warrior" => "theStealthWarrior"
// "The_Stealth_Warrior" => "TheStealthWarrior"
// "Go_Senators" => "GoSenators"
// so we actually don't modify the capitalization of the upper word at all.

//""? No null expected.
//" test_test"? no leading spaces.
//special characters? None
//unexpected capital letters? "go-SenAtors"? could happen.

//job size/timeout:
//Are we getting a 10MB string and have to do it in 100ms or something like that?


function toCamelCase(str){
    //the first thing is to parse the string into words.
    //Then I'll go through all the words except the first and capitalize just
    //the first character.
    //Then sew it back together and return
    
    //parse
    let words = [];

    //replace hyphens with underscores in case there is both.
    str = str.replaceAll("-", "_");

    //then split
    words = str.split("_");

    //now capitalize all the words except the first
    let word = "";
    let newWords = [words[0]];
    // console.log(words.length);
    for (let i=1;i<words.length;i++){
      word = words[i].toString();
      word = word.toLowerCase();//to correct for unexpected uppercase letters
      word = word[0].toUpperCase() + word.slice(1);
      newWords.push(word);
    }
    
    //return the camelcase!
    return newWords.join("").replaceAll(",","");
  
  }
  
  console.log(toCamelCase("the-stealth-warrior"), "theStealthWarrior");
  console.log(toCamelCase("The_Stealth_Warrior"), "TheStealthWarrior");
  console.log(toCamelCase("Go_Senators"), "GoSenators");
  console.log(toCamelCase("the_stealth_warrior"), "theStealthWarrior")