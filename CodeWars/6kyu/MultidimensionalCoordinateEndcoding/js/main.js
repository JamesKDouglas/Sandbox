//encode function:
//input will be a point and a set of dimensions.

//the set off dimensions defines a space. That can be a 2d grid like a table, or 
//an imaginary space of any dimensions. 
//The space contains 'cells' and each cell has a coordinate. The point uses a coordinate system
//
//ex point:[2,3] dimensions: [5,10]
//The space is zero indexed so this indicates the 3rd column and 4th row down.

//The job is to encode the point 'address'. That is, we put the point values through
//an algorithm and combine them with the dimensions. 
//It turns out this is a unique value if we use this algorithm:

//Multiply the point values by the lower dimensions and make a sum
//for example with a 4D space
// point: [6, 1, 2, 3] and dimensions: [10, 5, 10, 8] 
// encoded point: 
//                add 6 times 5 * 10 * 8 = 2400
//                add 1 time 10 * 8 = 80
//                add 2 times 8 = 16
//                add 3
//             + -------------------------------
//               0 + 2400 + 80 + 16 + 3 = 2499

// The encode function will return this integer. It's actually going to be a 
//BigInt.

// The decode function has input of dimensions and the bigInt encoded piont.
// It returns the decoded point as an array of bigInts.

//null case?
//timeouts? Big numbers? Don't worry about it. 

function encode(dimensions, point) {
    // console.log("dimensions:", dimensions);
    // console.log("point:",point);
    //use nested for loops.
    //first look at the first value in the point. 
      //Then create the product that we'll use for that point.
      //Use the product
      //Add the product to a running sum
    //Repeat for each value in the point (each dimension)
    
    let sum = 0n;
    let product = 1n;
    for (let i=0;i<point.length;i++){
      product = 1n;
      for (let j=i;j<dimensions.length;j++){
        if (j===dimensions.length-1){
          break;
        }
        // console.log('multiply product by:', dimensions[j+1]);
        product = product*dimensions[j+1]
        // console.log("j:",j);
        // console.log("product:", product);
      }
      sum += point[i]*product;
    }
    return sum;
  }
  

// point: [6, 1, 2, 3] and dimensions: [10, 5, 10, 8] 
// encodes to 2499
// 
// decoded point: 
//  [10, 5, 10, 8], 2499n

//  Well, the dimensions tell us the factors.
// But we still need to solve a linear system with 
// 4 unknown variables
// Even if there is just one solution, we can't just
// use algebra to rearrange and solve. 

//So how are we going to solve this then?
//                add 6 times 5 * 10 * 8 = 2400
//                add 1 time 10 * 8 = 80
//                add 2 times 8 = 16
//                add 3
//             + -------------------------------
//               0 + 2400 + 80 + 16 + 3 = 2499

//So this is a linear equation of the form aW+bX+cY+d = M where the capital letters are known and the lowercase ones are not.
//The only simplification is that everything is an integer. The capital letters are known and related but that doesn't help much.

// I don't see why W couldn't be a multiple of X, so there may very well
// not be a unique solution. ex:

// dimensions [5,5,5,5] and encoded value 625+125+25+1 = 776 for [1,1,1,1] 625+0+150+1 = 776 for [1,0,6,1]
//So just report one solution I guess?

//I could just map the whole space and put it into an object, then lookup the encoded value:point. 
//For a large space this would take a lot of memory etc. but it would be fine for the examples.
//That takes a lot of computational power though. 

//Lets try this: modulo. 

  function decode(dimensions, encodedPoint) {

    //First, make the list of products we will be using. We could make it on the fly but I'll just make an array.

    let products = [];
    let product = 1n;
    for (let i=0;i<dimensions.length;i++){
      product = 1n;
      for (let j=i;j<dimensions.length;j++){
        if (j===dimensions.length-1){
          break;
        }
        product *= dimensions[j+1];
      }
      products.push(product);
    }

    //Then use modulo to decode.
    let point = [];
    let rem = encodedPoint;

    for (let i=0;i<dimensions.length;i++){
      point.push(BigInt(Math.floor(Number(rem/products[i]))));
      rem = encodedPoint%products[i];
    }
    return point;
  }
  
  console.log(encode([10n, 5n, 10n, 8n], [6n, 1n, 2n, 3n]), 2499n);
  console.log(encode([7n, 5n, 10n], [0n, 0n, 0n]), 0n);
  
console.log(decode([10n, 5n, 10n, 8n], 2499n), [6n, 1n, 2n, 3n]);
  console.log(decode([10n], 7n), [7n]);
  console.log(decode([7n, 5n, 10n], 73n), [1n, 2n, 3n]);
  
  
//Blind4Basics does this ith reduce and map:
// function encode(dimensions, point) {
//   let f=1n
//   return dimensions.reduceRight( (s,d,i)=>(s+=f*point[i], f*=d, s), 0n);
// }

// function decode(dimensions, pnt) {
//   let z, p=dimensions.reduce((p,d)=>p*d, 1n)
//   return dimensions.map(d=>(p/=d, z=pnt/p, pnt%=p, z))
// }