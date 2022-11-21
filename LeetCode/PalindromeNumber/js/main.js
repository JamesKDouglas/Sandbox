/**
 * @param {number} x
 * @return {boolean}
 */

//input an integer. number type.  not "Two"
//don't worry about null.
//normal int.

//return a boolean. not "true" "this is a palindrome"

//No normal timeouts.

//1221 => true
//10011 => false
//123321 => true

var isPalindrome = function(x) {
    //put the number into an array (split).
    //reverse array
    //join back together
    //compare that reversed version to the original
    
    // if they are identical, palindrome!
    let rev = x.toString().split("").reverse().join("");
    let original = x.toString();
    
    // console.log(rev);
    // console.log(original);
    return rev === original;
};

console.log(isPalindrome(1221),true);
console.log(isPalindrome(10011),false);
console.log(isPalindrome(123321),true);
