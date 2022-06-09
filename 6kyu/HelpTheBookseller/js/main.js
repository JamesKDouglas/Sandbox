// p input a list of books, codified according to:
// L: The list of books on hand: This is an array with items formatted as Llll ## where the letter l is a capital letter code indicating the book and ## is the number of books in stock. The first letter is special and indicates a category of book.
//M: The list of categories. This is the query. It is an array. It is a list of letters that will match the first letter of some books (or none if none are in stock).
// return count the number of books in a each category of the list M.
// The returned list has to be a string with the format:
// (A : 20) - (B : 114) - (C : 50) - (W : 0)

// example L = {"ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"}.
// M = {"A", "B", "C", "W"} 
// returns "(A : 20) - (B : 114) - (C : 50) - (W : 0)"
// pseudocode:
//It seems to me like map and accumulate might be helpful here. 
//set up an array that is empty to recieve the output (arrOutput).
//for loop to go through the categories.
//  For each category loop through using reduce - accumulate should test each item to see if it matches on the first character. This will require deconstructing the item into an array with split(' ') to get the numbers then split('') to get the first character. If it does match then add it to the accumulator.
// construct an array item string with the category and the accumulator value.
// end the loop
//make the output into a string with join.


function stockList(listOfArt, listOfCat){

    //early returns in case it's a bogus call
    if (listOfArt.length==0){
        return "";
    } else if (listOfCat.length==0){
        return "";
    }

    console.log(listOfArt);
    console.log(listOfCat);
    let arrOutput = [];
    for (let i=0;i<=listOfCat.length;i++){
        let categoryCount = [];
        //console.log(`searching for category ${listOfCat[i]}`);
        //console.log(`item at array 0 in listofArt: ${listOfArt[0]}`);

        //if you don't initialize the accumulator reduce basically skips the first item. Also, you must explicitly return the accumulator.
        categoryCount[i] = listOfArt.reduce((acc, item) => {
            let numItems = item.split(' ');
            let letters = item.split('');
            //console.log(`inside reduce, reducing at item ${item} which is abundant as ${+numItems[1]} with cat ${letters[0]}. Looking at cat ${listOfCat[i]}`);
            if (letters[0] == listOfCat[i]){
                //console.log("found a match!");
                acc += +numItems[1];
                //console.log(`added the value to acc ${acc}`);
                return acc;
            } else {
                return acc;
            }
        },0)

        //console.log(`total in category: ${categoryCount[i]}`)
        if (listOfCat[i] != undefined && categoryCount[i] !=0 ){
            arrOutput.push(`(${listOfCat[i]} : ${categoryCount[i]})`);
        }
    }
    let arrOutputString = arrOutput.join(' - ');
    return(arrOutputString);
    //console.log(arrOutput);
    // console.log(listOfArt);
    // console.log(listOfCat);
}

// let L = ["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"];

// let M = ["A", "B", "C", "W"];

let L = [ 'ABAR 200', 'CDXE 500', 'BKWR 250', 'BTSQ 890', 'DRTY 600' ];
let M = [ 'A', 'B' ];
console.log(stockList(L, M));

//expected '(B : 114) - (C : 70)' to equal '(A : 0) - (B : 114) - (C : 70) - (W : 0)'
//Yet also,
// expected '(B : 0) - (R : 0) - (D : 0) - (X : 0)' to equal ''
//So there seems to be a conflict. Do they want zeros retrned or not?

//If L or M are empty return string is "" (Clojure and Racket should return an empty array/list instead).

