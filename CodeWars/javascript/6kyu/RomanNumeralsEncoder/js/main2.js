// parameters: A positive integer is provided. Up to 3999.

// return: The integer represented by the ruman nomeral system.
// example:
// https://en.wikipedia.org/wiki/Roman_numerals

//Character map:
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000

//Make this an array so we can navigate by index. perhaps 2d.

//1 to 12:
// I, II, III, IV, V, VI, VII, VIII, IX, X, XI, XII

// pseudocode:
// The base 10 number exists as the variable num.
// Check the magnitude of the number, identifying where it falls in the character map.
// When the correct magnitude is found, aka the number is larger than the value.
//      Then see how many times larger num is than the value. 
//      If it's over 3x larger we need to use the next symbol and place a subtractive symbol in front
        //    run routine for that: use array index to retrieve the higher symbol and compose down.
//      If it's less than 3x larger but more than 1x larger, add the symbol to the string either once or twice. Subtract the appropriate amount from the number.
//      Add symbols to the string and loop again.

// ex for 5:
// num is 5
// 5 is equal to the value V.
// Therefore subtract 5 from num and concat v onto the string.
// num is now 0
// So end the loop and return the string.

// ex for 1890:

// num is 1890. This is larger than M. M is the largest thing.
// It is larger by a factor of 1.89. That's less than 3. It has a floor of 1
// Therefore append 1 M and extract 1000.
// num is now 890. Loop again.
// 890 is larger than D but smaller than M. It is larger than D by 1.5 or so. 
// Subtract 500 and concat D.
// num is 390
// that's larger than C and smaller than D. It is larger than C by 3.9. (we will use CCC)
// floor of 3.9 is less than 4 or over. Only do a prefix routine if it's over four. There is only ever a single prefix used. 
// subtract the value times floor, and concat that many 
///etc.

//Below I use a strictly mathematical model. Perhaps I should, instead, sort by digits first and consider the magnitude of the digits. How do you write a proper prefix function that works for both the 500 and 1000?

//1990 should be MCMXC

function solution(number){
    console.log(`solving for ${number}`);
    let rom = [['I',1],['V',5],['X',10],['L',50],['C',100],['D',500],['M',1000],['X',4000]];
    //x is a placeholder to act as the max cap and initiate the prefix routine.

    let str = "";

    let num = number; //just make a copy. It's a primitive so no reference issues.;

    //anti crash counter ;P;
    let j = 0;
    while (num>0 && j< 10){
        console.log(`begin loop. num is ${num}`);
        j++;
        for (let i=rom.length-1;i>=0;i--){//count down through the characters by value
            console.log(`checking ${num} against ${rom[i][0]} aka ${rom[i][1]}`);
            if (num>=rom[i-1][1]){
                console.log(`found me a match to begin`);//Identified which character the number is below. 
                let floor = Math.floor(num/rom[i-1][1]);
                console.log(`floor is ${floor}`);
                if (floor<=4){
                    //prefix subroutine.
                    console.log(`begin prefix routine`);
                    str = str.concat(rom[i][0]);
                    str = str.concat(rom[i+1][0]);//Don't we have to repeat this sometimes?
                    //and shouldn't we be using i-1?
                    num -= (rom[i+1][1] - rom[i][1]); //parenthesis may not be necessary.
                    break;
                } else {
                    str = str.concat(rom[i][0]);
                    num -=rom[i][1];//we could detect that we need multiple ones but I'd rather just let the loop run again, given the job size (very small).
                    console.log(`str: ${str}`);
                }
            }

        }
    }
    return str;
}

console.log(solution(1990), 'MCMXC');
// console.log(solution(5), 'V');
// console.log(solution(2008), 'MMVIII');
