//input: a string and a search character.
//output: the number of timesthe search character appears in the string.
//ex:
// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0 

function strCount(str, letter){  
  
    let counter = 0;
    
    for (ltr of str){
      if (ltr === letter){
        counter++
      }
    }
    return counter;
  //   let chars = [...str.matchAll(letter)];
  //   return chars.length;
  }
  
  console.log(strCount("Hello", "o"), 1);
  console.log(strCount("Hello", "l"), 2);
  console.log(strCount("", "z"), 0);