function balancedNum(number)
{
    console.log(number);
    let length = number.toString().length;
    // console.log(length);
    let loopLength = 0;
    if (length<=2){
        return "Balanced";
    } else if (length%2 == 0) {
      //number has an even number of digits
        loopLength = length/2 - 1;//we exclude the middle 2 digits
    } else if (length%2 == 1) {
        //numbe has an odd number of digits
        loopLength = (length-1)/2 //exclude the middle digit
    }
  
    return addDigits(number, loopLength);
}
function addDigits(number, loopLength){
  let sumFirstHalf = 0;
  let sumSecondHalf = 0;
  let numArr = Array.from(number.toString());
//   console.log(numArr);
//   console.log(loopLength);
  for (let i = 0;i<loopLength;i++){
    sumFirstHalf += Number(numArr.shift());
    sumSecondHalf += Number(numArr.pop());
  }
//   console.log(sumFirstHalf);
//   console.log(sumSecondHalf);
  if (sumFirstHalf == sumSecondHalf){
    return "Balanced";
  } else {
    return "Not Balanced";
  }
}

console.log(balancedNum(959));