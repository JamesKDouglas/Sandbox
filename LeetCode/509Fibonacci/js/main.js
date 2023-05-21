//input: a number that represents a position in the fibonacci sequence.

//Output: the number that belongs to that part of the sequence

// ex:
//the sequence is 0 1 1 2 3 5 8
//so f(0) = 0, f(1) = 1, f(2) = 1, f(3) = 2

//The sequence is defined by f(n) = f(n-1) + f(n-2)

//so what is f(-1) then? Well, that doesn't exist. So we have to rather fudge the first three entries.
//note how the sequence is zero indexed. We call 0 the 0th entry, not the 1st.

function fib(n){
    let seq = [0,1];

    // //if n is less than 2 then this loop just won't run
    for (let i=2;i<=n;i++){
        seq[i] = (seq[i-1]+seq[i-2]);
    };

    return seq[n];
};

console.log(fib(0), 0);
console.log(fib(1), 1);
console.log(fib(2), 1);
console.log(fib(3), 2);