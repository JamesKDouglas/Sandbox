function dontGiveMeFive(start, end)
{
    //first, put these numbers in an array
    let length = end-start;
    let arr = [];
    let counter = 0;
    for (let i = start;i<=end;i++){
        arr[counter] = i;
        counter++;
    }

    //now I want to examine each number to see if it contains a 5.
    let subArr = [];
    for (let i = 0; i<=length; i++){
        subArr[i] = arr[i].toString().split('');//this splits up each number into its digits
        //Now look for a 5
        for(let j=0;j<=subArr[i].length;j++){
            if (subArr[i][j] == 5){
                subArr.splice(i,1);
                break;//without the break if this finds a 55 it will remove 2 values!
            }
        }
    }

    //When splice operates it does not do any shifting. It leaves an empty element. Lets remove them.
    let newArrNoBlanks = subArr.filter(el => el);
    
    return newArrNoBlanks.length;
}
dontGiveMeFive(1,90);

//At the end, we only need to return the number of elements that do not contain a 5. But suppose we wanted to actually use the array as numbers, we would sew it back together like this:
//  let newArrOneDimensional = [];
//  for (let i=0;i<newArrNoBlanks.length; i++){
//     console.log(newArrNoBlanks[i]);
//     newArrOneDimensional[i] = newArrNoBlanks[i].join('');
//  }
//  console.log(newArrOneDimensional);

//non-regex solution that is quite simple:
// function dontGiveMeFive(start, end){
//     let res = [];
//     for (let i = start; i <= end; i++) {
//       if (!i.toString().includes('5')) res.push(i);
//     }
//     return res.length;
//   }

//Leon doesn't like us using regex but this solution is quite a simple case:
// function dontGiveMeFive(start, end) {
//     let count = 0
//     for (let i = start; i <= end; i++) {
//       if (!/5/.test(i)) {
//         count++
//       }
//     }
//     return count
//   }