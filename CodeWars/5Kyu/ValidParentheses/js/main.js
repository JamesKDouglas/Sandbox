// parameters: A string of round braces is sent in.
// return true or false. True if the braces are valid (closed) and false if they are not.
// examples:
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
// pseudocode:
// This looks like it needs recursion.
// split the whole thing into an array so I can work with it.
// How about if it's an ( add a 1, and if it's a ) take away a 1. Balanced is 0.

function validParentheses(parens) {
    // your code here ..
    arr = parens.split('')
//    console.log(arr);
    let status = 0;
    for (let i=0;i<=arr.length;i++){
        console.log(`begin for loop i: ${i} arr.length: ${arr.length}`)
        if (arr[i] == "("){
            status++;
        } else if (arr[i] == ")"){
            status--;
            if (status<0){ //What happens is that a section gets a ) to the right of it. After passing that point it can never be closed but the status might get to 0. We detected a flaw at that point so just return false right away.
                return false;
            }
        }
        console.log(status);
    }
    if (status == 0){
        return true;
    } else{
        return false;
    }

}

//   "(())((()())())"  =>  true
let parens = "())(";
console.log(validParentheses(parens));
