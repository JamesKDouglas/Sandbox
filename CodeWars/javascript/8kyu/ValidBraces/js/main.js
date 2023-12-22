/*
function validBraces(braces){
    let arr = braces.split('');
    
    if(arr.filter(c => c === "(").length === arr.filter(c => c===")").length
      && arr.filter(c => c === "[").length === arr.filter(c => c==="]").length
      && arr.filter(c => c === "{").length === arr.filter(c => c==="}").length){
      return true;
    } else{
      return false;
    }   
}
  //No this doesn't work because it doesn't consider the order.
  //for example [(]) is invalid.]
  */

  //try adding a second check - split out the closed pairs. Look inside and see if there is anything open inside.
//function validBraces(braces){

    //The first test is to just see if there are the same number of open and closed brackets
    /*
    let arr = braces.split('');
    let passTestCount = 0;
    if(arr.filter(c => c === "(").length === arr.filter(c => c===")").length
      && arr.filter(c => c === "[").length === arr.filter(c => c==="]").length
      && arr.filter(c => c === "{").length === arr.filter(c => c==="}").length){
      passTestCount++ //if the number of open and closed brackets is even, that's test 1 passed.
    }
    */

    //The problem is, it is possible to have something like [(]), which is not valid.
    //If I can collect strings or arrays of closed brackets and all the stuff inside I could look at each string in the same way. 
    
    //I tried first to just look for a regex of open brackets with anything in between, but I can't get that working.
    //let arrClosed = braces.match(Set(/\[\]/g));
    //console.log("closed bracket array contents+" + arrClosed);

    /* no this way to long and complicated
    //ok using regex to extract a closed bracket set doesn't work. try substr.
    let openIndexes = new Array(braces.length);
    let closeIndexes = new Array(braces.length);

    for (i=0;i<<braces.length; i++){
      if (braces[i] == "(" ){
        openIndexes[i]=[1];//1 indicates round bracket
      }
      if (braces[i] == ")" ){
        closeIndexes[i]=[1];//1 indicates round bracket
      }

      if (braces[i] == "[" ){
        openIndexes[i]=[2];//2 indicates square bracket
      }
      if (braces[i] == "]" ){
        closeIndexes[i]=[2];//2 indicates square bracket
      }

      if (braces[i] == "{" ){
        openIndexes[i]=[3];//3 indicates curly bracket
      }
      if (braces[i] == "}" ){
        closeIndexes[i]=[3];//3 indicates curly bracket
      }
    }

    //Hunt through the closed bracket sets?
    new closedBracketSet = braces.substr(openIndexes.indexOf(1), closedIndexes.indexOf(1, openIndexes.indexOf(1)));
    */

    //try counting the open and closed brackets. Start with a simple case.
    /*
    let openCounterRound;
    let openCounterSquare;
    let openCounterCurly;
    let validity = "true";

    for (i =0; i<braces.length; i++){
      if (braces[i] == "("){
        openCounterRound++;
      }
      if (braces[i] == ")"){
        openCounterRound--;

      }

      if (braces[i] == "["){
        openCounterSquare++;
      }
      if (braces[i] == "]"){
        openCounterSquare--;
      }

      if (braces[i] == "{"){
        openCounterCurly++;
      }
      if (braces[i] == "}"){
        openCounterCurly--;
      }

      
    }


    console.log(openCounter);
    console.log(validity);
    if (openCounter == 0 && validity == "true"){
      return true;
    } else {
      return false;
    }
    */

/*
function validBraces(braces){

  let brackets = "[]{}()";
  let stack = [];

  for(let bracket of braces) {//load the character into bracket, looking at each one at a time
     //Then we use push and pop to handle the stack. Using push and pop literally means handling the array "stack" as a data structure called a stack.
    let bracketsID = brackets.indexOf(bracket);//identify the character we are looking at, giving it a number to suit its identity
    // we could say that if the character is not a bracket, skip it. However, we know there are no other characters involved so we don't need to.
    console.log(`bracketsIndex: ${bracketsIndex}`);
    if(bracketsID % 2 == 0) {//If the character we are looking at is a, opening bracket 
      stack.push(bracketsID + 1);//If the bracket is an opening one then put the identity of the closing one in the stack. So this is what we need next to find shrink the stack eventually. 
    } else {
      if(stack.pop() !== bracketsID) {//If it's not an opening bracket it's a closing one so run this. If the character at the end of the array is not equal to the correct closing bracket expected then the braces set is not valid so,
        return false;
      }
    }
    console.log(`stack: ${stack}`);
  }

  return stack.length == 0;
}






function validBraces(braces){

  let brackets = "[]{}()";
  let stack = [];

  for(let bracket of braces) {
    let bracketsID = brackets.indexOf(bracket);
    console.log(`bracketsIndex: ${bracketsIndex}`);
    if(bracketsID % 2 == 0) { 
      stack.push(bracketsID + 1);
    } else {
      if(stack.pop() !== bracketsID) {
        return false;
      }
    }
    console.log(`stack: ${stack}`);
  }

  return stack.length == 0;
}

function validBraces(braces) {
  let braceTypes = "[]{}()";
  let stack = [];


  for (let currentCharacter of braces){
    console.log(`current character: ${currentCharacter}`)
    let bracketID = braceTypes.indexOf(currentCharacter);
    console.log(`bracket id: ${bracketID}`);
    if (bracketID % 2 == 0) {
      stack.push(bracketID + 1);
    } else {
      if (stack.pop() !== bracketID){
        return false;
      }
    }
  }
  
  return true;
}
*/
/*
function validBraces(braces){
  //the braces involved are {}[](). That's all. No other characters.
  let stack = [];
  
  for (let currentCharacter of braces){
    //first, handle open braces. If a brace opens I add an identifier to the stack. We need to find that same identifier to close the brace and shrink the stack.

    if (currentCharacter == "{"){
      stack.push(1);

      continue;
    } else if (currentCharacter == "["){
      stack.push(2);

      continue;
    } else if (currentCharacter == "("){
      stack.push(3);

      continue;
    }

    //now, look at closing braces. Closing braces are only valid if they come in the correct order - the type has to match the ID in the stack.

    if (currentCharacter == "}" && stack[stack.length-1] == 1){//if it's a closing curly brace and that's what we are expecting
      stack.pop(); //then shorten the stack

      continue;
    } else if (currentCharacter == "]" && stack[stack.length-1] == 2){//if it's a closing curly brace and that's what we are expecting
      stack.pop(); //then shorten the stack
      continue;
    } else if (currentCharacter == ")" && stack[stack.length-1] == 3){//if it's a closing curly brace and that's what we are expecting
      stack.pop(); //then shorten the stack
      continue;
    } else {
      return false;
    }
  }

  //We've built and unbuilt the stack as much as possible. Is it empty now?
  if (stack.length ==0){
    return true;//if it is, the brackets are all opened then properly closed
  } else {
    return false;//if not, there may be some left open.
  }
}
*/
function validBraces(braces){
  var matches = { '(':')', '{':'}', '[':']' };
  var stack = [];
  var currentChar;

  for (var i=0; i<braces.length; i++) {
    currentChar = braces[i];

    if (matches[currentChar]) { // opening braces
      stack.push(currentChar);
    } else { // closing braces
      if (currentChar !== matches[stack.pop()]) {
        return false;
      }
    }
  }

  return stack.length === 0; // any unclosed braces left?
}

function testStringAddress(someText, index){
  return someText[index];
}