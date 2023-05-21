function* foo() {
    let letters = ["a","b","c"];
    let counter = 0;
    while(true){
      yield letters[counter];
      counter++;
    }
};
  
let str = '';
let genObj = foo();

// const take = n => function*(gen){
//   while (n-- > 0){
//     yield gen.next().value;
//   }
// }

// for (let i=0;i<3;i++) {
//   yieldVal = genObj.next().value;
//   console.log(str);
//   str = str + yieldVal;
// }
// console.log(str);

const take = n =>function*(gen){
  while (n-- > 0){
    console.log("what's next?")
    yield gen.next().value;
  }
}

let takeObj = take(3)(foo())

console.log(takeObj.next().value);
console.log(takeObj.next().value);
console.log(takeObj.next().value);
// Expected output: "abc"
  
// function* generator() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// //return the generator object
// const gen = generator(); // "Generator { }"

// //then use the object.
// console.log(gen.next().value); // 1
// console.log(gen.next().value); // 2
// console.log(gen.next().value); // 3