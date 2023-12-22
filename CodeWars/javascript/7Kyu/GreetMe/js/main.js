//input will be a name, as a string. The capitalization can be all mixed up.

//The goal is to put that name into a greeting and make the capitalization correct
//
// ex
// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"

//We're not expecting any special characters in the names? Like click? Nope.
//Speed, job size? None.

var greet = function(name) {
    let nameCase = name.toLowerCase();
    nameCase = nameCase[0].toUpperCase() + nameCase.substring(1);
    return `Hello ${nameCase}!`;
};

console.log(greet("riley"), "Hello Riley!");
console.log(greet("JACK"), "Hello Jack!");
  