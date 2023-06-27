//Two inputs are given to a function: f - a function, and i which is the number
//of elements in an array.

//The goal is to return the array. The array is hidden inside f. 
//So we are trying to elucidate the contents of the array by passing arguments to f
//and looking at the return values.

//we know some things about f:
//it recieves 2 arguments a and b. 
//both are integers.
//f will take them as indices and load the values of the array at those indices.
//Then it will compare the integers (The elements of the array are integers.)

//if a equals b or the difference between them is larger than 2 f will raise an error.
//So f only returns something if the difference between the values
//at indices a and b are 1 or 2.

//When they are, the returned value will be the sum of bothe elements.

//the array always has at least 3 elements.

//array is [2,3,3]
//the main function gets f and 3 as inputs.

//f(0,1) would look up 2 and 3 and return 5.
//f(1,2) would look up 3,3 and return 6.
//f(0,2) would look up 2,3 and return 5.
//f(1,1) would return err

//array is [6,6,6]
//the main function gets f and 3 as inputs.

//f(0,1) would look up 6 and 6 as inputs and return 12
//f(1,2) would look up 6 and 6 as inputs and return 12
//f(0,2) would look up 6 and 6 as inputs and return 12


//Ok so there is an ambiguious reading of the problem statement,
//"When a equals b" could mean that the contents of the array at that 
//index set is equal. Or it could mean that the indices are equal. 
//It must be the latter for the problem to be possible.

//So all that means is the discovery algorithm must use either the next 
//, second next or prior or second prior value in the array.

//Really that's the same as just next and second next.
function guess(f,i){
  //the base case is 3 elements. 
  //That's 3 unknowns. But we also have 3 known values. 
  //So we can solve this
  //unknowns are the array elements x, y, z.
  //we know x+y, x+z and y+z.
  //Knowing that we have to solve for the unknowns.
  //we could add them all together and get
  // x+y + x+z + y+ z
  // 2x + 2z +2y.
  
  // or 2x + z+y, we know that as well. 
  
  //2x = -2z - 2y + j
  
  //2x = -(z+y) + k
}


