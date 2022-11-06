function getSum(n) {

    let triangleSum = 0n;
    let lineNumElements = 0n;
    let lineStart = 0n;
    let lineEnd = 0n;
    let lineSum = 0n;
  
    for (let i = 0n; i <= n; i++) {
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
  
  
//This is a version of Gauss's summation. A nice way to remember that is that in a series the first and last form a pair. As you go inwards to the series, taking off the outter pair and working on the next, the amount the pairs add to is always the same. I see this as a triangular symmetry but most writers just describe it without the geometry allegory.  