//input will be a string. 
//Normally that's for a language, but handle invalid inputs.

//The goal is to translate welcome from english to that language 

//return the word welcome in that language or an error, 
//"(text of error unknown)"

function greet(language){
  let db ={
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso',
  }
  console.log(language);
  console.log(db[language]?db[language]:"Welcome");
  return db[language]?db[language]:"Welcome";
}