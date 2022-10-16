// Params - radius of a semicircle matching the diagram's ADBCA, so that's AC.
// Return - the area of the 'lune'. If it's an integer then no decimal places are allowed. if it is not an integer then two decimal places are required.
// Example - bloodMoon(0) returns 0. bloodMoon(1) returns 0.25.
// Pseudocode-
//  The lune is described by an outter circle of diameter AF, and AF  = AC. So the diameter is the radius that we get as a parameter. Then we need to subtract half, because it's only half a circle. Then we need to subtract an inner semicircle. This semicircle is one of 4 parts described by the area of the circle diameter AD (which we can find the length of via pythagorean's theorum - just root 2^AB here since AC = AD) then subtracting the square AFDC's area.

function bloodMoon(r){
    // First, calculate the areas and a distance we need:
    // r = AC, CB, CD, AF.
    // AF is the diameter of the lune circle
    let luneCircleArea = Math.PI*(r/2)*(r/2);
    let ACDFSquareArea = r*r;
    let ADLength = Math.pow((2*r*r),0.5);
    let AFDCircleArea = Math.PI*(ADLength/2)**2;

    let luneArea = luneCircleArea/2 - (AFDCircleArea - ACDFSquareArea)/4;

    return +luneArea;
    
}

console.log(bloodMoon(3));
