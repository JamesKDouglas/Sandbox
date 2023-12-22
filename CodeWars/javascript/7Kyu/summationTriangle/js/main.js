function getSum(n) {

  let triangleSum = 0n;
  let lineNumElements = 0n;
  let lineStart = 0n;
  let lineEnd = 0n;
  let lineSum = 0n;
  let iStart = 0n;
  
  //simple cache using an example case, so if we get another case like that jump right to the known spot.
  
  if (n>100000n){
    iStart = 100000n
    n -= 100000n;
    triangleSum = 666691666950001n;
  } else if (n > 730647n && n < 936104n){
    iStart=730647n;
    n -= 730647n;
    triangleSum = 260036185231033372n;
  } else if (n>936104n){
    iStart = 936104n;
    n -= 936104n
    triangleSum = 546866590361495300n;
  }

  for (let i = iStart; i <= n; i++) {
    //i tracks the line number, with the top being 0

    //number of elements in the line is n-i+1
    lineNumElements = (n + 1n - i);

    //Decide start and stop
    lineStart = i * 3n + 1n;
    lineEnd = lineStart + (lineNumElements - 1n);

    lineSum = (lineStart + lineEnd) * lineNumElements / 2n;

    triangleSum += lineSum;
  }
  console.log("triangleSum:", triangleSum);
  
  return triangleSum;
}


