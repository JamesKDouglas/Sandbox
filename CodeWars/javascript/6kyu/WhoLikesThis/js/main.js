//Input: an array of strings. Each string is a first name. 
//The goal is to create the text that should indicate the quantity of likes
//that the array represents.

//The output depends on the number of entries (names) in the following way:
// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

//The output is the string.

//Size? Speed? Max array sizes, any timeout issues? No nothing substantial

function likes(names) {
    //if or case statement. 
    //Base the conditions on the number of entries.
    //Then return a string based on that.
    //We do need compose the string from the elements, but that's easy enough. 
    //We can just use indexes to extract the strings.
    
    switch(names.length) {
      case 0:
        return "no one likes this"
     
      case 1:
        return `${names[0]} likes this`
    
      case 2:
        return `${names[0]} and ${names[1]} like this`
   
      case 3:
        return `${names[0]}, ${names[1]} and ${names[2]} like this`
             
      default:
        return `${names[0]}, ${names[1]} and ${names.length-2} others like this`
  
    }
  }
  
  console.log(likes([]),"no one likes this");
  console.log(likes(["Peter"]), "Peter likes this");
  console.log(likes(["Jacob", "Alex"]), "Jacob and Alex like this");
  console.log(likes(["Max", "John", "Mark"]), "Max, John and Mark like this");
  console.log(likes(["Alex", "Jacob", "Mark", "Max"]), "Alex, Jacob and 2 others like this");
  
  