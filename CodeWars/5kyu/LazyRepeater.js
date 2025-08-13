function makeLooper(str) {
  let counter = -1;
  return function(){
    counter++;
    if (counter == str.length){
        counter = 0;
    }
    return str.charAt(counter);
  } 
};

let str = "hello";
loop = makeLooper(str);
console.log(loop());
console.log(loop());
console.log(loop());
console.log(loop());
console.log(loop());

console.log(loop());
console.log(loop());
console.log(loop());
console.log(loop());
console.log(loop());