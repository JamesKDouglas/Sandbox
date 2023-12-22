// integers. numbers.  inputs 10 con to binary. up to 2^64. positive.
// align righthand.
// combine
// 1 can't overlap
// 0,1 the 1 replaces the 0
// 00 overlap.
// "interlocking"

// satisfy all conditions for every digit with res to shortest.

// 9, 4 ->  1001, 100 -> true.
// 3,6 -> 11, 110 -> false.
// 5, 10 -> 101, 1010 -> true.

// return boolean - interlock True.. Don't false.

// let num1 = 9;
// let num2 = 4;

function interlockable (num1, num2){
    //convert to base 2;
    //parseInt takes in string and outputs in spec radix.
    //toString, to array.

    num1 = num1.toString(2).split('');
    num2 = num2.toString(2).split('');
    
    // console.log(num1,num2);

    let min = 0;
    if (num1.length>num2.length){
        min = num2.length;
    } else {
        min = num1.length;
    }
    // console.log(min);
    // for loop compare digits. limit to smallest. go from righthand.
    for (let i=0;i<=min;i++){
        // return false if we detect non-interlock. 
        if (num1[num1.length -i] == 1 && num1[num1.length -i] == num2[num2.length - i]){
            return false;
        }
    }
    // return true if there is no interlock fail.
    return true;
}


console.log(interlockable(4,9), "true");
console.log(interlockable(3,6), "false");
console.log(interlockable(5,10), "true");