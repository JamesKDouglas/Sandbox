//Two inputs: A template and a phone number.

//The template is a string, while the number will be an integer.

//What if there are non number characters or a template with odd characters?
//Don't expect that.

//The template has spaces, hyphens, brackets and octothorps.
//The octothorps will get replaced with numbers to format the phone number.

//Format the phone number as in the octothorps in the template.
//Leave + (), spaces alone in the template.

//If there aren't enough #'s then return "Invalid phone number"
//If there are too many #s then ignore the ones on the end.

//return string type.

// (79052479075, "+# ### ### ## ##") => "+7 905 247 90 75"
// (79052479075, "+# (###) ### ##-##") => "+7 (905) 247 90-75"
// (79052479075, "+# ### ### ## ##") => "+7 905 247 90 75"
// (81237068908090, "+## ### ### ## ##") => "+81 237 068 90 80"
// (8123706890, "+## ### ### ##-##") => "Invalid phone number"
// (911, "###") => "911"
// (112, "+ () -") => "+ () -"

function formatNumber(number, template) {

    //Some early returns and prep:
    //Early return if the # digits is too small.
    //Cut off the end if there are too many digits.

    let numberArr = number.toString().split("");
    let octoCount = template.split("").filter(el => el === "#");

    if (numberArr.length < octoCount.length){
        return "Invalid phone number"
    } else if (numberArr.length > octoCount.length){
        numberArr.splice(octoCount.length, numberArr.length-octoCount.length);
    }

    //Lets try using the replace method. 
    //so I'll call template.replace(char, fx)
    //And each time a character is found, we want to pop in a number.
    //Since we want to replace all the octothorps we should use a regex for the char.

    //This uses a side effect, disassembling numberArr. Replace with generator?
    let newString = template.replace(/[#]/g, () => {
        return numberArr.shift();
    });
    
    return newString;
}

console.log(formatNumber(7905247907522, "+# ### ### ## ##"), "+7 905 247 90 75")
console.log(formatNumber(79052479075, "+# (###) ### ##-##"), "+7 (905) 247 90-75")
console.log(formatNumber(79052479075, "+# ### ### ## ##"), "+7 905 247 90 75")
console.log(formatNumber(81237068908090, "+## ### ### ## ##"), "+81 237 068 90 80")
console.log(formatNumber(8123706890, "+## ### ### ##-##"), "Invalid phone number")
console.log(formatNumber(911, "###"), "911")
console.log(formatNumber(112, "+ () -"), "+ () -")