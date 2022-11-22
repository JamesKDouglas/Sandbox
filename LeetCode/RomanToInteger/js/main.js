/**
 * @param {string} s
 * @return {number}
 */

//input will be as string roman numeral. Integer.
//bigInt? Nope.
//x instead of X? handle. (toUpperCase)
//no leading zeros.

//goal is to output a base ten number as number type.

//timeouts? Modest computation.

//III => 3
//LVIII => 58

//MCMXCIV => 1994
//1000 100 1000 10 100 1 5
// 1000 900 90 4
//If a lower value preceeds a higher one it's because a subtraction is being represented. This is the complex case.
// So we could look for that. Or we could just expand the table.

//If two characters are identical they just get added.
//Simple cases are just parsing characters, looking them up in a table then adding them together.

var romanToInt = function(s) {
    //put the roman numeral table into an array.
    //The table includes the subtractive cases.
    
    let codex = {
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000,
        IV:4,
        IX:9,
        XL:40,
        XC:90,
        CD:400,
        CM:900,
    };
    
    //Use a for loop. Each time we go though we add something to a sum.
    let sum = 0;
    for (let i=0;i<s.length;i++){
        //Look at every character. Then look at the next character.
        
        //handle very last character situation? What will happen if we try to concatenate an undefined?
        
        //If we aren't at the very last character, check for the subtractive cases first.
        //If, in combination we detect a subtractive character combination (ex IV) handle that (increment i place the value of sum) 
        if (codex.hasOwnProperty((s[i]+s[i+1]))){
            // console.log('subtractive case',codex[(s[i]+s[i+1])]);
            sum += codex[(s[i]+s[i+1])];
            i++;
            // console.log(sum);
        } else {
            // console.log(codex[s[i]]);
            sum += codex[s[i]];
            // console.log(sum);
        }
    }
    
    //return the sum!
return sum;
    
};

console.log(romanToInt("III"), 3);
console.log(romanToInt("LVIII"), 58);
console.log(romanToInt("MCMXCIV"), 1994);

// let codex = {
//     I:1,
//     V:5,
//     X:10,
//     L:50,
//     C:100,
//     D:500,
//     M:1000,
//     IV:4,
//     IX:9,
//     XL:40,
//     XC:90,
//     CD:400,
//     CM:900,
// };

// console.log(codex.hasOwnProperty('I'));