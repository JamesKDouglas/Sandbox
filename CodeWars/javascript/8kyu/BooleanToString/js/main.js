// Parameters - incoming boolean. true or false
// Return - a string true or false.
// Examples - "true" comes back as true
// Pseudocode - if (param) return true. Else return false. 

function booleanToString(b){
    if(b){
        return "true";
    } else if (!b) {
        return "false";
    }
  }

  //a boolean will also be interpreted by b.toString or String(b) just fine. Ternary statement is also fine.
  