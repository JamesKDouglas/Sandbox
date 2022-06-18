function mxdiflg(a1, a2) {
    if(!a1 || !a2){
        return "Nothing";
    }

    let strLengthsa1 = a1.map(el => el.length);
    let maxLengtha1 = Math.max(...strLengthsa1);
    let minLengtha1 = Math.min(...strLengthsa1);

    let strLengthsa2 = a2.map(el => el.length);
    let maxLengtha2 = Math.max(...strLengthsa2);
    let minLengtha2 = Math.min(...strLengthsa2);

    //We are looking for the max difference in string lengths across the arrays.
    
    return (Math.abs(maxLengtha1-minLengtha2) > Math.abs(maxLengtha2-minLengtha1) ? Math.abs(maxLengtha1-minLengtha2) : Math.abs(maxLengtha2-minLengtha1));


}

var s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
var s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];

console.log(mxdiflg(s1,s2));