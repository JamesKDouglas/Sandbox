//Input will be an integer.

//Find how many times the loop has to run in order to reach 1:
//Loop:
// if(number is even) number = number / 2
// if(number is odd) number = 3*number + 1

//So the number either goes up if it's odd or down all the way to 1 if it's even. 

//Just keep looping and count the loops. 

//output: number of times the loop ran.

// ex:
// hotpo(5) returns 5
// hotpo(6) returns 8 
// hotpo(23) returns 15

var hotpo = function(n){
    let counter = 0;
    while (n>1){
        if (n%2===0) {
            n=n/2;
        }
        else {
            n=n*3+1;
        } 
        counter++;
        if (n===1) break;
    } 
    return counter;
}


console.log(hotpo(5), 5);
console.log(hotpo(6), 8);
console.log(hotpo(23), 15);