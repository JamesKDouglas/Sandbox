//Inputs: 3 of them. The first is a function that takes 2 numbers.
//The other two are arrays.

//The goal is to consider the 2 arrays as paired numbers according to their index
//and submit those two numbers to the function.
//Take the output of the function and add it to a new array
//Do this for all the values of the -shortest- array. Discard any values that
//extend beyond this length from a larger array.

//ex:
//zipWith( Math.pow, [10,10,10,10], [0,1,2,3] ) =>  [1,10,100,1000]
//Here we took 10,0, which is index 0
//and submitted both values to math.pow as Math.pow(10,0)
//which returns 1. And so on for the rest.

// zipWith( Math.max, [1,4,7,1,4,7], [4,7,1,4,7,1] )  =>  [4,7,7,4,7,7]

//See how the result is returned as an array.

//Inputs are integers? Yes. BigInt? Don't expect that in or out.
//No timeouts etc to speak of. 
//"3" No don't expect.

function zipWith(fn,a0,a1) {

    //Decide which array is the shortest
    let shortest = Math.min(a0.length,a1.length);
    
    //declare a new array to put things into
    
    //for loop to go through the values.
    //For every index, submit the values to the fn function
    //and push the value to an array.
    let newArr = [];
    for (let i=0;i<shortest;i++){
      newArr.push(fn(a0[i],a1[i]));
    }
    
    return newArr;
  }
  
  console.log(zipWith( Math.pow, [10,10,10,10], [0,1,2,3] ),[1,10,100,1000]);
  console.log(zipWith( Math.max, [1,4,7,1,4,7], [4,7,1,4,7,1] ), [4,7,7,4,7,7]);
  console.log(zipWith( function(a,b) { return a+b; }, [0,1,2,3], [0,1,2,3] ), [0,2,4,6]);
  console.log(zipWith( (a,b) => a+b,[0,1,2,3], [0,1,2,3] ),[0,2,4,6]);

//short version from pwynn  
//   function zipWith(fn,a0,a1) {
//     return Array.from({length: Math.min(a0.length, a1.length)}, (_, i) => fn(a0[i], a1[i]));
//   }