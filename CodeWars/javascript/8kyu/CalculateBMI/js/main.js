//inputs will be two numbers: weight and height. 

//There are no units to either. They will be integers or floats.

//The goal is to find the ratio between them, which is the "body mass index"

//return a number. It can be a float or integer.

function bmi(weight, height) {
    let bmi = weight/(height**2);
    return (bmi <= 18.5)?"Underweight" : (bmi <= 25)?"Normal":(bmi <=30)?"Overweight":"Obese";
  }