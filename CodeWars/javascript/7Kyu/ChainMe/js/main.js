function add(x) {
	return x + 10;	
}

function mult(x) {
	return x * 30;
}

function chain(input, fs){
    let output = input;
    for (i in fs){
        console.log(output);
        output = fs[i](output);
    }
    return output;
}

let input = 2;

console.log(chain(input, [add, mult]))

//using reduce makes sense for this as well, and I see a lot of solutions that use that. 