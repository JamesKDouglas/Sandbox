// function testUndefined(){
//   let user = user ? user : {};

//   user.hasOwnProperty(id) ? user[id]:"guest";

//   console.log(typeof(user.id));
// }

// testUndefined();

// "use strict"
// class Person
//  { 
//   constructor(name){
//     this.name = name; 
//   }
//  }
// let ferdinand = Person("Ferdinand"); // oops 
// console.log(name);

// let handler = {
//   get: function(target, name) {
//     return target.hasOwnProperty(name) ? target[name] : "guest";
//   }
// };

// let emptyObj = {};
// let user = new Proxy(emptyObj, handler);

// console.log(user.id); //=> 42

//If the object exists then I can at least see if an attribute exist:
// let user = {};
// if (!user.id){
//   console.log("user id not defined!")
// }

//So then can I do this inside a function?

//Gives Typerror cannot read properties of undefined.
// function handleMissingUserObject(user){
//   var id = user.id||"Guest";
//   if (!user.id){
//     console.log("user id not defined!")
//   }
// }

// handleMissingUserObject();

// function handleMissingObject(user){
//   if (!user.id === undefined){
//     console.log("user is undefined!");
//   }
// }

// handleMissingObject();

//A good solution is optional chaining:
function handleMissingObject(user){
  if (!user?.id){
    console.log("user object not defined!");
  }
}

handleMissingObject();