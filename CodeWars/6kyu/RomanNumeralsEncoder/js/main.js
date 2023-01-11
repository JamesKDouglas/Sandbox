//The input will be an integer up to 3999.

//Your job is to return a string that represents the number as a roman numeral.

//Roman numerals work like this:
//Each character from the left represents an integer that is added according to the mao:

// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000

//so III is 3, CCC is 300 etc.

//As a first priority the number is represented by a symbol or repeating symbols. The highest is used as a priority. For example 10 is not VV, it is X.

//So often can identify the magnitude, match the next largest character, build that to a string and subtract the value. Then repeat for the smaller value.

//However:
// You can't have more than 3 symbols. This applies when a number is between the character handling a number starting with a 1 and a 5. So 400 can't be CCCC.
//Instead, you must use a subtractive method for that integer add.
// for example 400 would be CD. 405 would be CDV.

//I've been trying to be clever to implement logic that can do this. But instead, lets try a 'brute force' case/switch program.

function solution(number){
    //us a while loop to decrease the number.
    let rom = [['I',1],['V',5],['X',10],['L',50],['C',100],['D',500],['M',1000],['K',4000]];
    let char = [];
    let str = "";

    let j=0;
    while (number>0 && j<10){
        j++;
        //identify the range we're working with.
        for (let i=rom.length-1;i>=0;i--){
            if (rom[i][1]<=number){
                char = rom[i][0];
                break;
            }
        }

        //Now that we identified the roman numeral range were working in, go into the switch statement
        switch (char[0]){
            case 'I': 
                console.log(`case I`);
                if (number===4){
                    number -= 4;
                    str.concat("IV");
                    break;
                } else {
                    number -= 1;
                    str.concat("I");
                    break;
                }
            case 'V':
                console.log(`case V`);
                if (number === 9){
                    number -= 9;
                    str.concat("IX");
                    break;
                } else {
                    number -= 5;
                    str.concat("V");
                    break;
                }
            case 'X':
                console.log(`case X`);
                if (number>=40 && number<30){
                    number -= 40;
                    str.concat("DL");
                    break;
                }
                else if (number >= 30 && number < 40){
                    number -= 30;
                    str.concat("XXX");
                    break;
                } else if (number>=20 && number<30) {
                    number -= 20;
                    str.concat("XX");
                    break;
                } else if (number<20){
                    number -= 10;
                    str.concat('X');
                    break;
                }
            case 'C':
                console.log(`case C`);
                break;
            case 'D':
                console.log(`case D`);
                break;
            case 'M':
                console.log(`case M`);
                break;
            case 'K':
                console.log(`case K`);
                return "Number too large! Must be below 4000."
                break;
                
        }
        return str;
    }

    //Inside the while loop we'll use a switch to look at the magnitude.
    //Compare it to a character map, which can just be an array.

    //Build the string by choosing the case, identifying the correct character string, and then concatenating it.

    //return the string!

}

console.log(solution(5), 'V');