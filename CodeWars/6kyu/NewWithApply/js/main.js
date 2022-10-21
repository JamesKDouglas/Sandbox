// parameters:
// return:
// example:
// pseudocode:

function Greeting(name){
    this.name = name;
}

Greeting.prototype.sayHello = function(){
    return "hello from method, " + this.name;
}

Greeting.prototype.sayBye = function(){
    return "bye from method, " + this.name;
}
let n = "bob";

let greet = new Greeting(n);

console.log(`Hello from property, ${greet.name}`);
console.log(greet.sayHello());
console.log(greet.sayBye());