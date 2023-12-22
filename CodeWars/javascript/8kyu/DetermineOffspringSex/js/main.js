//input will be XX or XY, representing chromosomes.

//output will be a sentence that indicates whether the chromosomes will result
//in a son or daughter.

//
//"XX" => "Congratulations! You're going to have a daughter."
//"XY" => "Congratulations! You're going to have a son."

//what about YX? still son
//what about xx? Always uppercase.
//yy? not expected
//error checking? nope.

function chromosomeCheck(sperm) {
    let gender = "";
    if (sperm === "XX"){
      gender = "daughter";
    } else if (sperm === "XY"){
      gender = "son";
    } else if (sperm === "YX"){
      gender = "son";
    }
    return `Congratulations! You're going to have a ${gender}.`
  }
  
  console.log(chromosomeCheck("XX"), "Congratulations! You're going to have a daughter.");
  console.log(chromosomeCheck("XY"), "Congratulations! You're going to have a son.");
  