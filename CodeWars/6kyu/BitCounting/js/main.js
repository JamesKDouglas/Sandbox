var countBits = function(n) {
    return n.toString(2).split('').filter(el=>el==1).join("").length;
};

let n=1234;
console.log(countBits(n));