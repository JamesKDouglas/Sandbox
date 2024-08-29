/**
 * @param {number} x
 * @return {boolean}
 */


var isPalindrome = function(x) {
    //  Negative numbers are never palindromes, as shown in the example.
    if (x<0) return false;
    
    // The easiest is to just use split.reverse.join and compare them like this
    console.log(String(x));
    console.log(String(x).split("").reverse().join(""));

    if (String(x)===String(x).split("").reverse().join("")){
       return true; 
    } else {
        return false;
    }
    
    //How would I do it without converting to a string? Well I could separate out the digits with remainder and just compare them that way.
    //ex: 121 => 121 divided by 100 is 1 remainder 21. 21 divided by 10 is 2 remainder 1. Now we have an array of integers.
    //Reverse the array and compare the arrays I guess.
    //That would work fine but I don't see how it would be better.

    
};

console.log(isPalindrome(10), false);
// console.log(isPalindrome(121), true);
// console.log(isPalindrome(-121), true);