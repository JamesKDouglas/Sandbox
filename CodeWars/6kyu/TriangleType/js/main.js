

//Three inputs are provided. They are floating points or integers and 
//represent the sides of a triangle.

//The goal is to return a triangle type, represented by number:
//acute: 1
//right angle: 2
//obtuse: 3

//acute is less than 90 degrees for all angles. 
//obtuse is 1 angle more than 90

//It could be that no triangle is possible. If that is the case, return 0.

//examples:
//2,4,6 => 0
//8,5,7 => 1
//3,4,5 => 2
//7, 12, 8 => 3

//The instructions note that you don't actually have to calculate angles.

//Perhaps we could compare lengths?

//If one side is longer than the other two sides combined, 
//no triangle is possible

//Right angle triangles follow pythagorean theorum h^2 = a^2 + b^2
//If the equation is true, the triangle is a right angle.
//If the left is smaller, it is acute
//if the left is larger, it is obtuse.

//return type as a number.

//edge cases: string type? Array? Not expected.
//BigInts? Not expected.
//extra inputs? not expected.
//Timeouts? Not an issue.


function triangleType(a, b, c){
  //Is this even a triangle?
  if (a+b<=c || a+c<=b || b+c<=a){
    return 0;
  }
  
  //If it is a triangle, decide on acuteness!
  //Is there a right angle?
  //If there is, the Pyth thereom will be satisfied.
  //Find the largest and consider that the line to think about as hypoteneuse.
  
  let sorted = [a,b,c].sort((a,b) => b-a);//sort ascending
  let h = sorted[0];
  a = sorted[1];
  b = sorted[2];
  
  if (h**2<a**2+b**2){
    return 1;//acute 
  } else if (h**2===a**2+b**2){
    return 2;//right
  } else if (h**2>a**2+b**2){
    return 3;//obtuse
  }
  
}

console.log(triangleType(2,4,6), 0);
console.log(triangleType(8,5,7), 1);
console.log(triangleType(3,4,5), 2);
console.log(triangleType(7, 12, 8), 3);