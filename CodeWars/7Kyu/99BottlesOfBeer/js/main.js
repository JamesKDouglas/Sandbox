//there is no input
//just output the 99 bottles of beer on the wall song.
//with each line as a "separate element"

//by which they mean elements in an array
//so generate and return the array

//no edge cases, test cases or timeouts.

var sing = function () {
    let arr = [];
    for (let i=99;i>2;i--){
        arr.push(`${i} bottles of beer on the wall, ${i} bottles of beer.`);
        arr.push(`Take one down and pass it around, ${i-1} bottles of beer on the wall.`)
    }
    arr.push(`2 bottles of beer on the wall, 2 bottles of beer.`);
    arr.push(`Take one down and pass it around, 1 bottle of beer on the wall.`)
    arr.push("1 bottle of beer on the wall, 1 bottle of beer.");
    arr.push("Take one down and pass it around, no more bottles of beer on the wall.");
    arr.push("No more bottles of beer on the wall, no more bottles of beer.");
    arr.push("Go to the store and buy some more, 99 bottles of beer on the wall.")
    return arr;
  };``