function plural(n) {
    let theNum = n.slice(11, n.length);  // start after the phrase "Plural for ", which is 11 characters long
    console.log(`testing ${theNum}`);
    if (+theNum == 1){
        return false;
    } else {
        return true;
    }
  }

console.log(plural("Plural for 1"));

//This works just fine but Codewars can't handle it because somehow it does not recognize the slice function for a string!
