//Input of an array of strings. Single dimensional array.
//Will we have any empty elements? Nope.
//Wrong data type? Assume that won't happen.
//lowercase only, no spaces.

//Remove any consecutive duplicate letters in the strings.
//["a","ara"] a's aren't consecutive here. Not consecutive across elements.

//return an array of strings with consecutive duplicates removed.

//How large? Not sure but modest in size. 
//Timeout? No practical timeout.

//["abracadabra","allottee","assessee"] => ["abracadabra","alote","asese"]
//["","aa","bab"]=>["","a","bab"]
//["gone","going","missing"] =>["gone","going","mising"]
//["kelless","keenness"] => ["keles","kenes"]

function dup(s) {
    //make a new array to return rather than mutating.
    let newArr = [];
    let string = "";
    //for loop to go through the array.
    for (let i=0;i<s.length;i++){
    //for each element in the array I'll have a separate loop.
      if (s[i].length === 0){
        newArr.push('');
        continue;
      }
      for(let j=0;j<s[i].length-1;j++){
        //use charAt or just [] notation. Consider the ith element and the i+1th element. If they don't match, add ith element to a string.
        if (s[i][j]!==s[i][j+1]){
          string = string+s[i][j];
        }
      }
      string = string + s[i][s[i].length-1];
      newArr.push(string);
      string = "";
    }
    //return the new array.
    return newArr;
  };
  
  console.log(dup(["abracadabra","allottee","assessee"]),'["abracadabra","alote","asese"]');
  console.log(dup(["","aa","bab"]),'["","a","bab"]');
  console.log(dup(["gone","going","missing"]),'["gone","going","mising"]');
  console.log(dup(["kelless","keenness"]),'["keles","kenes"]');
  