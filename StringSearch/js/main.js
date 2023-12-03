let str = "112233"
let scores = [["112233", 750],["223344",750],["123456",10000]];
let searchString = new RegExp(`${scores[0][0]}`);

console.log(str.search(searchString));