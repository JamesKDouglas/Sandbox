// Parameters - a string containing special characters and numbers
// Return - a string  without numbers
// Example - (E3at m2e2!!)"), "(Eat me!!)"
// Pseudocode - 
//  use Replace and a regex to find  numbers and  replace them  with  ''

 function stringClean(s){
     return s.replace(/[0-9]/g, '');
 }

 console.log(stringClean('E343at m2e2!!'));

// oddly, an anchor as in /^[0-9]/ screws this up. That is not what is expected considering some documentation.
//https://www.javascripttutorial.net/regular-expression-anchors/
//https://stackoverflow.com/questions/19715303/regex-that-accepts-only-numbers-0-9-and-no-characters

//ok well nevermind the incorrect docs, that's how it behaves.