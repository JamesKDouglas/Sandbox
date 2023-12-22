//Input: a string with multiple words.

//Goal: put together the words into a camel case string. That is, each first letter
//is capitalized then the spaces are removed.
//the function must be a prototype method

//Return the camelcase string.

//special characters? no. 
//timeouts job size? No expected limits. 10 000 ms but no big jobs.
//""? yes must handle it.
//numbers? Not expected

String.prototype.camelCase = function(){
    if (this.length === 0) return "";
    return this.split(" ").map(el=> {
        el = el.toLowerCase();
        el = el[0].toUpperCase() + el.substring(1);
        return el;
    }).join("");
}

console.log("hello case".camelCase(), "HelloCase");
console.log("camel case word".camelCase(), "CamelCaseWord");
console.log("test case".camelCase(), "TestCase");