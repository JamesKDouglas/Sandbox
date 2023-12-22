function noSpace(x){
    //I tried replaceAll but it seems to be missing as a function from the node.js environment.
    return x.replace(/ /g, '');
}
console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'));
