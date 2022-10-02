// parameters: Make a function that recieves a string. Then it can receive more strings. Every new one gets added to the previous one. 
// return: the string, composed of all strings previously passed in.
// example:
// createMessage("Hello")("World!")("how")("are")("you?")() 
//outputs, "Hello World! how are you?"

// pseudocode:
//Could use currying, could use a generator function? From the description it could be either, but the syntax in the example suggests currying.

// https://javascript.plainenglish.io/infinite-currying-in-javascript-f17ec1619568

function createMessage(a) {
  return function(b){
    if(!b){
        return (a);
    }
    return createMessage(a.concat(" "+ b));
  }
}
console.log(createMessage("1")("2")("3")("4")("5")("6")());