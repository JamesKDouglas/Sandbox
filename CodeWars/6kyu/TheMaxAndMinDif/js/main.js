//The input is two arrays of integers.

//The goal is to find, out of all the number, the max and min difference pairs.
//One number from each pair must be from each of the arrays.

//return the integers as an array [highest, lowest]
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
  console.log("begin",arr1.sort((a,b)=>a-b), arr2.sort((a,b)=>a-b));
  //random with large numbers is unlikely to have repeats in the same array.

  
  //sort them.
  //for max, just take the min from one, compare to max of another
  //or use Math.min, max.
  //Try both combos
  
  let max1 = Math.max(...arr1);
  let max2 = Math.max(...arr2);
  let min1 = Math.min(...arr1);
  let min2 = Math.min(...arr2);
  
  let finalArr = [0,0];
  
  let dif1 = max1-min2;
  let dif2 = max2-min1;
  
  finalArr[0] = Math.max(dif1,dif2);
  console.log(finalArr);
  
  //For the min, that's a bit more difficult.
  //start in the middle and search outwards?
  //Well, I could look for matching numbers as an early return.
  //Suppose we use the sorted arrays and
  
  //1 do the ranges overlap? Because if not, then it's just max-min.
  //If they do overlap, then we have to examin the actual elements.
  //Sort. Look at the first one. Test. If it starts going up, stop and go the the next.
  //has to be above zero.
  // console.log("min2",min2)
  // console.log("max2",max2)
  // console.log("max1",max1)
  // console.log("min1",min1)

  if (min2>max1 || min1>max2){
     console.log("no overlap");
  
    finalArr[1] = Math.abs(Math.min(dif1,dif2));
    return finalArr;
  } else {
    console.log("there is overlap. search for min");
    arr1 = arr1.sort((a,b)=>a-b);
    arr2 = arr2.sort((a,b)=>a-b);
    let smallestDif = finalArr[0];
    let dif = 0;
    // //which array is shortest?
    let shortestLen = Math.min(arr1.length, arr2.length);
    let longestLen = Math.max(arr1.length, arr2.length);

    let difArr = [];
    for (let i=0;i<shortestLen;i++){
      difArr.push(arr1[i]-arr2[i]);
    }
    console.log("difArr", difArr);
    for (let i=0;i<shortestLen;i++){
      console.log("i", i)
      for (let j=0;j<longestLen;j++){
        console.log("j",j);
        if (arr1.length<arr2.length){
          dif = arr1[i]-arr2[j];
          console.log("dif", dif);
        } else {
          dif = arr2[i]-arr1[j];
          console.log("dif", dif);
        }
        
        if (dif === 0){
          finalArr[1] = 0;
          return finalArr;
        } else if (dif<0){
          console.log("negatives don't count as small differences");
          // break;
        } else if (dif<=smallestDif){
          console.log("found a new smallest");
          smallestDif = dif;
        } else if (dif>smallestDif){
          // console.log("next number")
          // break;
        }

      }
    }
    finalArr[1] = Math.abs(smallestDif);
    return finalArr;
  }
  
}

// console.log("test1", maxAndMin([3,5,10],[20,7,15,8]), [17,2]);
// console.log("test2", maxAndMin([3],[20]), [17,17]);
// console.log("test3", maxAndMin([3,10,5],[3,10,5]), [7,0]);

let arr1 = [-86968,46083,-65703,-23077,11658,-97307,99011,77984,-56958,52059,-58841,45889,-28284,-84842,72261,83161,-20618,-82827,-28085,-2372,75259,18451,86487,-40160,2487,-96838,92417,83131,-90719,-30059,33553,2078,69922]
let arr2 = [-85726,-50939,42931,-2049,-90130,33588,12977,-66966,65254,3488,75305,45743,26157,-10565,-44804,-80171,32302,59776,-51729,56515,-22869,-6990,45054,85648,78625,-53808,-99892,-54689,93347,-49170,-85151,95533,82867,-3772,68434,16257,63909,-85965,-10648,-46203] 
console.log("test4", maxAndMin(arr1,arr2), [ 198903, 35 ]);

//[ 198903, 2585 ] to deeply equal [ 198903, 35 ]
//Ok this is a problem comparing negative numbers. 

//-84842 and -85151 should show a 309 value?. The difference between them is indeed 309.
//Look at the smallest possible magnitude. c