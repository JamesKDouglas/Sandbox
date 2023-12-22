//The input is two arrays of integers.

//The goal is to find, out of all the number, the max and min difference pairs.
//One number from each pair must be from each of the arrays.

//return the integers as an array [highest difference, lowest difference]
//ex:
//ar1 = [3,10,5];
//ar2 = [20,7,15,8];
//return [17,2]; //that comes from 20-3 and 7-5 or 10-8

//edge cases: all zeros? well then just return [0,0];
//bigInt? no. 
//large arrays, timeouts? No. 
//invalid inputs? Not expected.

//are we talking about magnitude or number? -10 is smaller than -9, right?
//No, it must be magnitude otherwise we could say 5-20 = -15
//So "min" is the smallest magnitude.

function maxAndMin(arr1,arr2){
  // console.log("begin",arr1.sort((a,b)=>a-b), arr2.sort((a,b)=>a-b));
  
  let finalArr = [0,0];
//calculate the maximum difference by finding the min and max in both arrays
//then obviously the max difference is the max number minus the min number.
//There are two pairs to inspect: the highest from 1 and lowest from 2, 
//then highest from 2 and lowest from 1.
  
  let max1 = Math.max(...arr1);
  let max2 = Math.max(...arr2);
  let min1 = Math.min(...arr1);
  let min2 = Math.min(...arr2);
  
  let dif1 = max1-min2;
  let dif2 = max2-min1;
  
  finalArr[0] = Math.max(dif1,dif2);
  // console.log(finalArr);
  
  //For the min, that's a bit more difficult.

  //First of all, if there is no overap that's a special case that we can quickly find.
  //In that case the minimum is just where one leaves off and the other begins.

  //But lets try brute force with sorting to make things faster:
  //Sort the arrays.
  //Decide which array is shortest so we don't call on things that don't exist.
  //Then just take the first element of the short array and subtract all the others, one at at time
  //Remember the minimum

  //check for overlap
  if (min2>max1 || min1>max2){
     console.log("no overlap");
  
    finalArr[1] = Math.abs(Math.min(dif1,dif2));
    return finalArr;
  } else {
    console.log("there is overlap. search for min");
    //sort ascending order
    arr1 = arr1.sort((a,b)=>a-b);
    arr2 = arr2.sort((a,b)=>a-b);
    let smallestDif = finalArr[0];//larger than or equal to the max, of course.
    
    let dif = 0;
    // //which array is shortest?
    let shortestLen = Math.min(arr1.length, arr2.length);
    let longestLen = Math.max(arr1.length, arr2.length);
    //now for the big calculation;
    let iOut = 0;
    let jOut = 0;
    for (let i=0;i<shortestLen;i++){
      for (let j=0;j<longestLen;j++){
        //if 1 is the shortest:
        if (shortestLen === arr1.length){
          if (Math.abs(arr1[i]-arr2[j])<smallestDif){
            smallestDif = Math.abs(arr1[i]-arr2[j]);
            iOut = i;
            jOut = j;
          }
        } else {//If 2 is the shortest
          if (Math.abs(arr2[i]-arr1[j])<smallestDif){
            smallestDif = Math.abs(arr2[i]-arr1[j]);
            iOut = i;
            jOut = j;
          }
        }
        //if 2 is the shortest:
      }
    }
    console.log("smallestDif", smallestDif);
    console.log("jOut", jOut);
    console.log("iOut", iOut);

    finalArr[1] = smallestDif;
    return finalArr;
  }
  
}

// console.log("test1", maxAndMin([3,5,10],[20,7,15,8]), [17,2]);
// console.log("test2", maxAndMin([3],[20]), [17,17]);
// console.log("test3", maxAndMin([3,10,5],[3,10,5]), [7,0]);

// let arr1 = [-86968,46083,-65703,-23077,11658,-97307,99011,77984,-56958,52059,-58841,45889,-28284,-84842,72261,83161,-20618,-82827,-28085,-2372,75259,18451,86487,-40160,2487,-96838,92417,83131,-90719,-30059,33553,2078,69922]
// let arr2 = [-85726,-50939,42931,-2049,-90130,33588,12977,-66966,65254,3488,75305,45743,26157,-10565,-44804,-80171,32302,59776,-51729,56515,-22869,-6990,45054,85648,78625,-53808,-99892,-54689,93347,-49170,-85151,95533,82867,-3772,68434,16257,63909,-85965,-10648,-46203] 
// console.log("test4", maxAndMin(arr1,arr2), [ 198903, 35 ]);

//[ 198903, 2585 ] to deeply equal [ 198903, 35 ]
//Ok this is a problem comparing negative numbers. 

//-84842 and -85151 should show a 309 value?. The difference between them is indeed 309.
//Look at the smallest possible magnitude. c
let arr1 = [-39957,38342,14764,79579,51352,2214,-23190,82202,-41875,-89379,80649,116,-65640,24622,-7304,36041,42265,89988,67465,2904,-94131,74867,93115,-37471,96179,67161,-76642,13208,72263,-45325,1473,91605,64818]
let arr2 = [-87985,-15859,40661,-35082,-54932,31122,-6406,79699,29683,8897,-5718,95538,-68638,-98292,39546,-48839,-14078] 
console.log("test4", maxAndMin(arr1,arr2), [ 194471, 120 ]);

// expected [ 194471, 898 ] to deeply equal [ 194471, 120 ]