function findAverage(array) {
    // your code here
    let avg = array.reduce((a,c)=>a+c,0)/array.length || 0;
    return avg;
  }