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
  //If a and b can be multiplied, returns the product of a and b as a two-dimensional array. Otherwise returns null.
};