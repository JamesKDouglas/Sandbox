// parameters: Make a function that recieves a string. Then it can receive more strings. Every new one gets added to the previous one. 
// return: the string, composed of all strings previously passed in.
// example:
// createMessage("Hello")("World!")("how")("are")("you?")() 
//outputs, "Hello World! how are you?"

// pseudocode:
//Could use currying, could use a generator function? From the description it could be either, but the syntax in the example suggests currying.

// https://javascript.plainenglish.io/infinite-currying-in-javascript-f17ec1619568

function createMessage(a) {
    if (!a){
        return "";
    }
  return function(b){
    if(!b){
        return (a);
    }
    return createMessage(a + " " + b);
  }
}
console.log(createMessage("hello")("all the")("world")());

//sxcw uses, 
// function createMessage(str) {
//     return function(next){
//       if (next === undefined) {return str;}
//       return createMessage(str + " "+ next);
//     }
// }
//Which is really the same. 