//Input will be 2 roots for a quadratic equation, of the form
//(x-root1)*(x-root2)
//Remember roots are the Y intercept. So the equation is
// (x-root1)*(x-root2) = 0

//Then you can multiply that out to 
//Ax^2+Bx+C = 0;


// given the form of the equation and the roots, return the coefficients as an array like, [A,B,C]

function quadratic(x1, x2){
    //We can see from multiplying it out that the coefficients can be calculated.
    //I want to include some minus signs too in order to handle negative/positive mismatches.

    x1 = -x1;//include minus sign by just building it in.
    x2 = -x2;

    let A = 1;
    let B = x1+x2;
    let C = x1*x2;
    return [A, B, C];
}

console.log(quadratic(1,2), [1,-3,2]);
console.log(quadratic(0,1), [1,-1,0]);
