// string. No special characters. Numbers. Both upper and lowercase.

//size: modest/small.

//comes in as a string.

//Return uppercase.

//examples: 
//The quick brown fox... => THE QUICK BROWN FOX...

//Lorem ispsum => LOREM IPSUM

//1234 => 1234

//No newlines etc.

//Return the string. Simple. 

function makeUpperCase(str){
    //use the JS method that belongs to String. 
    return str.toUpperCase();
}

console.log(makeUpperCase("The quick brown fox..."), "THE QUICK BROWN FOX...");

console.log(makeUpperCase("Lorem ipsum"),"LOREM IPSUM");

console.log(makeUpperCase("1234"), "1234");

