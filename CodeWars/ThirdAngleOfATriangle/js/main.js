
//input will be 2 integers. They are angles from the interior of a triangle.

//Figure out the third angle.

//return it as an integer.

//remember that the total is 180 degrees.

//edge cases? Job size? No worries.

function otherAngle(a, b) {
  
    return 180-a-b;
  }
  console.log(otherAngle(30, 60), 90);
  console.log(otherAngle(60, 60), 60);
  console.log(otherAngle(43, 78), 59);