// Take in an object. 
// Go through the object looking for keys or values exactly 5 characters long. numbers letters or mixture.
//those 5 long elements get put into an array.

//integers, simple characters (letter) upper or lower.

// size? small size no timeout issues.

// obj empty? return empty array. null undefined get skipped. don't expect that.

// return 1 dimensional array. strings. simple return.

// {item1: 5, item2:7, item:0, 1:11111}
//["item1", "item2", "11111"]

// {1:6, 3:4, f:5}
// []

//{55555:o, 5555:p, 65432:q}
//["55555", "65432"]

let showArrayValues = (obj) => {
    let arr = [];
    for (let key in obj){
        (obj[key].toString().length==5) ? arr.push(obj[key].toString()):0;
        (key.toString().length==5) ? arr.push(key):0;
    }
    return arr;
}

console.log(showArrayValues({"item1":"5", "item2":"7", "item":"0", "1":11111}),["item1", "item2", "11111"]);

console.log(showArrayValues({"1":"6", "3":"4", "f":"5"}),[]);

console.log(showArrayValues({"55555":"o", "5555":"p", "65432":"q"}),["55555", "65432"]); 
