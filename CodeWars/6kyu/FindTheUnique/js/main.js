//input of an array of numbers. They can be integers or floats. Number type.
//input can be "very huge"/
//Number itself? - bigInt? No, just regular int range.

//In the array, all the numbers are the same except 1 of them.
//Find the one that is different.

//report the value of the one that is different. Not the position. The postion 
//not relevant.

//Invalid inputs? No we expect just integers and floats. Always array format.
//the array will be at least 3 elements.
//How many decimal places are we thinking? idk don't worry about it. 

//Timouts? 12 000 ms in codwars, with a bit more power than your computer. 
//"very huge?" like 5MB array.

//[ 1, 1, 1, 2, 1, 1 ] => 2
//[ 0, 0, 0.55, 0, 0 ] => 0.55
//make a very large example to use. 1 million entries.

function findUniq(arr) {
    //first decide what the "normal" number is.
    //so look at the first 3 items and see which 2 are the same.
    let normal = 0;
    if (arr[0]===arr[1]){
        normal = arr[0];
    } else if (arr[0] === arr[2]){
        normal = arr[0];
    } else {
        normal = arr[1];
    }
    
    //Then, determine the value of the unusual item.
    //we could do this by multiplying the number of entries by the value of the normal item
    //then subtracting that from the actual added sum of the array.
    //BUT the performance of this is poor in a case where the unusual item appears early in the array.

    //So instead, lets try this:
    //compare each item to the normal value. When you find the unusual one, return it.
    

    for (let i=0;i<arr.length;i++){
        if (arr[i]===normal){
            continue;
        } else {
            return arr[i];
        }
    }
}
  
  console.log(findUniq([1, 1, 1, 2, 1, 1]), 2)
  console.log(findUniq([0, 0, 0.55, 0, 0]), 0.55)
  let bigArr = JSON.parse(localStorage.getItem('bigArr'));
  console.log(findUniq(bigArr), 6);
  
  //third test case: 
  
  //make the array.
  function makeArr(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
      arr.push(5);//I'm just hardcoding 5 as normal here.
    }
    arr.splice(50000, 0, 6);//hardcoding insert a 6 at spot 50 000.
    localStorage.setItem('bigArr', JSON.stringify(arr));
  }
  
  