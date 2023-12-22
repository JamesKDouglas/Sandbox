//The input will be a string

//The goal is to count the consonants present. 

//Return an integer.

//ex:
//aeiouAEIOU => 0
//bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ => 42
//01234567890_ => 0

//edge cases and timeouts/limits?
//Is this string really big? Nope.

function consonantCount(str) {
  //I'll count the vowels and subtract that.
  let vowels = ["a","e","i","o","u"];
  //add uppercase
  for (let i=0;i<5;i++){
    vowels.push(vowels[i].toUpperCase());
  }
  
  //Count em
  //I'll do that by removing all the vowels then just take the length
  
  let strArr = str.split("");
  let nonConsonantCount = 0;
  
  for(let letter=0;letter<strArr.length;letter++){

    let ac = strArr[letter].charCodeAt(0);
    
    if (ac<65 || (ac>90 && ac<97) || ac>122){
      nonConsonantCount++;//it isn't even a letter.
      continue;
    };

    for (vowel of vowels){
      if (strArr[letter]===vowel){
        nonConsonantCount++;
      }
    }
  }
  return strArr.length-nonConsonantCount;
}

console.log(consonantCount("aeiouAEIOU"), 0);
console.log(consonantCount("bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ"), 42);
console.log(consonantCount("01234567890_"), 0);