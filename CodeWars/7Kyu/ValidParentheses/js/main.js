//input will be a string of round parentheses 

//our goal is to see if the parentheses are valid.

//return true or false.

//null? not expected.
//[]? not expected.

//how long? Timeouts? Not expected.
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true


//"()()(()))"
function validParentheses(parenStr) {
    //lets score a -1 or 1 for each bracket.
    //-1 for a close, 1 for an open
    //if the score ever goes negative we have a closing bracket which is a problem.
    let score = 0;
    for (let i=0;i<parenStr.length;i++){
      if ( parenStr[i] === "(" ){
       score++;  
      } else if( parenStr[i] === ")"){
        score--;
      }
      
      if (score<0){
        return false
      }
    }
    if (score === 0){
      return true;
    } else {
      return false;
    }
  }
  
  console.log(validParentheses("()"), true);
  console.log(validParentheses(")(()))"), false);
  console.log(validParentheses("("), false);
  console.log(validParentheses("(())((()())())"), true);