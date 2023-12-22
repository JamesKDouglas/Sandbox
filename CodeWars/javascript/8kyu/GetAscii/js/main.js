//Input is a character value
//Find the associated character in the ascii table.

//return that.

//edge cases? too large for the table? Not expected. Negative?
//nul is a special case.
//timeouts not an issue.
//inputs are valid.

//ex
//nul => 0
//) => 41
//e => 101
function getASCII(c){
  //   console.log(c);
    //lets use String.charCodeAt().
    if (!c) return 0;
    
    return c.charCodeAt(0);
  }
  
  console.log(getASCII(), 0);
  console.log(getASCII(")"), 41);
  console.log(getASCII("e"), 101);