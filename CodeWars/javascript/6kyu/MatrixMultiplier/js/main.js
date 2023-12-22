//the input will be two arrays. Treat them as matrices.

//The goal is to return the dot product of the first multiplied by the second.

// ex:
//[[1, 2], [3, 4]], [[5, 6], [7, 8]] =>[[1*5 + 2*7, 1*5+2*8], [3*5+4*7, 3*6+4*8]] => [[19, 22], [43, 50]]

//
// [0.5, 1]
// [1.5, 2]
// x
// [0.2, 0.4]
// [0.6, 0.8]

//[0.5*0.2+1*0.6, 1.5*0.2 + 2*0.6],[0.5*0.4+1*0.8, 1.5*0.4+2*0.8]

//=>, [[0.7, 1.0], [1.5, 2.2]]
//edge cases? if the dimensions of the matrices are not valid, return null
//no timouts expected



function getMatrixProduct(a, b) {
//first, check the dimensions
//a is supposed to be multipled by b so the first element of a should have the same
//number of elements as b has.

//width a
let wa = a[0].length;
//height b
let hb = b.length;
if (wa !== hb){
  console.log("dimensions if the arrays don't match!")
  return null;
}

//on to multiplication.
//a for loop for the construction of the new array.
//Then counters with modulo to keep track of what to actually do.

//I'm going to count where I'm at for calculating. column counter a...
let cca = rcb = 0;
let sum = 0;
let dotProd = [];
for (let i=0;i<a.length;i++){
  dotProd.push([]);
}

//First we combine the row 0 with column 0. Then row 1 with column 0
//After we're done with all the rows of a we move on to using column 1.
//So the outter loop is ccb

for (ccb=0; ccb<b[0].length;ccb++){
  for (let rca=0;rca<a.length;rca++){
    // we've chosen our column and row. now create sum
    sum = 0;

    while (cca<a[0].length) {
      // console.log("a[0].length",  a[0].length);
      // console.log("first term a[rca][cca]",a[rca][cca]);
      // console.log("second term",b[rcb][ccb]);
      // console.log("new product:",a[rca][cca]*b[rcb][ccb]);
      // console.log("counters rca, cca, rcb, ccb", rca, cca, rcb, ccb);
      sum += a[rca][cca]*b[rcb][ccb];
      rcb++;
      cca++;
    } 
    // console.log(dotProd);
    // console.log("end a sum. will push ", sum);
    // console.log("counters rca, cca, rcb, ccb", rca, cca, rcb, ccb);
    //push sum
    dotProd[rca][ccb] = sum;
    // console.log(dotProd);
    rcb=0;
    cca=0;
  }
}
return dotProd;

};

// console.log(getMatrixProduct([[1, 2], [3, 4]], [[5, 6], [7, 8]]), [[19, 22], [43, 50]]);

let arr1 =  [ [ 7, 3 ], [ 2, 5 ], [ 6, 8 ], [ 9, 0 ] ];
let arr2 =  [ [ 7, 4, 9 ], [ 8, 1, 5 ] ];
console.log(getMatrixProduct(arr1, arr2), [ [ 73, 31, 78 ], [ 54, 13, 43 ], [ 106, 32, 94 ], [ 63, 36, 81 ] ]);

// [ [ 73, 31, 78, NaN ], [ 54, 13, 43, NaN ], [ 106, 32, 94, NaN ], [ 63, 36, 81, NaN ] ] to deeply equal [ [ 73, 31, 78 ], [ 54, 13, 43 ], [ 106, 32, 94 ], [ 63, 36, 81 ] ]