// parameters: input is a string of digits. The string contains all the digits necessary to form the numbers from a to b, except for one number that is missing. 
// return: the missing number or possible missing numbers. If the number has over 1 digit then you will have to report all permutations because it is not possible to say whether one or the other is missing - there just aren't enough digits to form both.

//How high are we counting here? 

// example:
// a is 1, b is 21
// 1, 21, "2198765123416171890101112131415"  => [ 12, 21 ]
//So here there is a defficiency of a 1 and a 2. When the string was initially formed 

// pseudocode:
//parse the string into an array.
//a for loop counts upwards. For every new number it splits it into its digits. 
//An inner for loop looks for each digit in the array. If it finds it, it splices it out. When all of them are found it moves on to the next one. If there is a problem finding one of the digits, that number that was being worked on is marked as missing. 

//Note that could result in a situation where 12 is marked as present and later 21 is marked as missing.
//We do only expect a single number to be missing.
//So what the output of the above is likely to just be a single number, and the later one.

//Then I have to create permutations in order to report the possible missing numbers.

//Another strategy would be to generate the string of numbers from a to b, sort the arrays, then march through the digits 1 to 9 and look to see which ones are missing. Maybe just take both strings and put them into a 2D array representing the number of appearances of 1 to 9. Or literally just go through the string and count the number of times. 

// let str= "2198765123416171890101112131415";
// let a=1;
// let b=21;


// 1, 250, 2491771842155490223116351359624312364528611014378220168235412194624714016711713319814428177371372322483356775157513821213812018915616178169180422057425055702049257200441752021649520319463179155401482271358391661117611818617619918524622611214787196431912247122923132852316022867242822118221107236471216824475181150239121712918214915910923798652331532147215125222170494190146216102161182971832061006216327616919791582131417224013622832171920823414111920188116842613237131811954516213053245241210105361242183110491312860155099247920710123810311423018722589102126931061741129193139134341491423011512712511380881921451541731651085920912215220148
// expect [66]

let str= "2491771842155490223116351359624312364528611014378220168235412194624714016711713319814428177371372322483356775157513821213812018915616178169180422057425055702049257200441752021649520319463179155401482271358391661117611818617619918524622611214787196431912247122923132852316022867242822118221107236471216824475181150239121712918214915910923798652331532147215125222170494190146216102161182971832061006216327616919791582131417224013622832171920823414111920188116842613237131811954516213053245241210105361242183110491312860155099247920710123810311423018722589102126931061741129193139134341491423011512712511380881921451541731651085920912215220148";
let a=1;
let b=250;

// 3, 12, 3678459101112
// "cannot read property of toString of undfined at findNumber"

console.log(findNumber(a,b,str));

function findNumber(start, stop, string){
    
    //Find the highest missing number
    let arr = string.split('');
    let missingNumbers = [];
    
    for (let i=start;i<=stop;i++){//i is the number we'll be searching for.
        let iArr = i.toString().split(''); //cut it up into digits
        console.log(iArr);
        for(let j=0;j<iArr.length;j++){//seach one digit at a time
            let searchDig = iArr[j];
            // console.log(`searching for digit ${searchDig} in array ${arr}. searching at index ${j}`);

            let index = arr.findIndex(el => el==searchDig); //Now loop through the array and see if that digit is present

            if (index != -1){
                //if the digit is present, slice it out
                arr.splice(index,1);
                // console.log(`found it at index ${index}! It's removed now so we have ${arr}`)
                
            } else{
                //if the digit is not present findIndex returns -1
                console.log(`digit ${j} of ${i} not found. Adding number to missingNumbers array`)
                missingNumbers.push(i);
                break;
            }
        }
    }

    //Now figure out permutations
    let perm = [];
    let digits = missingNumbers[0].toString().split('');

    if(digits.length == 2){
        perm.push(missingNumbers[0]);
        perm.push(parseInt(missingNumbers[0].toString().split('').reverse().join('')));
        return perm.sort((a, b) => a - b);
    }
    //if it's longer than 2 digits, try Heap's method for permutation
    //https://stackoverflow.com/questions/9960908/permutations-in-javascript

    // console.log(`ready to permute!`);

    perm = permute(digits);
    function permute(permutation) {
        var length = permutation.length,
            result = [permutation.slice()],
            c = new Array(length).fill(0),
            i = 1, k, p;
      
        while (i < length) {
          if (c[i] < i) {
            k = i % 2 && c[i];
            p = permutation[i];
            permutation[i] = permutation[k];
            permutation[k] = p;
            ++c[i];
            i = 1;
            result.push(permutation.slice());
          } else {
            c[i] = 0;
            ++i;
          }
        }
        return result;
      }

      return perm.sort((a, b) => a - b);
}

