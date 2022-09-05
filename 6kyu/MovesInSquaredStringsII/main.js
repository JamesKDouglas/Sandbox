let s = "abcd\nefgh\nijkl\nmnop";

function rot(strng){
    let lines = strng.split(`\n`);
    for (let i=0;i<lines[0].length;i++){
        lines[i] = lines[i].split('').reverse().join("");

    }   
    return lines.reverse().join("\n");
}

function selfieAndRot(strng){

    //first half
    let lines = strng.split(`\n`);
    let tempString = "";
    let period = ".";
    let linesP = [];//for some reason I require this new array, i am unable to assign to the previous
    for (let i=0;i<lines[0].length;i++){
        tempString = lines[i].concat(period.repeat(lines[0].length));
        linesP[i] = tempString;
        tempString = "";
    }   
    let firstHalf = linesP.join("\n");

    firstHalf = firstHalf.concat("\n");

    //second half
    linesP = [];
    for (let i=0;i<lines[0].length;i++){
        lines[i] = lines[i].split('').reverse().join("");
        tempString = tempString.concat("....", lines[i]);
        linesP[i] = tempString;
        tempString = "";
    }   
    let secondHalf = linesP.reverse().join("\n");
    return firstHalf + secondHalf;
}

function testFunc(s){
    console.log(s);
}
function oper(fct, s) {
    return fct(s);
}
// console.log(rot(s));
// console.log(oper(selfie_and_rot,s));
console.log(oper(selfieAndRot,s));