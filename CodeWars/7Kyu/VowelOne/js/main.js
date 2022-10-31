//input a string. can have 'non alpha' characters like commas and spaces. And it will have letters too. Vowels and consonants.

//Return a string type in which all of the vowels are 1's and all other characters are 0's. That includes spaces and punctuation. 

//big string? Modest. Don't worry about timeouts.

//newlines? don't expect any escaped characters.

// y? Y considered a consonant. 

//null? Well then return empty string "". Don't throw an error.  

//"abceios" => "1001110"
//"aeiou, abc" => "1111100100"
//"abceiosY" => "10011100"
//"" => "" 
function vowelOne(s){
    //declare an array with all the vowels.
    let vow = ['a','e','i','o','u'];
    //use replaceAll to replace all the vowels with ones.
    for (letter of vow){
      s = s.replaceAll(letter, "1");
    }
    //split into an array then use map to replace all the non one's with zeros.
    s = s.split('').map((l)=> {
      if (l==="1") {
        return "1"
      } else {
        return "0"
      }
    }).join("");
  
    return s;
  }
  
  
  console.log(vowelOne("abceios"), "1001110");
  console.log(vowelOne("aeiou, abc"),"1111100100");
  console.log(vowelOne("abceiosY"), "10011100");
  console.log(vowelOne(""), "");